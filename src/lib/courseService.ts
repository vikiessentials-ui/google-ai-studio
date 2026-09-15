import type { Course, PlaylistStatus } from '@/types';
import { SEED_COURSES } from '@/data/seedCourses';

const STORAGE_KEY = 'learn_with_flow_courses_v2';

// In-memory / localStorage cache representing database layer
function getStoredCourses(): Course[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_COURSES));
      return SEED_COURSES;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_COURSES));
      return SEED_COURSES;
    }
    // Ensure all seed courses are included even if user previously had fewer
    const existingIds = new Set(parsed.map((c: Course) => c.id));
    const missingSeeds = SEED_COURSES.filter((c) => !existingIds.has(c.id));
    if (missingSeeds.length > 0) {
      const merged = [...parsed, ...missingSeeds];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      return merged;
    }
    return parsed;
  } catch (err) {
    console.warn('Error reading courses from storage, using seed data:', err);
    return SEED_COURSES;
  }
}

function persistCourses(courses: Course[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  } catch (err) {
    console.error('Failed to persist courses to localStorage:', err);
  }
}

export type QueryCoursesParams = {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  level?: string;
};

export type PaginatedCoursesResult = {
  courses: Course[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  categories: string[];
};

/**
 * High-performance course query abstraction designed to interface with
 * future GET /api/courses endpoints while serving the 50 initial courses locally.
 */
export async function queryCourses(params: QueryCoursesParams = {}): Promise<PaginatedCoursesResult> {
  const page = Math.max(1, params.page || 1);
  const limit = Math.max(1, params.limit || 24);
  const all = getStoredCourses();

  // Extract unique categories across entire catalog
  const categories = Array.from(new Set(all.map((c) => c.category))).sort();

  let filtered = [...all];

  // Category filter
  if (params.category && params.category !== 'All') {
    filtered = filtered.filter(
      (c) => c.category.toLowerCase() === params.category!.toLowerCase()
    );
  }

  // Level filter
  if (params.level && params.level !== 'All') {
    filtered = filtered.filter(
      (c) => c.level.toLowerCase() === params.level!.toLowerCase()
    );
  }

  // Search filter
  if (params.search && params.search.trim()) {
    const q = params.search.trim().toLowerCase();
    filtered = filtered.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        c.instructor.toLowerCase().includes(q)
    );
  }

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const startIndex = (page - 1) * limit;
  const paginated = filtered.slice(startIndex, startIndex + limit);

  return {
    courses: paginated,
    total,
    page,
    limit,
    totalPages,
    categories,
  };
}

/**
 * Simulates GET /api/courses/:courseId
 */
export async function getCourseById(id: string): Promise<Course | null> {
  const all = getStoredCourses();
  const match = all.find((c) => c.id === id);
  return match || null;
}

/**
 * Saves a new course or updates existing course (used in Owner Mode)
 */
export async function saveCourse(course: Course): Promise<Course> {
  const all = getStoredCourses();
  const index = all.findIndex((c) => c.id === course.id);
  const updatedCourse: Course = {
    ...course,
    updatedAt: new Date().toISOString(),
  };

  if (index >= 0) {
    all[index] = updatedCourse;
  } else {
    all.unshift(updatedCourse);
  }

  persistCourses(all);
  return updatedCourse;
}

/**
 * Deletes a course (Owner Mode)
 */
export async function deleteCourse(id: string): Promise<boolean> {
  const all = getStoredCourses();
  const filtered = all.filter((c) => c.id !== id);
  if (filtered.length !== all.length) {
    persistCourses(filtered);
    return true;
  }
  return false;
}

/**
 * Updates verified status of a YouTube playlist
 */
export async function updatePlaylistStatus(courseId: string, status: PlaylistStatus, playlistId?: string, playlistUrl?: string): Promise<Course | null> {
  const all = getStoredCourses();
  const course = all.find((c) => c.id === courseId);
  if (!course) return null;

  course.playlistStatus = status;
  if (playlistId !== undefined) course.playlistId = playlistId;
  if (playlistUrl !== undefined) course.playlistUrl = playlistUrl;
  course.updatedAt = new Date().toISOString();

  persistCourses(all);
  return course;
}

/**
 * Extracts YouTube Playlist ID from various URL formats
 */
export function extractPlaylistId(url: string): string | null {
  if (!url) return null;
  const trimmed = url.trim();

  // Direct ID check
  if (/^[a-zA-Z0-9_-]{18,50}$/.test(trimmed)) {
    return trimmed;
  }

  try {
    const parsed = new URL(trimmed);
    const listParam = parsed.searchParams.get('list');
    if (listParam) return listParam;
  } catch {
    // regex fallback
    const match = trimmed.match(/[?&]list=([a-zA-Z0-9_-]+)/);
    if (match) return match[1];
  }

  return null;
}

/**
 * Reset courses to initial 50 seed courses
 */
export function resetCoursesToSeed(): Course[] {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_COURSES));
  return SEED_COURSES;
}
