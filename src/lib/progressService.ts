import type { CourseProgress, CertificateRecord, Course } from '@/types';

const PROGRESS_STORAGE_PREFIX = 'learn_with_flow_progress_v2_';
const CERT_STORAGE_KEY = 'learn_with_flow_certificates_v2';

export function getCourseProgress(courseId: string): CourseProgress {
  try {
    const raw = localStorage.getItem(`${PROGRESS_STORAGE_PREFIX}${courseId}`);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn('Error reading progress:', err);
  }

  const now = new Date().toISOString();
  return {
    courseId,
    startedAt: now,
    lastActiveAt: now,
    updatedAt: now,
    lessons: {},
    modules: {},
    completedLessons: {},
    lessonQuizScores: {},
    completedModules: {},
    moduleAssessmentScores: {},
    finalExam: {
      passed: false,
      score: 0,
      total: 25,
    },
  };
}

export function saveCourseProgress(progress: CourseProgress): void {
  try {
    progress.lastActiveAt = new Date().toISOString();
    localStorage.setItem(
      `${PROGRESS_STORAGE_PREFIX}${progress.courseId}`,
      JSON.stringify(progress)
    );
  } catch (err) {
    console.error('Failed to save progress:', err);
  }
}

/**
 * Record a lesson quiz attempt.
 * Must score 8/8 (100%) to pass.
 */
export function recordLessonQuizScore(
  courseId: string,
  lessonId: string,
  score: number,
  total: number
): { passed: boolean; progress: CourseProgress } {
  const progress = getCourseProgress(courseId);
  const passed = score === total && total === 8;

  progress.lessonQuizScores[lessonId] = {
    score,
    total,
    passed,
    attemptedAt: new Date().toISOString(),
  };

  if (passed) {
    progress.completedLessons[lessonId] = true;
  }

  saveCourseProgress(progress);
  return { passed, progress };
}

/**
 * Record a module assessment attempt.
 * Must score 15/15 (100%) to pass.
 */
export function recordModuleAssessmentScore(
  courseId: string,
  moduleId: string,
  score: number,
  total: number
): { passed: boolean; progress: CourseProgress } {
  const progress = getCourseProgress(courseId);
  const passed = score === total && total === 15;

  progress.moduleAssessmentScores[moduleId] = {
    score,
    total,
    passed,
    attemptedAt: new Date().toISOString(),
  };

  if (passed) {
    progress.completedModules[moduleId] = true;
  }

  saveCourseProgress(progress);
  return { passed, progress };
}

/**
 * Record a final exam attempt.
 * Must score 25/25 (100%) to pass and unlock certificate.
 */
export function recordFinalExamScore(
  courseId: string,
  score: number,
  total: number
): { passed: boolean; progress: CourseProgress } {
  const progress = getCourseProgress(courseId);
  const passed = score === total && total === 25;

  progress.finalExam = {
    score,
    total,
    passed,
    attemptedAt: new Date().toISOString(),
  };

  saveCourseProgress(progress);
  return { passed, progress };
}

/**
 * 1. Module assessment is unlocked ONLY if all lessons in that module have passed quizzes (8/8).
 */
export function isModuleAssessmentUnlocked(course: Course, moduleId: string, progress: CourseProgress): boolean {
  const targetModule = course.modules.find((m) => m.id === moduleId);
  if (!targetModule || targetModule.lessons.length === 0) return true;

  return targetModule.lessons.every((lesson) => {
    const quizResult = progress.lessonQuizScores[lesson.id];
    return quizResult && quizResult.passed;
  });
}

/**
 * 2. Final exam is unlocked ONLY if all modules in the course have passed their module assessment (15/15).
 */
export function isFinalExamUnlocked(course: Course, progress: CourseProgress): boolean {
  if (!course.modules || course.modules.length === 0) return false;
  return course.modules.every((mod) => {
    const assessmentResult = progress.moduleAssessmentScores[mod.id];
    return assessmentResult && assessmentResult.passed;
  });
}

/**
 * Calculates overall progress percentage (0 - 100%)
 */
export function calculateProgressPercentage(course: Course, progress: CourseProgress): number {
  const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const totalModules = course.modules.length;
  if (totalLessons === 0 && totalModules === 0) return 0;

  const passedLessons = Object.values(progress.lessonQuizScores).filter((q) => q.passed).length;
  const passedModules = Object.values(progress.moduleAssessmentScores).filter((a) => a.passed).length;

  const lessonFactor = totalLessons > 0 ? (passedLessons / totalLessons) * 40 : 40;
  const moduleFactor = totalModules > 0 ? (passedModules / totalModules) * 30 : 30;
  const examFactor = progress.finalExam.passed ? 30 : 0;

  return Math.min(100, Math.round(lessonFactor + moduleFactor + examFactor));
}

// -------------------------------------------------------------
// CERTIFICATE REGISTRY & VERIFICATION
// -------------------------------------------------------------

export function getAllCertificates(): CertificateRecord[] {
  try {
    const raw = localStorage.getItem(CERT_STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn('Error reading certificates:', err);
  }
  return [];
}

export function issueCertificate(
  course: Course,
  studentName: string
): CertificateRecord {
  const year = new Date().getFullYear();
  const hexPart = Math.random().toString(16).substring(2, 8).toUpperCase();
  const certificateId = `LWF-${year}-${hexPart}`;

  const today = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://learnwithflow.org';
  const verificationUrl = `${origin}/#verify?id=${certificateId}`;

  const cert: CertificateRecord = {
    id: certificateId,
    verificationId: certificateId,
    certificateId,
    courseId: course.id,
    courseTitle: course.title,
    studentName: studentName.trim() || 'Learner',
    instructorName: course.instructor || 'Learn With Flow Academic Board',
    issueDate: today,
    completionDate: today,
    finalExamScore: '25/25',
    totalQuestions: 25,
    status: 'verified',
    verificationUrl,
    skills: course.tags.slice(0, 4),
  };

  const existing = getAllCertificates();
  existing.push(cert);
  localStorage.setItem(CERT_STORAGE_KEY, JSON.stringify(existing));

  // Bind to course progress
  const progress = getCourseProgress(course.id);
  progress.certificateId = certificateId;
  saveCourseProgress(progress);

  return cert;
}

export function getCertificateById(id: string): CertificateRecord | null {
  if (!id) return null;
  const cleanId = id.trim().toUpperCase();
  const all = getAllCertificates();
  return (
    all.find(
      (c) =>
        c.id?.toUpperCase() === cleanId ||
        c.verificationId?.toUpperCase() === cleanId ||
        c.certificateId?.toUpperCase() === cleanId
    ) || null
  );
}
