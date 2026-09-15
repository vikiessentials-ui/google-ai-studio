/**
 * Official YouTube IFrame Player & Playlist API helper
 * Complies with YouTube Terms of Service:
 * - Uses standard IFrame Player API
 * - Retains YouTube branding and controls
 * - No custom ads or bypassing playback rules
 */

export function extractYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();

  // Plain 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) {
    return trimmed;
  }

  const patterns = [
    /(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/,
    /(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/,
    /(?:youtube\.com\/live\/)([a-zA-Z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = trimmed.match(pattern);
    if (match) return match[1];
  }

  return null;
}

export function extractYouTubePlaylistId(url: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();

  // Direct playlist ID format (usually starts with PL, OLAK, etc.)
  if (/^[a-zA-Z0-9_-]{18,50}$/.test(trimmed)) {
    return trimmed;
  }

  try {
    const parsed = new URL(trimmed);
    const listParam = parsed.searchParams.get('list');
    if (listParam) return listParam;
  } catch {
    const match = trimmed.match(/[?&]list=([a-zA-Z0-9_-]+)/);
    if (match) return match[1];
  }

  return null;
}

// Backward compatible alias
export const extractYouTubeId = extractYouTubeVideoId;

export function getYouTubeThumbnail(videoId: string): string {
  if (!videoId) return 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80';
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

/**
 * Generates an official YouTube embedded player URL for single video or full playlist.
 */
export function getYouTubeEmbedUrl(params: {
  videoId?: string;
  playlistId?: string;
  autoplay?: boolean;
}): string {
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const searchParams = new URLSearchParams({
    enablejsapi: '1',
    rel: '0',
    modestbranding: '1',
    origin,
  });

  if (params.autoplay) {
    searchParams.set('autoplay', '1');
  }

  if (params.playlistId && !params.videoId) {
    // Pure playlist embed
    return `https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(params.playlistId)}&${searchParams.toString()}`;
  }

  if (params.videoId) {
    if (params.playlistId) {
      searchParams.set('list', params.playlistId);
    }
    return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(params.videoId)}?${searchParams.toString()}`;
  }

  return '';
}
