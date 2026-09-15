import type { Course, CourseLevel, PlaylistStatus } from '@/types';
import { initialCourses } from '@/data/initialCourses';

const LOCAL_STORAGE_COURSES_KEY = 'lwf_custom_courses_v1';

export type CourseQueryParams = {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  level?: CourseLevel | 'All';
  status?: PlaylistStatus | 'All';
};

export type PaginatedResponse<T> = {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasMore: boolean;
};

class CourseService {
  private getStoredCourses(): Course[] {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_COURSES_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge custom edits over initial courses
          const map = new Map<string, Course>();
          initialCourses.forEach((c) => map.set(c.id, c));
          parsed.forEach((c: Course) => map.set(c.id, c));
          return Array.from(map.values());
        }
      }
    } catch {
      // fallback to initial
    }
    return initialCourses;
  }

  private persistCourses(courses: Course[]) {
    try {
      localStorage.setItem(LOCAL_STORAGE_COURSES_KEY, JSON.stringify(courses));
    } catch (e) {
      console.warn('Failed to persist courses to localStorage:', e);
    }
  }

  /**
   * Simulates: GET /api/courses?page=1&limit=24&category=...&search=...
   * Prepared to directly swap with fetch('/api/courses?...') when connected to backend API
   */
  async getCourses(params: CourseQueryParams = {}): Promise<PaginatedResponse<Course>> {
    const {
      page = 1,
      limit = 12,
      category = 'All',
      search = '',
      level = 'All',
      status = 'All',
    } = params;

    const allCourses = this.getStoredCourses();

    let filtered = allCourses;

    // Filter by Category
    if (category && category !== 'All') {
      const cleanCat = category.toLowerCase().trim();
      filtered = filtered.filter((c) => c.category.toLowerCase().trim() === cleanCat);
    }

    // Filter by Level
    if (level && level !== 'All') {
      filtered = filtered.filter((c) => c.level === level);
    }

    // Filter by Status
    if (status && status !== 'All') {
      filtered = filtered.filter((c) => c.playlistStatus === status);
    }

    // Search query (title, category, tags, description)
    if (search && search.trim()) {
      const q = search.toLowerCase().trim();
      filtered = filtered.filter((c) => {
        return (
          c.title.toLowerCase().includes(q) ||
          c.category.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q) ||
          c.tags.some((t) => t.toLowerCase().includes(q))
        );
      });
    }

    const total = filtered.length;
    const totalPages = Math.max(1, Math.ceil(total / limit));
    const validPage = Math.min(Math.max(1, page), totalPages);
    const startIdx = (validPage - 1) * limit;
    const paginatedData = filtered.slice(startIdx, startIdx + limit);

    return {
      data: paginatedData,
      total,
      page: validPage,
      limit,
      totalPages,
      hasMore: validPage < totalPages,
    };
  }

  /**
   * Simulates: GET /api/courses/:courseId
   */
  async getCourseById(courseId: string): Promise<Course | null> {
    const allCourses = this.getStoredCourses();
    const course = allCourses.find((c) => c.id === courseId);
    return course ? JSON.parse(JSON.stringify(course)) : null;
  }

  /**
   * Saves or updates a course in the catalog
   */
  async saveCourse(course: Course): Promise<Course> {
    const allCourses = this.getStoredCourses();
    const existingIdx = allCourses.findIndex((c) => c.id === course.id);

    const updatedCourse = {
      ...course,
      updatedAt: new Date().toISOString(),
    };

    if (existingIdx >= 0) {
      allCourses[existingIdx] = updatedCourse;
    } else {
      updatedCourse.createdAt = new Date().toISOString();
      allCourses.unshift(updatedCourse);
    }

    this.persistCourses(allCourses);
    return updatedCourse;
  }

  /**
   * Deletes a course
   */
  async deleteCourse(courseId: string): Promise<boolean> {
    const allCourses = this.getStoredCourses();
    const filtered = allCourses.filter((c) => c.id !== courseId);
    this.persistCourses(filtered);
    return true;
  }

  /**
   * Helper: Extracts and validates YouTube playlist ID from standard URLs or raw IDs
   */
  extractPlaylistId(input: string): string | null {
    if (!input || !input.trim()) return null;
    const trimmed = input.trim();

    // Standard URL format: youtube.com/playlist?list=PLxxxx or &list=PLxxxx
    const match = trimmed.match(/[?&]list=([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return match[1];
    }

    // Direct playlist ID format (e.g. PL..., UU..., OLAK5uy...)
    if (/^[a-zA-Z0-9_-]{12,64}$/.test(trimmed)) {
      return trimmed;
    }

    return null;
  }

  /**
   * Stats summary for Owner Mode Dashboard
   */
  async getCatalogStats() {
    const allCourses = this.getStoredCourses();
    const verifiedPlaylists = allCourses.filter((c) => c.playlistStatus === 'verified').length;
    const pendingPlaylists = allCourses.filter((c) => c.playlistStatus === 'pending-verification').length;

    let totalModules = 0;
    let totalLessons = 0;

    allCourses.forEach((c) => {
      totalModules += c.modules.length;
      c.modules.forEach((m) => {
        totalLessons += m.lessons.length;
      });
    });

    return {
      totalCourses: allCourses.length,
      verifiedPlaylists,
      pendingPlaylists,
      totalModules,
      totalLessons,
    };
  }
}

export const courseService = new CourseService();
