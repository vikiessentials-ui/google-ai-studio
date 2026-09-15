import { useEffect, useRef, useState } from 'react';
import {
  AlertTriangle,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RotateCcw,
  Clock,
  ExternalLink,
  ShieldAlert,
  HelpCircle,
  Video
} from 'lucide-react';
import { extractYouTubePlaylistId } from '@/lib/youtube';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

type YouTubePlayerProps = {
  playlistId: string;
  playlistUrl?: string;
  courseTitle?: string;
  selectedLessonIndex?: number;
  onVideoIndexChange?: (index: number) => void;
  onVideoEnded?: (index: number) => void;
  onPlaylistLoaded?: (videoIds: string[]) => void;
  onVideoDurationChange?: (duration: number) => void;
};

// Singleton promise to ensure YouTube IFrame API script is only injected once
let ytApiPromise: Promise<void> | null = null;

function loadYouTubeIframeApi(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve();

  if (window.YT && window.YT.Player) {
    return Promise.resolve();
  }

  if (!ytApiPromise) {
    ytApiPromise = new Promise((resolve) => {
      const existingScript = document.getElementById('youtube-iframe-api-script');
      if (!existingScript) {
        const tag = document.createElement('script');
        tag.id = 'youtube-iframe-api-script';
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
      }

      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof prevCallback === 'function') prevCallback();
        resolve();
      };

      // Poll as fallback in case callback already fired
      const interval = setInterval(() => {
        if (window.YT && window.YT.Player) {
          clearInterval(interval);
          resolve();
        }
      }, 100);
    });
  }

  return ytApiPromise;
}

export default function YouTubePlayer({
  playlistId,
  playlistUrl,
  courseTitle = 'Course',
  selectedLessonIndex = 0,
  onVideoIndexChange,
  onVideoEnded,
  onPlaylistLoaded,
  onVideoDurationChange,
}: YouTubePlayerProps) {
  const containerId = useRef(`yt-player-${Math.random().toString(36).substring(2, 9)}`);
  const playerRef = useRef<any>(null);

  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(0);
  const [totalVideos, setTotalVideos] = useState<number | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const [hasError, setHasError] = useState(false);
  const [errorCode, setErrorCode] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const cleanPlaylistId = extractYouTubePlaylistId(playlistId) || playlistId;

  // Log playlist loading diagnostics as per Requirement 10
  useEffect(() => {
    console.log('[LearnWithFlow YouTube Player] Initializing with Playlist ID:', cleanPlaylistId);
  }, [cleanPlaylistId]);

  // Load YouTube API & instantiate player
  useEffect(() => {
    let isCancelled = false;
    setHasError(false);
    setErrorMessage('');
    setIsReady(false);

    if (!cleanPlaylistId) {
      return;
    }

    loadYouTubeIframeApi().then(() => {
      if (isCancelled) return;

      const element = document.getElementById(containerId.current);
      if (!element || !window.YT || !window.YT.Player) return;

      try {
        if (playerRef.current) {
          try {
            playerRef.current.destroy();
          } catch {
            // Ignore destruction errors
          }
          playerRef.current = null;
        }

        console.log(`[LearnWithFlow YouTube Player] Mounting official player for list: ${cleanPlaylistId}`);

        playerRef.current = new window.YT.Player(containerId.current, {
          height: '100%',
          width: '100%',
          playerVars: {
            listType: 'playlist',
            list: cleanPlaylistId,
            index: selectedLessonIndex,
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
            origin: typeof window !== 'undefined' ? window.location.origin : '',
            enablejsapi: 1,
          },
          events: {
            onReady: (event: any) => {
              if (isCancelled) return;
              console.log('[LearnWithFlow YouTube Player] Official player is READY for playlist:', cleanPlaylistId);
              setIsReady(true);
              setHasError(false);

              try {
                const playlist = event.target.getPlaylist();
                if (Array.isArray(playlist)) {
                  setTotalVideos(playlist.length);
                  onPlaylistLoaded?.(playlist);
                }
                const idx = event.target.getPlaylistIndex();
                if (typeof idx === 'number' && idx >= 0) {
                  setCurrentPlaylistIndex(idx);
                }
                const dur = event.target.getDuration();
                if (typeof dur === 'number' && dur > 0) {
                  setDuration(dur);
                  onVideoDurationChange?.(dur);
                }
              } catch (e) {
                console.warn('[LearnWithFlow YouTube Player] Could not inspect initial playlist info:', e);
              }
            },
            onStateChange: (event: any) => {
              if (isCancelled) return;

              // YT.PlayerState: -1 (UNSTARTED), 0 (ENDED), 1 (PLAYING), 2 (PAUSED), 3 (BUFFERING), 5 (CUED)
              const state = event.data;
              setIsPlaying(state === 1);

              if (state === 0) {
                // Video Ended: trigger lesson assessment completion
                console.log('[LearnWithFlow YouTube Player] Video completed at playlist index:', currentPlaylistIndex);
                onVideoEnded?.(currentPlaylistIndex);
              }

              if (state === 1 || state === 2 || state === 0) {
                try {
                  const idx = event.target.getPlaylistIndex();
                  if (typeof idx === 'number' && idx >= 0) {
                    setCurrentPlaylistIndex(idx);
                    onVideoIndexChange?.(idx);
                  }
                  const dur = event.target.getDuration();
                  if (typeof dur === 'number' && dur > 0) {
                    setDuration(dur);
                    onVideoDurationChange?.(dur);
                  }
                } catch {
                  // ignore
                }
              }
            },
            onError: (event: any) => {
              const code = event.data;
              console.error(
                `[LearnWithFlow YouTube Player Error] Diagnostic Code: ${code} for Playlist ID: "${cleanPlaylistId}".`,
                'Error Reference: 2=Invalid parameter, 5=HTML5 player error, 100=Video removed/private, 101/150=Owner restricts embedding.'
              );

              let humanMessage = 'This YouTube learning resource is currently unavailable.';
              if (code === 2) {
                humanMessage = 'Invalid YouTube playlist format or identifier.';
              } else if (code === 5) {
                humanMessage = 'HTML5 player playback encountered an issue.';
              } else if (code === 100) {
                humanMessage = 'The requested video was not found, has been removed, or is marked private.';
              } else if (code === 101 || code === 150) {
                humanMessage = 'The playlist creator has restricted playback in embedded web players.';
              }

              setErrorCode(code);
              setErrorMessage(humanMessage);
              setHasError(true);
            },
          },
        });
      } catch (err: any) {
        console.error('[LearnWithFlow YouTube Player] Initialization exception:', err);
        setHasError(true);
        setErrorMessage(err?.message || 'Failed to initialize YouTube IFrame Player.');
      }
    });

    return () => {
      isCancelled = true;
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {
          // ignore
        }
        playerRef.current = null;
      }
    };
  }, [cleanPlaylistId]);

  // Sync selectedLessonIndex from parent
  useEffect(() => {
    if (isReady && playerRef.current && typeof selectedLessonIndex === 'number') {
      try {
        const currentIdx = playerRef.current.getPlaylistIndex?.();
        if (typeof currentIdx === 'number' && currentIdx !== selectedLessonIndex) {
          console.log(`[LearnWithFlow YouTube Player] Jumping to video at index: ${selectedLessonIndex}`);
          playerRef.current.playVideoAt?.(selectedLessonIndex);
          setCurrentPlaylistIndex(selectedLessonIndex);
        }
      } catch (e) {
        console.warn('[LearnWithFlow YouTube Player] playVideoAt failed:', e);
      }
    }
  }, [selectedLessonIndex, isReady]);

  // Playback control handlers
  function handlePlayPause() {
    if (!playerRef.current) return;
    try {
      if (isPlaying) {
        playerRef.current.pauseVideo?.();
      } else {
        playerRef.current.playVideo?.();
      }
    } catch (e) {
      console.warn('Playback control failed:', e);
    }
  }

  function handlePrevious() {
    if (!playerRef.current) return;
    try {
      playerRef.current.previousVideo?.();
    } catch (e) {
      console.warn('Previous video failed:', e);
    }
  }

  function handleNext() {
    if (!playerRef.current) return;
    try {
      playerRef.current.nextVideo?.();
    } catch (e) {
      console.warn('Next video failed:', e);
    }
  }

  function handleRetry() {
    setHasError(false);
    setErrorMessage('');
    if (playerRef.current && cleanPlaylistId) {
      try {
        playerRef.current.loadPlaylist?.({
          listType: 'playlist',
          list: cleanPlaylistId,
          index: selectedLessonIndex,
        });
      } catch {
        // reload
      }
    }
  }

  // Format seconds to mm:ss
  function formatTime(seconds: number): string {
    if (!seconds || isNaN(seconds)) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // If no playlist ID provided or empty
  if (!cleanPlaylistId) {
    return (
      <div className="bg-slate-900 rounded-2xl p-8 text-center text-white aspect-video flex flex-col items-center justify-center border border-slate-800">
        <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3 border border-amber-500/30">
          <Clock className="w-6 h-6" />
        </div>
        <h3 className="text-base font-bold text-slate-100">Playlist Pending Verification</h3>
        <p className="mt-2 text-xs text-slate-400 max-w-md leading-relaxed">
          This course's YouTube learning playlist is currently queued for official verification.
          You can still review the course curriculum, test your skills on the lesson quizzes, or import a verified playlist in Owner Mode.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
      {/* Official YouTube Player Viewport Container */}
      <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
        {/* The DOM element targeted by YT.Player */}
        <div
          id={containerId.current}
          className={`w-full h-full ${hasError ? 'hidden' : 'block'}`}
        />

        {/* Loading Spinner overlay before player is ready */}
        {!isReady && !hasError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/90 text-white z-10">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mb-3" />
            <span className="text-xs text-slate-300 font-medium tracking-wide">
              Loading Official YouTube Playlist...
            </span>
            <span className="text-[11px] text-slate-500 font-mono mt-1">
              ID: {cleanPlaylistId}
            </span>
          </div>
        )}

        {/* Clear, Helpful Error Overlay - Never a broken black player (Requirements 7 & 27) */}
        {hasError && (
          <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center bg-slate-950 text-white z-20">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3 border border-amber-500/30">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-100">
              This YouTube learning resource is currently unavailable
            </h3>
            <p className="mt-2 text-xs text-slate-400 max-w-md leading-relaxed">
              {errorMessage || 'The video or playlist could not be loaded due to privacy or embedding restrictions.'}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleRetry}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors border border-slate-700"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry Playback</span>
              </button>

              {playlistUrl && (
                <a
                  href={playlistUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white transition-colors"
                >
                  <span>Open Directly on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <div className="mt-4 text-[10px] text-slate-500 font-mono">
              Diagnostic code: {errorCode ?? 'N/A'} • Playlist ID: {cleanPlaylistId}
            </div>
          </div>
        )}
      </div>

      {/* Embedded Player Navigation & Controls Bar (Requirements 2 & 6) */}
      <div className="bg-slate-900 border-t border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          {/* Previous Video */}
          <button
            onClick={handlePrevious}
            disabled={!isReady || currentPlaylistIndex <= 0}
            id="yt-player-prev-btn"
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            title="Previous Video in Playlist"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          {/* Play / Pause Toggle */}
          <button
            onClick={handlePlayPause}
            disabled={!isReady}
            id="yt-player-play-btn"
            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold disabled:opacity-40 flex items-center gap-1.5 transition-colors"
            title={isPlaying ? 'Pause Video' : 'Play Video'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Play</span>
              </>
            )}
          </button>

          {/* Next Video */}
          <button
            onClick={handleNext}
            disabled={!isReady || (totalVideos !== null && currentPlaylistIndex >= totalVideos - 1)}
            id="yt-player-next-btn"
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            title="Next Video in Playlist"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Playlist Position and Video Duration Indicators */}
        <div className="flex items-center gap-4 text-slate-400">
          <div className="flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5 text-blue-400" />
            <span className="font-semibold text-slate-200">
              Video {currentPlaylistIndex + 1}
              {totalVideos ? ` of ${totalVideos}` : ''}
            </span>
          </div>

          {duration > 0 && (
            <div className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
              <Clock className="w-3 h-3 text-slate-500" />
              <span>{formatTime(duration)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
