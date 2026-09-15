import type { Course } from '@/types';
import { FULL_COURSES_CATALOG, COURSE_CATEGORIES } from './coursesCatalog';

export { COURSE_CATEGORIES };
export const initialCourses: Course[] = FULL_COURSES_CATALOG;
