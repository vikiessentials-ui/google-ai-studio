export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type PlaylistStatus = 'verified' | 'pending-verification';

export type QuizQuestion = {
  id: string;
  question: string;
  options: [string, string, string, string] | string[];
  correctAnswer: number; // 0, 1, 2, or 3
  explanation?: string;
};

export type Lesson = {
  id: string;
  title: string;
  duration: string;
  youtubeVideoId?: string;
  videoUrl?: string;
  summary: string;
  order: number;
};

export type CourseModule = {
  id: string;
  title: string;
  description: string;
  order: number;
  lessons: Lesson[];
};

export type Course = {
  id: string;
  title: string;
  category: string;
  description: string;
  level: CourseLevel;
  thumbnail: string;
  instructor: string;
  youtubeChannel: string;
  playlistId: string;
  playlistUrl: string;
  playlistTitle: string;
  playlistStatus: PlaylistStatus;
  modules: CourseModule[];
  tags: string[];
  certificateEligibility: boolean;
  createdAt: string;
  updatedAt?: string;
};

export type QuizAttemptResult = {
  score: number;
  total: number;
  passed: boolean;
  attemptedAt: string;
};

export type CourseProgress = {
  courseId: string;
  startedAt?: string;
  lastActiveAt?: string;
  completedLessons: Record<string, boolean>; // lessonId -> true
  lessonQuizScores: Record<string, QuizAttemptResult>; // lessonId -> result
  completedModules: Record<string, boolean>; // moduleId -> true
  moduleAssessmentScores: Record<string, QuizAttemptResult>; // moduleId -> result
  finalExam: {
    passed: boolean;
    score: number;
    total: number;
    attemptedAt?: string;
  };
  certificateId?: string;
};

export type CertificateRecord = {
  id: string; // Unique Certificate ID (e.g. LWF-2026-A8F3C9)
  verificationId: string; // Alias for id
  certificateId: string; // Alias for id
  studentName: string;
  courseId: string;
  courseTitle: string;
  instructorName?: string;
  issueDate: string;
  completionDate: string;
  finalExamScore: number | string; // 25 or "25/25"
  totalQuestions: number; // 25
  status: 'verified' | 'revoked';
  verificationUrl: string;
  skills?: string[];
};
