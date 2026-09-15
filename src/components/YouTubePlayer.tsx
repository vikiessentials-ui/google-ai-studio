import { useEffect, useRef, useState } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RotateCcw,
  Clock,
  ExternalLink,
  ShieldAlert,
  Video
} from 'lucide-react';
import { extractYouTubePlaylistId } from '@/lib/youtube';

interface YTPlayerInstance {
  playVideo: () => void;
  pauseVideo: () => void;
  nextVideo: () => void;
  previousVideo: () => void;
  playVideoAt: (index: number) => void;
  getPlaylist: () => string[];
  getPlaylistIndex: () => number;
  getDuration: () => number;
  getCurrentTime: () => number;
  destroy: () => void;
}

interface YTEvent {
  target: YTPlayerInstance;
  data: number;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        elementId: string,
        config: {
          height?: string | number;
          width?: string | number;
          playerVars?: Record<string, string | number>;
          events?: {
            onReady?: (event: YTEvent) => void;
            onStateChange?: (event: YTEvent) => void;
            onError?: (event: YTEvent) => void;
          };
        }
      ) => YTPlayerInstance;
    };
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
  const playerRef = useRef<YTPlayerInstance | null>(null);

  // Keep latest callbacks in refs so the YouTube lifecycle effect never needs to re-run
  const onVideoIndexChangeRef = useRef(onVideoIndexChange);
  onVideoIndexChangeRef.current = onVideoIndexChange;

  const onVideoEndedRef = useRef(onVideoEnded);
  onVideoEndedRef.current = onVideoEnded;

  const onPlaylistLoadedRef = useRef(onPlaylistLoaded);
  onPlaylistLoadedRef.current = onPlaylistLoaded;

  const onVideoDurationChangeRef = useRef(onVideoDurationChange);
  onVideoDurationChangeRef.current = onVideoDurationChange;

  const initialIndexRef = useRef(selectedLessonIndex);

  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState(0);
  const [totalVideos, setTotalVideos] = useState<number | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const [hasError, setHasError] = useState(false);
  const [errorCode, setErrorCode] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Extract clean playlist ID
  const cleanPlaylistId = extractYouTubePlaylistId(playlistId || playlistUrl || '') || '';

  // Initialize YouTube Player
  useEffect(() => {
    if (!cleanPlaylistId) {
      setHasError(true);
      setErrorMessage('No valid YouTube playlist identifier provided for this course.');
      return;
    }

    let isCancelled = false;

    loadYouTubeIframeApi().then(() => {
      if (isCancelled) return;

      if (!window.YT || !window.YT.Player) {
        console.warn('[LearnWithFlow YouTube Player] window.YT.Player unavailable after load.');
        return;
      }

      // If player instance already exists, destroy before recreating
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {
          // ignore
        }
        playerRef.current = null;
      }

      try {
        console.log(`[LearnWithFlow YouTube Player] Mounting official player for list: ${cleanPlaylistId}`);

        playerRef.current = new window.YT.Player(containerId.current, {
          height: '100%',
          width: '100%',
          playerVars: {
            listType: 'playlist',
            list: cleanPlaylistId,
            index: initialIndexRef.current,
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
            origin: typeof window !== 'undefined' ? window.location.origin : '',
            enablejsapi: 1,
          },
          events: {
            onReady: (event: YTEvent) => {
              if (isCancelled) return;
              console.log('[LearnWithFlow YouTube Player] Official player is READY for playlist:', cleanPlaylistId);
              setIsReady(true);
              setHasError(false);

              try {
                const playlist = event.target.getPlaylist();
                if (Array.isArray(playlist)) {
                  setTotalVideos(playlist.length);
                  onPlaylistLoadedRef.current?.(playlist);
                }
                const idx = event.target.getPlaylistIndex();
                if (typeof idx === 'number' && idx >= 0) {
                  setCurrentPlaylistIndex(idx);
                }
                const dur = event.target.getDuration();
                if (typeof dur === 'number' && dur > 0) {
                  setDuration(dur);
                  onVideoDurationChangeRef.current?.(dur);
                }
              } catch (e) {
                console.warn('[LearnWithFlow YouTube Player] Could not inspect initial playlist info:', e);
              }
            },
            onStateChange: (event: YTEvent) => {
              if (isCancelled) return;

              // YT.PlayerState: -1 (UNSTARTED), 0 (ENDED), 1 (PLAYING), 2 (PAUSED), 3 (BUFFERING), 5 (CUED)
              const state = event.data;
              setIsPlaying(state === 1);

              if (state === 0) {
                // Video Ended: trigger lesson assessment completion
                const endedIdx = event.target.getPlaylistIndex?.() ?? 0;
                console.log('[LearnWithFlow YouTube Player] Video completed at playlist index:', endedIdx);
                onVideoEndedRef.current?.(endedIdx);
              }

              if (state === 1 || state === 2 || state === 0) {
                try {
                  const idx = event.target.getPlaylistIndex();
                  if (typeof idx === 'number' && idx >= 0) {
                    setCurrentPlaylistIndex(idx);
                    onVideoIndexChangeRef.current?.(idx);
                  }
                  const dur = event.target.getDuration();
                  if (typeof dur === 'number' && dur > 0) {
                    setDuration(dur);
                    onVideoDurationChangeRef.current?.(dur);
                  }
                } catch {
                  // ignore
                }
              }
            },
            onError: (event: YTEvent) => {
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
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Failed to initialize YouTube IFrame Player.';
        console.error('[LearnWithFlow YouTube Player] Initialization exception:', err);
        setHasError(true);
        setErrorMessage(msg);
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

  // Sync selectedLessonIndex from parent when changed externally
  useEffect(() => {
    if (isReady && playerRef.current && typeof selectedLessonIndex === 'number') {
      try {
        const currentIdx = playerRef.current.getPlaylistIndex();
        if (currentIdx !== selectedLessonIndex) {
          console.log(`[LearnWithFlow YouTube Player] Cueing selected lesson index: ${selectedLessonIndex}`);
          playerRef.current.playVideoAt(selectedLessonIndex);
          setCurrentPlaylistIndex(selectedLessonIndex);
        }
      } catch (e) {
        console.warn('[LearnWithFlow YouTube Player] Error synchronizing lesson index:', e);
      }
    }
  }, [selectedLessonIndex, isReady]);

  // Controls
  function handlePlay() {
    if (playerRef.current) {
      playerRef.current.playVideo();
    }
  }

  function handlePause() {
    if (playerRef.current) {
      playerRef.current.pauseVideo();
    }
  }

  function handleNext() {
    if (playerRef.current) {
      console.log('[LearnWithFlow YouTube Player] Advancing to next video');
      playerRef.current.nextVideo();
    }
  }

  function handlePrevious() {
    if (playerRef.current) {
      console.log('[LearnWithFlow YouTube Player] Returning to previous video');
      playerRef.current.previousVideo();
    }
  }

  function handleReplay() {
    if (playerRef.current) {
      playerRef.current.playVideoAt(currentPlaylistIndex);
    }
  }

  // Format seconds into MM:SS
  function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  // Fallback UI when playlist cannot be played or has error
  if (hasError || !cleanPlaylistId) {
    const directWatchUrl = cleanPlaylistId
      ? `https://www.youtube.com/playlist?list=${encodeURIComponent(cleanPlaylistId)}`
      : playlistUrl || 'https://www.youtube.com';

    return (
      <div
        className="w-full bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 p-8 text-center text-white flex flex-col items-center justify-center min-h-[360px]"
        aria-label={`${courseTitle} Video Player Error`}
      >
        <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4 border border-amber-500/30">
          <ShieldAlert className="w-7 h-7" />
        </div>

        <h3 className="font-display text-lg sm:text-xl font-bold text-slate-100">
          Playlist Unavailable or Requires Verification
        </h3>

        <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
          {errorMessage ||
            'This YouTube playlist is either restricted by the content creator, marked private, or pending official verification.'}
        </p>

        {errorCode && (
          <div className="mt-3 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-400">
            Diagnostics: Error Code {errorCode} • Playlist ID: {cleanPlaylistId || 'None'}
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href={directWatchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0056D2] hover:bg-blue-700 shadow-sm transition-colors"
          >
            <span>Open Playlist on YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => {
              setHasError(false);
              setIsReady(false);
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Retry Player</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full bg-slate-950 rounded-2xl overflow-hidden shadow-lg border border-slate-800 flex flex-col"
      aria-label={`${courseTitle} Video Player`}
    >
      {/* 16:9 Aspect Video Display */}
      <div className="relative w-full aspect-video bg-black">
        <div id={containerId.current} className="w-full h-full" />

        {/* Loading overlay before iframe API is ready */}
        {!isReady && (
          <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center text-white z-10">
            <div className="w-10 h-10 border-3 border-blue-500 border-t-transparent rounded-full animate-spin mb-3" />
            <div className="text-xs font-bold text-slate-300 tracking-wide uppercase">
              Loading YouTube Playlist...
            </div>
            <div className="text-[11px] text-slate-500 font-mono mt-1">
              ID: {cleanPlaylistId}
            </div>
          </div>
        )}
      </div>

      {/* Integrated Player Control Bar */}
      <div className="bg-slate-900 border-t border-slate-800 px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-slate-300">
        {/* Left: Previous / Play / Pause / Next Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevious}
            disabled={!isReady || currentPlaylistIndex <= 0}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white transition-colors"
            title="Previous Video in Playlist"
            aria-label="Previous Video"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          {isPlaying ? (
            <button
              onClick={handlePause}
              disabled={!isReady}
              className="p-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold transition-colors"
              title="Pause Video"
              aria-label="Pause Video"
            >
              <Pause className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={handlePlay}
              disabled={!isReady}
              className="p-2 rounded-lg bg-[#0056D2] hover:bg-blue-600 text-white font-bold transition-colors shadow-sm"
              title="Play Video"
              aria-label="Play Video"
            >
              <Play className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={handleNext}
            disabled={!isReady || (totalVideos !== null && currentPlaylistIndex >= totalVideos - 1)}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-white transition-colors"
            title="Next Video in Playlist"
            aria-label="Next Video"
          >
            <SkipForward className="w-4 h-4" />
          </button>

          <button
            onClick={handleReplay}
            disabled={!isReady}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            title="Replay Video from Beginning"
            aria-label="Replay Video"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Center: Video Counter & Duration */}
        <div className="flex items-center gap-3 text-xs font-semibold">
          <div className="flex items-center gap-1.5 text-slate-400">
            <Video className="w-3.5 h-3.5 text-[#0056D2]" />
            <span>
              Video <strong className="text-white">{currentPlaylistIndex + 1}</strong>
              {totalVideos !== null ? ` of ${totalVideos}` : ''}
            </span>
          </div>

          {duration > 0 && (
            <div className="hidden sm:flex items-center gap-1 text-slate-400 font-mono text-[11px]">
              <Clock className="w-3 h-3 text-slate-500" />
              <span>{formatTime(duration)}</span>
            </div>
          )}
        </div>

        {/* Right: Direct YouTube Playlist Link */}
        <div>
          <a
            href={`https://www.youtube.com/playlist?list=${encodeURIComponent(cleanPlaylistId)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
            title="Open Playlist on YouTube"
          >
            <span>YouTube</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
