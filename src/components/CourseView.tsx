import { useState } from 'react';
import {
  ArrowLeft,
  Play,
  CheckCircle2,
  Lock,
  Award,
  ShieldCheck,
  AlertTriangle,
  RotateCcw,
  BookOpen,
  HelpCircle,
  X
} from 'lucide-react';
import type { Course, QuizQuestion, CertificateRecord } from '@/types';
import { progressService } from '@/services/progressService';
import CertificateView from './Certificate';
import YouTubePlayer from './YouTubePlayer';

type CourseViewProps = {
  course: Course;
  onBack: () => void;
  onViewCertificate?: (cert: CertificateRecord) => void;
};

type AssessmentModalState = {
  isOpen: boolean;
  type: 'lesson' | 'module' | 'final';
  title: string;
  totalQuestions: 8 | 15 | 25;
  questions: QuizQuestion[];
  moduleId?: string;
  lessonId?: string;
};

export default function CourseView({ course, onBack, onViewCertificate }: CourseViewProps) {
  // Navigation & Selection state
  const [selectedModuleIdx, setSelectedModuleIdx] = useState(0);
  const [selectedLessonIdx, setSelectedLessonIdx] = useState(0);

  // Progress state from service
  const [progress, setProgress] = useState(() => progressService.getCourseProgress(course.id));

  // Assessment Modal state
  const [assessmentModal, setAssessmentModal] = useState<AssessmentModalState>({
    isOpen: false,
    type: 'lesson',
    title: '',
    totalQuestions: 8,
    questions: [],
  });

  // Quiz active test state
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [submittedAnswers, setSubmittedAnswers] = useState<number[]>([]);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [examScore, setExamScore] = useState(0);
  const [examResultMessage, setExamResultMessage] = useState<string>('');
  const [examPassed, setExamPassed] = useState(false);

  // Certificate issuance state
  const [studentFullName, setStudentFullName] = useState('');
  const [activeCertificate, setActiveCertificate] = useState<CertificateRecord | null>(
    () => progress.certificate || null
  );
  const [showCertificateView, setShowCertificateView] = useState(false);

  // Refresh progress state whenever modified
  function refreshProgress() {
    const updated = progressService.getCourseProgress(course.id);
    setProgress(updated);
    if (updated.certificate) {
      setActiveCertificate(updated.certificate);
    }
  }

  const currentModule = course.modules[selectedModuleIdx] || course.modules[0];
  const currentLesson = currentModule?.lessons[selectedLessonIdx] || currentModule?.lessons[0];

  // Helper to shuffle array for randomized quiz attempts
  function shuffleQuestions(originalQuestions?: QuizQuestion[]): QuizQuestion[] {
    if (!originalQuestions) return [];
    const arr = [...originalQuestions];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Open Lesson Quiz (8 questions)
  function handleStartLessonQuiz(modIdx: number, lesIdx: number) {
    const mod = course.modules[modIdx];
    const les = mod.lessons[lesIdx];
    if (!les) return;

    // Must be exactly 8 questions
    const shuffled = shuffleQuestions(les.quiz).slice(0, 8);

    setAssessmentModal({
      isOpen: true,
      type: 'lesson',
      title: `${les.title} — Lesson Assessment`,
      totalQuestions: 8,
      questions: shuffled,
      moduleId: mod.id,
      lessonId: les.id,
    });
    resetModalExamState();
  }

  // Open Module Assessment (15 questions)
  function handleStartModuleAssessment(modIdx: number) {
    const mod = course.modules[modIdx];
    if (!mod) return;

    // Must be exactly 15 questions
    const shuffled = shuffleQuestions(mod.moduleAssessment).slice(0, 15);

    setAssessmentModal({
      isOpen: true,
      type: 'module',
      title: `${mod.title} — Comprehensive Module Assessment`,
      totalQuestions: 15,
      questions: shuffled,
      moduleId: mod.id,
    });
    resetModalExamState();
  }

  // Open Final Graduation Exam (25 questions)
  function handleStartFinalExam() {
    // Must be exactly 25 questions
    const shuffled = shuffleQuestions(course.finalExam).slice(0, 25);

    setAssessmentModal({
      isOpen: true,
      type: 'final',
      title: `${course.title} — Final Graduation Examination`,
      totalQuestions: 25,
      questions: shuffled,
    });
    resetModalExamState();
  }

  function resetModalExamState() {
    setCurrentQIdx(0);
    setSelectedAnswer(null);
    setSubmittedAnswers([]);
    setExamSubmitted(false);
    setExamScore(0);
    setExamResultMessage('');
    setExamPassed(false);
  }

  // Handle Next Question or Submit in Modal
  function handleNextQuestion() {
    if (selectedAnswer === null) return;

    const newAnswers = [...submittedAnswers, selectedAnswer];
    setSubmittedAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQIdx + 1 < assessmentModal.questions.length) {
      setCurrentQIdx(currentQIdx + 1);
    } else {
      // Calculate score and submit
      let correct = 0;
      assessmentModal.questions.forEach((q, idx) => {
        if (newAnswers[idx] === q.correctAnswer) {
          correct++;
        }
      });

      setExamScore(correct);
      setExamSubmitted(true);

      if (assessmentModal.type === 'lesson' && assessmentModal.lessonId) {
        const result = progressService.recordLessonQuizResult(
          course.id,
          assessmentModal.lessonId,
          correct,
          8
        );
        setExamPassed(result.passed);
        setExamResultMessage(result.message);
        refreshProgress();
      } else if (assessmentModal.type === 'module' && assessmentModal.moduleId) {
        const result = progressService.recordModuleAssessmentResult(
          course.id,
          assessmentModal.moduleId,
          correct,
          15
        );
        setExamPassed(result.passed);
        setExamResultMessage(result.message);
        refreshProgress();
      } else if (assessmentModal.type === 'final') {
        const result = progressService.recordFinalExamResult(course.id, correct, 25);
        setExamPassed(result.passed);
        setExamResultMessage(result.message);
        refreshProgress();
      }
    }
  }

  // Issue Certificate handler
  function handleGenerateCertificate() {
    if (!studentFullName.trim()) return;
    try {
      const record = progressService.issueCertificate(course, studentFullName.trim());
      setActiveCertificate(record);
      refreshProgress();
      setShowCertificateView(true);
    } catch (err) {
      console.error('Failed to issue certificate:', err);
    }
  }

  // Check locking state
  const isLessonUnlocked = (mIdx: number, lIdx: number) =>
    progressService.isLessonUnlocked(course, mIdx, lIdx);

  const isModuleAssessmentUnlocked = (mIdx: number) =>
    progressService.isModuleAssessmentUnlocked(course, mIdx);

  const isFinalExamUnlocked = progressService.isFinalExamUnlocked(course);

  // Calculate linear lesson index
  let flatLessonIndex = 0;
  for (let m = 0; m < selectedModuleIdx; m++) {
    flatLessonIndex += course.modules[m]?.lessons?.length || 0;
  }
  flatLessonIndex += selectedLessonIdx;

  function handleVideoIndexChange(linearIndex: number) {
    let remaining = linearIndex;
    for (let m = 0; m < course.modules.length; m++) {
      const modLessonsCount = course.modules[m].lessons.length;
      if (remaining < modLessonsCount) {
        setSelectedModuleIdx(m);
        setSelectedLessonIdx(remaining);
        break;
      }
      remaining -= modLessonsCount;
    }
  }

  function handleVideoEnded(_linearIndex: number) {
    console.log('[CourseView] Lesson video ended. Prompting for 8-question assessment.');
    handleStartLessonQuiz(selectedModuleIdx, selectedLessonIdx);
  }

  // If viewing active certificate
  if (showCertificateView && activeCertificate) {
    return (
      <div className="min-h-screen bg-slate-50 py-8">
        <div className="max-w-7xl mx-auto px-4 mb-4">
          <button
            onClick={() => setShowCertificateView(false)}
            className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Course Workspace</span>
          </button>
        </div>
        <CertificateView
          certificate={activeCertificate}
          onClose={() => setShowCertificateView(false)}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <button
              onClick={onBack}
              id="back-to-catalog-btn"
              className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors flex-shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Courses</span>
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-medium text-slate-500 truncate max-w-[120px] sm:max-w-xs">
              {course.category}
            </span>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-bold text-slate-900 truncate">
              {course.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {activeCertificate && (
              <button
                onClick={() => setShowCertificateView(true)}
                id="view-active-certificate-btn"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm transition-all"
              >
                <Award className="w-3.5 h-3.5" />
                <span>View Certificate</span>
              </button>
            )}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-[#0056D2] text-[11px] font-bold uppercase tracking-wider border border-blue-100">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Strict Progression</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Learning Workspace: 2-Column Desktop Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* LEFT COLUMN (8 cols): Official YouTube Player + Current Lesson Info */}
          <div className="lg:col-span-8 space-y-6">
            {/* Player Container with Official YouTube IFrame Player API */}
            <YouTubePlayer
              playlistId={course.playlistId}
              playlistUrl={course.playlistUrl}
              courseTitle={course.title}
              selectedLessonIndex={flatLessonIndex}
              onVideoIndexChange={handleVideoIndexChange}
              onVideoEnded={handleVideoEnded}
            />

            {/* Current Lesson Details Card */}
            {currentLesson && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded text-xs font-bold bg-blue-50 text-[#0056D2]">
                      {currentModule.title}
                    </span>
                    <span className="text-xs text-slate-500">
                      Lesson {currentLesson.position} of {currentModule.lessons.length}
                    </span>
                  </div>

                  {progress.lessons[currentLesson.id]?.quizPassed ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      ✔ Lesson Verified
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-semibold border border-amber-200">
                      <HelpCircle className="w-3.5 h-3.5" />
                      Quiz Required (8/8)
                    </span>
                  )}
                </div>

                <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                  {currentLesson.title}
                </h1>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {course.description}
                </p>

                {/* Lesson Action Row */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Prerequisite Rule:</span> Pass the 8-question quiz with 100% to verify this lesson and unlock the next.
                  </div>

                  <button
                    onClick={() => handleStartLessonQuiz(selectedModuleIdx, selectedLessonIdx)}
                    id="start-lesson-quiz-btn"
                    className="flex items-center gap-2 px-5 py-2.5 bg-[#0056D2] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all hover:shadow"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>
                      {progress.lessons[currentLesson.id]?.quizPassed
                        ? 'Retake Lesson Quiz (8 Questions)'
                        : 'Take 8-Question Lesson Quiz'}
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* Course Overview Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-base font-bold text-slate-900 mb-3">About This Course</h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (4 cols): Course Curriculum & Progression Locking Tree */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div>
                  <h2 className="text-base font-black text-slate-900">Course Curriculum</h2>
                  <p className="text-xs text-slate-500">Strict Progression Locking</p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#0056D2]">
                    {course.modules.length} Modules
                  </span>
                </div>
              </div>

              {/* Modules List */}
              <div className="space-y-4">
                {course.modules.map((mod, mIdx) => {
                  const isModAssessmentUnlocked = isModuleAssessmentUnlocked(mIdx);
                  const isModAssessmentPassed = Boolean(progress.modules[mod.id]?.assessmentPassed);

                  return (
                    <div
                      key={mod.id}
                      className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50"
                    >
                      {/* Module Header */}
                      <div className="p-3 bg-slate-100/70 border-b border-slate-200 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                            Module {mIdx + 1}
                          </span>
                        </div>

                        {isModAssessmentPassed ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                            <CheckCircle2 className="w-3 h-3" />
                            ✔ Verified
                          </span>
                        ) : (
                          <span className="text-[10px] text-slate-500 font-medium">
                            {mod.lessons.length} Lessons
                          </span>
                        )}
                      </div>

                      {/* Module Title */}
                      <div className="px-3 pt-2.5 pb-1 text-xs font-bold text-slate-900">
                        {mod.title}
                      </div>

                      {/* Lessons in Module */}
                      <div className="p-2 space-y-1.5">
                        {mod.lessons.map((les, lIdx) => {
                          const unlocked = isLessonUnlocked(mIdx, lIdx);
                          const isPassed = Boolean(progress.lessons[les.id]?.quizPassed);
                          const isSelected =
                            selectedModuleIdx === mIdx && selectedLessonIdx === lIdx;

                          return (
                            <button
                              key={les.id}
                              disabled={!unlocked}
                              onClick={() => {
                                setSelectedModuleIdx(mIdx);
                                setSelectedLessonIdx(lIdx);
                              }}
                              className={`w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between text-xs transition-all ${
                                isSelected
                                  ? 'bg-blue-50 border border-blue-200 text-[#0056D2] font-semibold'
                                  : unlocked
                                  ? 'hover:bg-white text-slate-700'
                                  : 'opacity-50 cursor-not-allowed text-slate-400'
                              }`}
                            >
                              <div className="flex items-center gap-2 truncate pr-2">
                                {!unlocked ? (
                                  <Lock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                                ) : isPassed ? (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                                ) : (
                                  <Play className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                                )}
                                <span className="truncate">
                                  {les.position}. {les.title}
                                </span>
                              </div>

                              <div className="flex-shrink-0 text-[10px]">
                                {isPassed ? (
                                  <span className="text-emerald-700 font-bold">8/8</span>
                                ) : !unlocked ? (
                                  <span className="text-slate-400">Locked</span>
                                ) : (
                                  <span className="text-slate-500">Quiz</span>
                                )}
                              </div>
                            </button>
                          );
                        })}

                        {/* 15-Question Module Assessment Trigger */}
                        <div className="pt-2">
                          <button
                            disabled={!isModAssessmentUnlocked}
                            onClick={() => handleStartModuleAssessment(mIdx)}
                            className={`w-full px-3 py-2 rounded-lg flex items-center justify-between text-xs font-bold transition-all border ${
                              isModAssessmentPassed
                                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                                : isModAssessmentUnlocked
                                ? 'bg-white border-blue-300 text-[#0056D2] hover:bg-blue-50'
                                : 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {!isModAssessmentUnlocked ? (
                                <Lock className="w-3.5 h-3.5" />
                              ) : isModAssessmentPassed ? (
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <Award className="w-3.5 h-3.5 text-[#0056D2]" />
                              )}
                              <span>15-Question Module Assessment</span>
                            </div>
                            <span className="text-[10px]">
                              {isModAssessmentPassed
                                ? '15/15 Pass'
                                : isModAssessmentUnlocked
                                ? 'Take Exam'
                                : 'Locked'}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* 25-Question Final Graduation Exam Box */}
              <div className="mt-6 pt-4 border-t border-slate-200">
                <div className={`p-4 rounded-xl border text-center transition-all ${
                  progress.finalExam.passed
                    ? 'bg-emerald-50 border-emerald-300'
                    : isFinalExamUnlocked
                    ? 'bg-blue-50/70 border-blue-200'
                    : 'bg-slate-50 border-slate-200 opacity-60'
                }`}>
                  <div className="w-10 h-10 rounded-full mx-auto flex items-center justify-center mb-2 bg-white shadow-sm border border-slate-200">
                    <Award className={`w-5 h-5 ${progress.finalExam.passed ? 'text-emerald-600' : 'text-[#0056D2]'}`} />
                  </div>
                  <div className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                    Final Graduation Exam
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 mb-3">
                    25 comprehensive questions. Exactly 25/25 required to unlock certificate.
                  </p>

                  {progress.finalExam.passed ? (
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>COURSE VERIFIED (25/25)</span>
                      </div>
                      <div>
                        {activeCertificate ? (
                          <button
                            onClick={() => {
                              if (onViewCertificate) {
                                onViewCertificate(activeCertificate);
                              } else {
                                setShowCertificateView(true);
                              }
                            }}
                            className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm"
                          >
                            View &amp; Download Certificate
                          </button>
                        ) : (
                          <button
                            onClick={() => handleStartFinalExam()}
                            className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm"
                          >
                            Claim Verified Certificate
                          </button>
                        )}
                      </div>
                    </div>
                  ) : (
                    <button
                      disabled={!isFinalExamUnlocked}
                      onClick={handleStartFinalExam}
                      id="start-final-exam-btn"
                      className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all ${
                        isFinalExamUnlocked
                          ? 'bg-[#0056D2] hover:bg-blue-700 text-white shadow-sm'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      {isFinalExamUnlocked ? 'Take 25-Question Final Exam' : 'Final Exam Locked (Complete All Modules)'}
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Assessment Modal (Handles Lesson 8-Q, Module 15-Q, and Final 25-Q) */}
      {assessmentModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0056D2]">
                  {assessmentModal.type === 'lesson'
                    ? '8-Question Lesson Quiz'
                    : assessmentModal.type === 'module'
                    ? '15-Question Module Assessment'
                    : '25-Question Final Graduation Exam'}
                </span>
                <h3 className="text-base font-bold text-slate-900">
                  {assessmentModal.title}
                </h3>
              </div>
              <button
                onClick={() => setAssessmentModal((prev) => ({ ...prev, isOpen: false }))}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1">
              {!examSubmitted ? (
                /* Ongoing assessment questions */
                <div>
                  {/* Progress bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1.5">
                      <span>Question {currentQIdx + 1} of {assessmentModal.totalQuestions}</span>
                      <span>Required: {assessmentModal.totalQuestions}/{assessmentModal.totalQuestions} to pass</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#0056D2] transition-all duration-300"
                        style={{
                          width: `${((currentQIdx + 1) / assessmentModal.totalQuestions) * 100}%`,
                        }}
                      />
                    </div>
                  </div>

                  {/* Question Prompt */}
                  {assessmentModal.questions[currentQIdx] && (
                    <div className="space-y-4">
                      <h4 className="text-base font-bold text-slate-900 leading-snug">
                        {assessmentModal.questions[currentQIdx].question}
                      </h4>

                      {/* Options */}
                      <div className="space-y-2.5 pt-2">
                        {assessmentModal.questions[currentQIdx].options.map((opt, optIdx) => {
                          const isSelected = selectedAnswer === optIdx;
                          return (
                            <button
                              key={optIdx}
                              onClick={() => setSelectedAnswer(optIdx)}
                              className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-start gap-3 ${
                                isSelected
                                  ? 'border-[#0056D2] bg-blue-50/60 text-slate-900 font-semibold ring-1 ring-[#0056D2]'
                                  : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                              }`}
                            >
                              <div
                                className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 text-xs ${
                                  isSelected
                                    ? 'border-[#0056D2] bg-[#0056D2] text-white'
                                    : 'border-slate-300 text-slate-500'
                                }`}
                              >
                                {String.fromCharCode(65 + optIdx)}
                              </div>
                              <span className="leading-relaxed">{opt}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Assessment Completed Result View */
                <div className="text-center py-6">
                  {examPassed ? (
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-9 h-9" />
                      </div>
                      <h4 className="text-2xl font-black text-slate-900">
                        {examResultMessage}
                      </h4>
                      <p className="text-sm text-slate-600">
                        Perfect Score Achieved: <span className="font-bold text-emerald-700">{examScore}/{assessmentModal.totalQuestions}</span>
                      </p>

                      {/* If Final Exam passed, prompt student name for certificate */}
                      {assessmentModal.type === 'final' && (
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 max-w-md mx-auto mt-4 text-left">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Enter Your Full Name for Official Certificate
                          </label>
                          <input
                            type="text"
                            value={studentFullName}
                            onChange={(e) => setStudentFullName(e.target.value)}
                            placeholder="e.g. Jane Doe"
                            className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                          />
                          <button
                            onClick={handleGenerateCertificate}
                            disabled={!studentFullName.trim()}
                            className="w-full mt-3 py-2.5 bg-[#0056D2] hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-xs rounded-lg transition-colors shadow-sm"
                          >
                            Generate Official Credential
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
                        <AlertTriangle className="w-9 h-9" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-900">
                        {examResultMessage}
                      </h4>
                      <p className="text-sm text-slate-600">
                        Your Score: <span className="font-bold text-slate-800">{examScore}/{assessmentModal.totalQuestions}</span>. Strict 100% mastery required.
                      </p>
                      <p className="text-xs text-slate-500">
                        Questions will be re-randomized on your next attempt. Review the material and try again.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              {!examSubmitted ? (
                <>
                  <button
                    onClick={() => setAssessmentModal((prev) => ({ ...prev, isOpen: false }))}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    disabled={selectedAnswer === null}
                    onClick={handleNextQuestion}
                    className="px-6 py-2.5 bg-[#0056D2] hover:bg-blue-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
                  >
                    {currentQIdx + 1 === assessmentModal.totalQuestions ? 'Submit Assessment' : 'Next Question →'}
                  </button>
                </>
              ) : (
                <div className="w-full flex items-center justify-between">
                  <button
                    onClick={() => {
                      if (assessmentModal.type === 'lesson' && assessmentModal.lessonId) {
                        handleStartLessonQuiz(selectedModuleIdx, selectedLessonIdx);
                      } else if (assessmentModal.type === 'module') {
                        handleStartModuleAssessment(selectedModuleIdx);
                      } else {
                        handleStartFinalExam();
                      }
                    }}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200 rounded-lg"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Try Again (Randomized)</span>
                  </button>

                  <button
                    onClick={() => setAssessmentModal((prev) => ({ ...prev, isOpen: false }))}
                    className="px-5 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-slate-800"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
