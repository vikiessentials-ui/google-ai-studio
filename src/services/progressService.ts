import type { Course, CourseProgress, CertificateRecord } from '@/types';

const PROGRESS_STORAGE_KEY = 'lwf_student_progress_v1';
const CERTIFICATES_STORAGE_KEY = 'lwf_issued_certificates_v1';

/**
 * Progress & Assessment Engine
 * Note for Production Architecture:
 * For this browser-based prototype, state is stored in localStorage.
 * In a secure production environment, quiz grading, completion state,
 * and certificate issuance MUST be verified server-side with an authenticated session
 * to prevent client-side manipulation.
 */
class ProgressService {
  private getAllProgress(): Record<string, CourseProgress> {
    try {
      const data = localStorage.getItem(PROGRESS_STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }

  private saveAllProgress(all: Record<string, CourseProgress>) {
    try {
      localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(all));
    } catch (e) {
      console.warn('Failed to save progress to localStorage', e);
    }
  }

  private getAllCertificates(): CertificateRecord[] {
    try {
      const data = localStorage.getItem(CERTIFICATES_STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private saveAllCertificates(certs: CertificateRecord[]) {
    try {
      localStorage.setItem(CERTIFICATES_STORAGE_KEY, JSON.stringify(certs));
    } catch (e) {
      console.warn('Failed to save certificates to localStorage', e);
    }
  }

  getCourseProgress(courseId: string): CourseProgress {
    const all = this.getAllProgress();
    if (!all[courseId]) {
      all[courseId] = {
        courseId,
        startedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        lastActiveAt: new Date().toISOString(),
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
        certificate: null,
      };
      this.saveAllProgress(all);
    }
    return all[courseId];
  }

  /**
   * Evaluates whether a lesson is unlocked for the student.
   * Progression rules:
   * 1. Module 1, Lesson 1 is always unlocked.
   * 2. Within the same module, Lesson N is unlocked only if Lesson N-1's quiz was passed (8/8).
   * 3. For Module M (where M > 1), Lesson 1 is unlocked only if Module M-1's 15-question assessment was passed (15/15).
   */
  isLessonUnlocked(course: Course, moduleIndex: number, lessonIndex: number): boolean {
    const progress = this.getCourseProgress(course.id);

    // First module, first lesson is unlocked by default
    if (moduleIndex === 0 && lessonIndex === 0) {
      return true;
    }

    // If starting a new module (lessonIndex === 0 and moduleIndex > 0), previous module assessment must be passed (15/15)
    if (lessonIndex === 0 && moduleIndex > 0) {
      const prevModule = course.modules[moduleIndex - 1];
      if (!prevModule) return false;
      const prevModProgress = progress.modules[prevModule.id];
      return Boolean(prevModProgress && prevModProgress.assessmentPassed);
    }

    // Inside the current module, previous lesson must have its 8-question quiz passed (8/8)
    const currentModule = course.modules[moduleIndex];
    if (!currentModule) return false;
    const prevLesson = currentModule.lessons[lessonIndex - 1];
    if (!prevLesson) return false;

    const prevLessonProgress = progress.lessons[prevLesson.id];
    return Boolean(prevLessonProgress && prevLessonProgress.quizPassed);
  }

  /**
   * Evaluates whether a module's 15-question assessment is unlocked.
   * Unlocked ONLY after all lessons in that module have passed their 8-question quizzes.
   */
  isModuleAssessmentUnlocked(course: Course, moduleIndex: number): boolean {
    const progress = this.getCourseProgress(course.id);
    const mod = course.modules[moduleIndex];
    if (!mod) return false;

    // Check that previous module (if any) was passed
    if (moduleIndex > 0) {
      const prevMod = course.modules[moduleIndex - 1];
      const prevModProgress = progress.modules[prevMod.id];
      if (!prevModProgress || !prevModProgress.assessmentPassed) {
        return false;
      }
    }

    // All lessons in this module must be passed (8/8)
    return mod.lessons.every((lesson) => {
      const lp = progress.lessons[lesson.id];
      return Boolean(lp && lp.quizPassed);
    });
  }

  /**
   * Evaluates whether the 25-question Final Graduation Exam is unlocked.
   * Unlocked ONLY after EVERY module's 15-question assessment is passed.
   */
  isFinalExamUnlocked(course: Course): boolean {
    const progress = this.getCourseProgress(course.id);
    if (!course.modules || course.modules.length === 0) return false;

    return course.modules.every((mod) => {
      const mp = progress.modules[mod.id];
      return Boolean(mp && mp.assessmentPassed);
    });
  }

  /**
   * Records the 8-question lesson quiz result.
   * Strict requirement: Exactly 8/8 to pass.
   */
  recordLessonQuizResult(
    courseId: string,
    lessonId: string,
    score: number,
    totalQuestions: number = 8
  ): { passed: boolean; message: string } {
    const all = this.getAllProgress();
    const progress = all[courseId] || this.getCourseProgress(courseId);

    const passed = score === totalQuestions && totalQuestions === 8;

    progress.lessons[lessonId] = {
      completed: passed,
      quizPassed: passed,
      score,
      completedAt: passed ? new Date().toISOString() : undefined,
    };
    progress.updatedAt = new Date().toISOString();

    all[courseId] = progress;
    this.saveAllProgress(all);

    if (passed) {
      return { passed: true, message: '✔ Lesson Verified' };
    } else {
      return {
        passed: false,
        message: '⚠️ Assessment failed! Answer all questions correctly to proceed.',
      };
    }
  }

  /**
   * Records the 15-question module assessment result.
   * Strict requirement: Exactly 15/15 to pass.
   */
  recordModuleAssessmentResult(
    courseId: string,
    moduleId: string,
    score: number,
    totalQuestions: number = 15
  ): { passed: boolean; message: string } {
    const all = this.getAllProgress();
    const progress = all[courseId] || this.getCourseProgress(courseId);

    const passed = score === totalQuestions && totalQuestions === 15;

    progress.modules[moduleId] = {
      completed: passed,
      assessmentPassed: passed,
      score,
      completedAt: passed ? new Date().toISOString() : undefined,
    };
    progress.updatedAt = new Date().toISOString();

    all[courseId] = progress;
    this.saveAllProgress(all);

    if (passed) {
      return { passed: true, message: '✔ Module Verified' };
    } else {
      return {
        passed: false,
        message: '⚠️ Assessment failed! Answer all questions correctly to proceed.',
      };
    }
  }

  /**
   * Records the 25-question final graduation exam result.
   * Strict requirement: Exactly 25/25 to pass.
   */
  recordFinalExamResult(
    courseId: string,
    score: number,
    totalQuestions: number = 25
  ): { passed: boolean; message: string } {
    const all = this.getAllProgress();
    const progress = all[courseId] || this.getCourseProgress(courseId);

    const passed = score === totalQuestions && totalQuestions === 25;

    progress.finalExam = {
      passed,
      score,
      total: totalQuestions,
      completedAt: passed ? new Date().toISOString() : undefined,
    };
    progress.updatedAt = new Date().toISOString();

    all[courseId] = progress;
    this.saveAllProgress(all);

    if (passed) {
      return { passed: true, message: 'COURSE VERIFIED' };
    } else {
      return {
        passed: false,
        message: '⚠️ Final assessment failed! Answer all questions correctly to graduate.',
      };
    }
  }

  /**
   * Generates unique certificate ID in format: LWF-2026-XXXXXX
   */
  generateUniqueId(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `LWF-2026-${code}`;
  }

  /**
   * Issues and stores a certificate after 25/25 final graduation score
   */
  issueCertificate(course: Course, studentName: string): CertificateRecord {
    const cleanName = studentName.trim();
    if (!cleanName) {
      throw new Error('Student full name is required');
    }

    const uniqueId = this.generateUniqueId();
    const now = new Date();
    const dateFormatted = now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://learnwithflow.org';
    const verificationUrl = `${origin}/verify/${uniqueId}`;

    const record: CertificateRecord = {
      id: uniqueId,
      certificateId: uniqueId,
      verificationId: uniqueId,
      studentName: cleanName,
      courseId: course.id,
      courseTitle: course.title,
      issueDate: dateFormatted,
      completionDate: dateFormatted,
      finalExamScore: 25,
      totalQuestions: 25,
      status: 'verified',
      verificationUrl,
    };

    // Store in global certificates list
    const allCerts = this.getAllCertificates();
    allCerts.unshift(record);
    this.saveAllCertificates(allCerts);

    // Attach to course progress
    const all = this.getAllProgress();
    const progress = all[course.id] || this.getCourseProgress(course.id);
    progress.certificate = record;
    all[course.id] = progress;
    this.saveAllProgress(all);

    return record;
  }

  /**
   * Look up certificate by verificationId or certificateId
   */
  verifyCertificate(id: string): CertificateRecord | null {
    if (!id || !id.trim()) return null;
    const clean = id.trim().toUpperCase();
    const all = this.getAllCertificates();
    return all.find((c) => c.verificationId.toUpperCase() === clean || c.certificateId.toUpperCase() === clean) || null;
  }

  /**
   * Get all certificates issued across the platform
   */
  getCertificatesList(): CertificateRecord[] {
    return this.getAllCertificates();
  }

  /**
   * Reset course progress
   */
  resetCourseProgress(courseId: string) {
    const all = this.getAllProgress();
    delete all[courseId];
    this.saveAllProgress(all);
  }
}

export const progressService = new ProgressService();
