import { useState } from 'react';
import {
  Plus,
  Trash2,
  Video,
  HelpCircle,
  Save,
  X,
  GripVertical,
  Check,
  ArrowLeft,
  AlertCircle,
  Play,
} from 'lucide-react';
import { supabase, type Course } from '@/lib/supabase';
import { extractYouTubeId, getYouTubeThumbnail } from '@/lib/youtube';

type VideoField = {
  id: string;
  youtube_url: string;
  title: string;
};

type QuizField = {
  id: string;
  question: string;
  options: string[];
  correct_answer: number;
};

type CourseEditorProps = {
  onSaved: () => void;
  onCancel: () => void;
};

export default function CourseEditor({ onSaved, onCancel }: CourseEditorProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('General');
  const [videos, setVideos] = useState<VideoField[]>([
    { id: crypto.randomUUID(), youtube_url: '', title: '' },
  ]);
  const [quizzes, setQuizzes] = useState<QuizField[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState<'details' | 'videos' | 'quiz'>('details');

  const categories = [
    'General',
    'Programming',
    'Design',
    'Business',
    'Marketing',
    'Personal Development',
    'Science',
    'Language',
    'Other',
  ];

  function addVideo() {
    setVideos([...videos, { id: crypto.randomUUID(), youtube_url: '', title: '' }]);
  }

  function removeVideo(id: string) {
    setVideos(videos.filter((v) => v.id !== id));
  }

  function updateVideo(id: string, field: keyof VideoField, value: string) {
    setVideos(videos.map((v) => (v.id === id ? { ...v, [field]: value } : v)));
  }

  function addQuiz() {
    setQuizzes([
      ...quizzes,
      { id: crypto.randomUUID(), question: '', options: ['', '', '', ''], correct_answer: 0 },
    ]);
  }

  function removeQuiz(id: string) {
    setQuizzes(quizzes.filter((q) => q.id !== id));
  }

  function updateQuiz(id: string, field: keyof QuizField, value: string | number | string[]) {
    setQuizzes(quizzes.map((q) => (q.id === id ? { ...q, [field]: value } : q)));
  }

  function updateQuizOption(quizId: string, optionIndex: number, value: string) {
    setQuizzes(
      quizzes.map((q) => {
        if (q.id !== quizId) return q;
        const newOptions = [...q.options];
        newOptions[optionIndex] = value;
        return { ...q, options: newOptions };
      })
    );
  }

  function addQuizOption(quizId: string) {
    setQuizzes(
      quizzes.map((q) => (q.id === quizId ? { ...q, options: [...q.options, ''] } : q))
    );
  }

  function removeQuizOption(quizId: string, optionIndex: number) {
    setQuizzes(
      quizzes.map((q) => {
        if (q.id !== quizId) return q;
        if (q.options.length <= 2) return q;
        const newOptions = q.options.filter((_, i) => i !== optionIndex);
        let newCorrect = q.correct_answer;
        if (optionIndex === newCorrect) newCorrect = 0;
        else if (optionIndex < newCorrect) newCorrect -= 1;
        return { ...q, options: newOptions, correct_answer: newCorrect };
      })
    );
  }

  async function handleSave() {
    setError('');

    if (!title.trim()) {
      setError('Course title is required');
      setActiveTab('details');
      return;
    }

    const validVideos = videos.filter((v) => v.youtube_url.trim());
    for (const v of validVideos) {
      if (!extractYouTubeId(v.youtube_url)) {
        setError(`Invalid YouTube URL: "${v.youtube_url}"`);
        setActiveTab('videos');
        return;
      }
    }

    const validQuizzes = quizzes.filter((q) => q.question.trim());
    for (const q of validQuizzes) {
      const validOpts = q.options.filter((o) => o.trim());
      if (validOpts.length < 2) {
        setError('Each quiz question needs at least 2 answer options');
        setActiveTab('quiz');
        return;
      }
      if (q.correct_answer >= q.options.length || !q.options[q.correct_answer]?.trim()) {
        setError('Please select a valid correct answer for all quiz questions');
        setActiveTab('quiz');
        return;
      }
    }

    setSaving(true);

    try {
      const { data: course, error: courseError } = await supabase
        .from('courses')
        .insert({
          title: title.trim(),
          description: description.trim(),
          category,
        })
        .select()
        .single();

      if (courseError) throw courseError;

      const courseId = (course as Course).id;

      if (validVideos.length > 0) {
        const videoRows = validVideos.map((v, i) => ({
          course_id: courseId,
          youtube_url: v.youtube_url.trim(),
          title: v.title.trim(),
          position: i,
        }));
        const { error: videoError } = await supabase.from('course_videos').insert(videoRows);
        if (videoError) throw videoError;
      }

      if (validQuizzes.length > 0) {
        const quizRows = validQuizzes.map((q, i) => ({
          course_id: courseId,
          question: q.question.trim(),
          options: q.options.filter((o) => o.trim()),
          correct_answer: q.correct_answer,
          position: i,
        }));
        const { error: quizError } = await supabase.from('course_quizzes').insert(quizRows);
        if (quizError) throw quizError;
      }

      onSaved();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save course');
      setSaving(false);
    }
  }

  const tabs = [
    { id: 'details' as const, label: 'Course Details', icon: null },
    { id: 'videos' as const, label: 'Video Lessons', icon: Video },
    { id: 'quiz' as const, label: 'Quiz Questions', icon: HelpCircle },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <div className="sticky top-16 z-40 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <button
                onClick={onCancel}
                className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-bold text-slate-900">Create New Course</h1>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onCancel}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-2 px-5 py-2 text-sm font-semibold bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 transition-all shadow-md shadow-primary-500/20"
              >
                {saving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Publish Course
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 -mb-px">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary-600 text-primary-700'
                      : 'border-transparent text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {tab.label}
                  {tab.id === 'videos' && videos.length > 1 && (
                    <span className="px-1.5 py-0.5 rounded-full bg-slate-100 text-xs text-slate-600">
                      {videos.filter((v) => v.youtube_url.trim()).length}
                    </span>
                  )}
                  {tab.id === 'quiz' && quizzes.length > 0 && (
                    <span className="px-1.5 py-0.5 rounded-full bg-slate-100 text-xs text-slate-600">
                      {quizzes.filter((q) => q.question.trim()).length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl animate-fade-in">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Details tab */}
        {activeTab === 'details' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">Course Title</span>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., Complete Web Development Bootcamp"
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-slate-900"
                />
              </label>

              <label className="block mt-5">
                <span className="text-sm font-semibold text-slate-700">Description</span>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe what students will learn in this course..."
                  rows={4}
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-slate-900 resize-none"
                />
              </label>

              <label className="block mt-5">
                <span className="text-sm font-semibold text-slate-700">Category</span>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-2 w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-slate-900 bg-white"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="bg-primary-50/50 border border-primary-100 rounded-2xl p-6">
              <h3 className="font-semibold text-primary-900 mb-2">Next Steps</h3>
              <p className="text-sm text-primary-700">
                After setting up the course details, switch to the <strong>Video Lessons</strong> tab
                to add YouTube videos, then the <strong>Quiz Questions</strong> tab to create an
                interactive quiz. Students who pass the quiz earn a certificate.
              </p>
            </div>
          </div>
        )}

        {/* Videos tab */}
        {activeTab === 'videos' && (
          <div className="space-y-4 animate-fade-in">
            {videos.map((video, idx) => {
              const ytId = extractYouTubeId(video.youtube_url);
              return (
                <div
                  key={video.id}
                  className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex items-center gap-2 pt-2">
                      <GripVertical className="w-5 h-5 text-slate-300" />
                      <span className="w-7 h-7 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </span>
                    </div>

                    <div className="flex-1 space-y-3">
                      <input
                        type="text"
                        value={video.youtube_url}
                        onChange={(e) => updateVideo(video.id, 'youtube_url', e.target.value)}
                        placeholder="Paste YouTube URL (e.g., https://youtube.com/watch?v=...)"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm text-slate-900"
                      />
                      <input
                        type="text"
                        value={video.title}
                        onChange={(e) => updateVideo(video.id, 'title', e.target.value)}
                        placeholder="Video title (optional)"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm text-slate-900"
                      />

                      {ytId && (
                        <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-xl animate-scale-in">
                          <div className="relative w-24 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
                            <img
                              src={getYouTubeThumbnail(ytId)}
                              alt="Thumbnail"
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <Play className="w-5 h-5 text-white fill-white" />
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-green-700 font-medium">
                            <Check className="w-4 h-4" />
                            Valid YouTube video detected
                          </div>
                        </div>
                      )}
                    </div>

                    {videos.length > 1 && (
                      <button
                        onClick={() => removeVideo(video.id)}
                        className="p-2 rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors mt-2"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}

            <button
              onClick={addVideo}
              className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-500 hover:border-primary-300 hover:text-primary-600 hover:bg-primary-50/30 transition-all font-medium"
            >
              <Plus className="w-5 h-5" />
              Add Another Video
            </button>
          </div>
        )}

        {/* Quiz tab */}
        {activeTab === 'quiz' && (
          <div className="space-y-4 animate-fade-in">
            {quizzes.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-100">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent-50 flex items-center justify-center mb-4">
                  <HelpCircle className="w-8 h-8 text-accent-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">No quiz questions yet</h3>
                <p className="text-sm text-slate-500 mb-6 max-w-sm mx-auto">
                  Add multiple-choice questions that students answer after watching the videos.
                  Passing the quiz generates a certificate.
                </p>
              </div>
            )}

            {quizzes.map((quiz, qIdx) => (
              <div
                key={quiz.id}
                className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="w-7 h-7 rounded-lg bg-accent-50 text-accent-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {qIdx + 1}
                  </span>
                  <input
                    type="text"
                    value={quiz.question}
                    onChange={(e) => updateQuiz(quiz.id, 'question', e.target.value)}
                    placeholder="Type your question here..."
                    className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-sm font-medium text-slate-900"
                  />
                  <button
                    onClick={() => removeQuiz(quiz.id)}
                    className="p-2 rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="ml-10 space-y-2">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Answer Options (click the circle to mark correct)
                  </p>
                  {quiz.options.map((opt, oIdx) => (
                    <div key={oIdx} className="flex items-center gap-2 group/option">
                      <button
                        onClick={() => updateQuiz(quiz.id, 'correct_answer', oIdx)}
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                          quiz.correct_answer === oIdx
                            ? 'border-green-500 bg-green-500'
                            : 'border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        {quiz.correct_answer === oIdx && (
                          <Check className="w-3.5 h-3.5 text-white" />
                        )}
                      </button>
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => updateQuizOption(quiz.id, oIdx, e.target.value)}
                        placeholder={`Option ${oIdx + 1}`}
                        className={`flex-1 px-3 py-2 rounded-lg border text-sm outline-none transition-all ${
                          quiz.correct_answer === oIdx
                            ? 'border-green-300 bg-green-50/50 focus:border-green-400 focus:ring-2 focus:ring-green-100'
                            : 'border-slate-200 focus:border-primary-400 focus:ring-2 focus:ring-primary-100'
                        } text-slate-900`}
                      />
                      {quiz.options.length > 2 && (
                        <button
                          onClick={() => removeQuizOption(quiz.id, oIdx)}
                          className="p-1.5 rounded text-slate-300 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover/option:opacity-100 transition-all"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}

                  <button
                    onClick={() => addQuizOption(quiz.id)}
                    className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-primary-600 font-medium mt-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add Option
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={addQuiz}
              className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-500 hover:border-accent-300 hover:text-accent-600 hover:bg-accent-50/30 transition-all font-medium"
            >
              <Plus className="w-5 h-5" />
              Add Quiz Question
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
