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
  duration?: string;
  youtubeVideoId?: string;
  youtubeUrl?: string;
  videoUrl?: string;
  summary?: string;
  order?: number;
  position?: number;
  quiz?: QuizQuestion[];
};

export type CourseLesson = Lesson;

export type CourseModule = {
  id: string;
  title: string;
  description?: string;
  order?: number;
  position?: number;
  lessons: Lesson[];
  moduleAssessment?: QuizQuestion[];
};

export type Course = {
  id: string;
  title: string;
  category: string;
  description: string;
  level: CourseLevel;
  thumbnail: string;
  instructor?: string;
  youtubeChannel?: string;
  playlistId: string;
  playlistUrl: string;
  playlistTitle?: string;
  playlistStatus: PlaylistStatus;
  modules: CourseModule[];
  finalExam?: QuizQuestion[];
  tags: string[];
  certificateEligibility?: boolean;
  createdAt: string;
  updatedAt?: string;
};

export type QuizAttemptResult = {
  score: number;
  total: number;
  passed: boolean;
  attemptedAt: string;
};

export type LessonProgress = {
  completed?: boolean;
  quizPassed?: boolean;
  score?: number;
  completedAt?: string;
};

export type ModuleProgress = {
  completed?: boolean;
  assessmentPassed?: boolean;
  score?: number;
  completedAt?: string;
};

export type FinalExamProgress = {
  passed: boolean;
  score: number;
  total?: number;
  completedAt?: string;
  attemptedAt?: string;
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

export type CourseProgress = {
  courseId: string;
  startedAt?: string;
  updatedAt?: string;
  lastActiveAt?: string;
  lessons: Record<string, LessonProgress>;
  modules: Record<string, ModuleProgress>;
  finalExam: FinalExamProgress;
  certificate?: CertificateRecord | null;
  certificateId?: string;
  completedLessons: Record<string, boolean>;
  lessonQuizScores: Record<string, QuizAttemptResult>;
  completedModules: Record<string, boolean>;
  moduleAssessmentScores: Record<string, QuizAttemptResult>;
};
