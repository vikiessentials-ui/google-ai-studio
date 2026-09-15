import { useState, useEffect } from 'react';
import {
  Shield,
  Plus,
  Search,
  CheckCircle2,
  Clock,
  Trash2,
  Edit3,
  Video,
  X,
  ExternalLink
} from 'lucide-react';
import type { Course, CourseLevel, PlaylistStatus } from '@/types';
import { courseService } from '@/services/courseService';
import { progressService } from '@/services/progressService';
import { generateQuestionSet } from '@/data/questionBanks';

type OwnerDashboardProps = {
  onNavigateHome: () => void;
  onOpenCourse: (course: Course) => void;
};

export default function OwnerDashboard({ onNavigateHome, onOpenCourse }: OwnerDashboardProps) {
  const [stats, setStats] = useState({
    totalCourses: 0,
    verifiedPlaylists: 0,
    pendingPlaylists: 0,
    totalModules: 0,
    totalLessons: 0,
  });

  const [courses, setCourses] = useState<Course[]>([]);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<PlaylistStatus | 'All'>('All');
  const [loading, setLoading] = useState(true);

  // New Course / Import Playlist Form State
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [importInput, setImportInput] = useState('');
  const [importTitle, setImportTitle] = useState('');
  const [importCategory, setImportCategory] = useState('Full Stack Development');
  const [importLevel, setImportLevel] = useState<CourseLevel>('Beginner');
  const [importChannel, setImportChannel] = useState('');
  const [importDescription, setImportDescription] = useState('');
  const [importStatus, setImportStatus] = useState<PlaylistStatus>('verified');
  const [importError, setImportError] = useState('');

  // Edit Course Modal State
  const [editingCourse, setEditingCourse] = useState<Course | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    const [catalogStats, res] = await Promise.all([
      courseService.getCatalogStats(),
      courseService.getCourses({ page: 1, limit: 100 }),
    ]);
    setStats(catalogStats);
    setCourses(res.data);
    setLoading(false);
  }

  // Handle Importing New Course with YouTube Playlist
  async function handleCreateCourse(e: React.FormEvent) {
    e.preventDefault();
    setImportError('');

    const playlistId = courseService.extractPlaylistId(importInput);
    if (!playlistId && importStatus === 'verified') {
      setImportError('Please provide a valid YouTube playlist URL or Playlist ID.');
      return;
    }

    const newId = `course-${Date.now().toString().slice(-4)}`;

    // Build standard 2 modules with lessons and 8/15/25 question sets
    const mod1Lessons = [
      {
        id: `${newId}-m1-l1`,
        title: 'Foundations & Architecture Overview',
        youtubeUrl: playlistId ? `https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=${playlistId}` : '',
        position: 1,
        quiz: generateQuestionSet(importCategory, 8, `${newId}-m1-l1`),
      },
      {
        id: `${newId}-m1-l2`,
        title: 'Core Concepts & Hands-on Implementation',
        youtubeUrl: playlistId ? `https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=${playlistId}` : '',
        position: 2,
        quiz: generateQuestionSet(importCategory, 8, `${newId}-m1-l2`),
      },
    ];

    const mod2Lessons = [
      {
        id: `${newId}-m2-l1`,
        title: 'Advanced Patterns & Real-world Workflows',
        youtubeUrl: playlistId ? `https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=${playlistId}` : '',
        position: 1,
        quiz: generateQuestionSet(importCategory, 8, `${newId}-m2-l1`),
      },
    ];

    const modules = [
      {
        id: `${newId}-m1`,
        title: 'Module 1: Principles & Fundamental Mechanics',
        position: 1,
        lessons: mod1Lessons,
        moduleAssessment: generateQuestionSet(importCategory, 15, `${newId}-m1-a`),
      },
      {
        id: `${newId}-m2`,
        title: 'Module 2: Applied Engineering & Systems',
        position: 2,
        lessons: mod2Lessons,
        moduleAssessment: generateQuestionSet(importCategory, 15, `${newId}-m2-a`),
      },
    ];

    const finalExam = generateQuestionSet(importCategory, 25, `${newId}-final`);

    const newCourse: Course = {
      id: newId,
      title: importTitle.trim(),
      category: importCategory,
      description: importDescription.trim() || `Comprehensive masterclass covering ${importTitle.trim()}.`,
      level: importLevel,
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
      playlistId: playlistId || '',
      playlistUrl: playlistId ? `https://www.youtube.com/playlist?list=${playlistId}` : '',
      playlistStatus: importStatus,
      youtubeChannel: importChannel.trim() || 'Learn With Flow Academy',
      modules,
      finalExam,
      certificateEligibility: true,
      tags: [importCategory, importLevel, 'Verified'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await courseService.saveCourse(newCourse);
    setIsImportModalOpen(false);
    resetImportForm();
    await loadData();
  }

  function resetImportForm() {
    setImportInput('');
    setImportTitle('');
    setImportChannel('');
    setImportDescription('');
    setImportStatus('verified');
    setImportError('');
  }

  // Handle Toggle Playlist Status
  async function handleToggleStatus(course: Course) {
    const updatedStatus: PlaylistStatus =
      course.playlistStatus === 'verified' ? 'pending-verification' : 'verified';

    const updated = {
      ...course,
      playlistStatus: updatedStatus,
    };

    await courseService.saveCourse(updated);
    await loadData();
  }

  // Handle Delete Course
  async function handleDeleteCourse(id: string) {
    if (confirm('Are you sure you want to delete this course from the catalog?')) {
      await courseService.deleteCourse(id);
      await loadData();
    }
  }

  // Handle Edit Course Save
  async function handleSaveEdit(e: React.FormEvent) {
    e.preventDefault();
    if (!editingCourse) return;

    await courseService.saveCourse(editingCourse);
    setEditingCourse(null);
    await loadData();
  }

  const issuedCertificates = progressService.getCertificatesList();

  const filteredCourses = courses.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = filterStatus === 'All' || c.playlistStatus === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md">
            <Shield className="w-6 h-6 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-display text-2xl font-black text-slate-900">Owner Mode Console</h1>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-200">
                ACTIVE ADMIN
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Manage YouTube playlists, curriculum standards, verified statuses, and platform metrics.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsImportModalOpen(true)}
            id="open-import-playlist-modal-btn"
            className="flex items-center gap-2 px-4 py-2.5 bg-[#0056D2] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
          >
            <Plus className="w-4 h-4" />
            <span>Import YouTube Playlist</span>
          </button>

          <button
            onClick={onNavigateHome}
            className="px-4 py-2.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 text-xs font-semibold rounded-xl"
          >
            Exit Owner Mode
          </button>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Courses</div>
          <div className="text-2xl font-black text-slate-900 mt-1">{stats.totalCourses}</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Verified Playlists</div>
          <div className="text-2xl font-black text-emerald-700 mt-1">{stats.verifiedPlaylists}</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-amber-600 uppercase tracking-wider">Pending Playlists</div>
          <div className="text-2xl font-black text-amber-700 mt-1">{stats.pendingPlaylists}</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Modules</div>
          <div className="text-2xl font-black text-slate-900 mt-1">{stats.totalModules}</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Lessons</div>
          <div className="text-2xl font-black text-slate-900 mt-1">{stats.totalLessons}</div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider">Certificates Issued</div>
          <div className="text-2xl font-black text-[#0056D2] mt-1">{issuedCertificates.length}</div>
        </div>
      </div>

      {/* Courses Management Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-8">
        <div className="p-4 sm:p-6 border-b border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Course Catalog Administration</h2>
            <p className="text-xs text-slate-500">Inspect playlists, toggle verification, and edit details</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
              />
            </div>

            {/* Filter by Status */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as PlaylistStatus | 'All')}
              className="text-xs py-1.5 px-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
            >
              <option value="All">All Statuses</option>
              <option value="verified">Verified Only</option>
              <option value="pending-verification">Pending Only</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Course Title &amp; ID</th>
                <th className="p-4">Category &amp; Level</th>
                <th className="p-4">YouTube Playlist Status</th>
                <th className="p-4">Curriculum</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">
                    <div className="inline-flex items-center gap-2">
                      <Clock className="w-4 h-4 animate-spin text-[#0056D2]" />
                      <span>Loading course registry...</span>
                    </div>
                  </td>
                </tr>
              ) : filteredCourses.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="p-4">
                    <div className="font-bold text-slate-900">{c.title}</div>
                    <div className="text-[10px] text-slate-400 font-mono mt-0.5">{c.id}</div>
                  </td>
                  <td className="p-4">
                    <div className="font-semibold text-slate-800">{c.category}</div>
                    <span className="inline-block mt-0.5 px-1.5 py-0.5 bg-slate-100 rounded text-[10px] text-slate-600">
                      {c.level}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleStatus(c)}
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border transition-colors ${
                          c.playlistStatus === 'verified'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                            : 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'
                        }`}
                        title="Click to toggle status"
                      >
                        {c.playlistStatus === 'verified' ? (
                          <>
                            <CheckCircle2 className="w-3 h-3" />
                            <span>Verified</span>
                          </>
                        ) : (
                          <>
                            <Clock className="w-3 h-3" />
                            <span>Pending</span>
                          </>
                        )}
                      </button>
                      {c.playlistId && (
                        <span className="text-[10px] font-mono text-slate-400 truncate max-w-[100px]">
                          {c.playlistId}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-slate-600">
                    <div>{c.modules.length} modules</div>
                    <div className="text-[10px] text-slate-400">
                      {c.modules.reduce((acc, m) => acc + m.lessons.length, 0)} lessons
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => onOpenCourse(c)}
                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                        title="Preview Course"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setEditingCourse(c)}
                        className="p-1.5 text-slate-600 hover:bg-slate-100 rounded"
                        title="Edit Details"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteCourse(c.id)}
                        className="p-1.5 text-rose-600 hover:bg-rose-50 rounded"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Import Playlist Modal */}
      {isImportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 border border-slate-200 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-[#0056D2]" />
                <h3 className="text-base font-bold text-slate-900">Import YouTube Playlist Course</h3>
              </div>
              <button
                onClick={() => setIsImportModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateCourse} className="space-y-4">
              {importError && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 text-xs font-medium">
                  {importError}
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Course Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Modern Full-Stack Web Development"
                  value={importTitle}
                  onChange={(e) => setImportTitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  YouTube Playlist URL or ID
                </label>
                <input
                  type="text"
                  placeholder="e.g. https://www.youtube.com/playlist?list=PLWKjhJtqVAbkmRvnFmOd4KhDdlK1oIq23"
                  value={importInput}
                  onChange={(e) => setImportInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs font-mono bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                />
                <p className="text-[10px] text-slate-500 mt-1">
                  Extracts playlist identifier. If not available yet, mark as 'Pending Verification'.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Category
                  </label>
                  <select
                    value={importCategory}
                    onChange={(e) => setImportCategory(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                  >
                    <option>Artificial Intelligence</option>
                    <option>Machine Learning</option>
                    <option>Cyber Security</option>
                    <option>Ethical Hacking</option>
                    <option>UI/UX Design</option>
                    <option>Front-End Development</option>
                    <option>Full Stack Development</option>
                    <option>Software Engineering</option>
                    <option>Python</option>
                    <option>JavaScript</option>
                    <option>Java</option>
                    <option>Data Science</option>
                    <option>SQL</option>
                    <option>Databases</option>
                    <option>Computer Networking</option>
                    <option>Linux</option>
                    <option>Cloud Computing</option>
                    <option>AWS</option>
                    <option>DevOps</option>
                    <option>Docker</option>
                    <option>Kubernetes</option>
                    <option>Git &amp; GitHub</option>
                    <option>System Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Difficulty Level
                  </label>
                  <select
                    value={importLevel}
                    onChange={(e) => setImportLevel(e.target.value as CourseLevel)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    YouTube Channel
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. freeCodeCamp.org"
                    value={importChannel}
                    onChange={(e) => setImportChannel(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Playlist Status
                  </label>
                  <select
                    value={importStatus}
                    onChange={(e) => setImportStatus(e.target.value as PlaylistStatus)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                  >
                    <option value="verified">Verified Playlist</option>
                    <option value="pending-verification">Pending Verification</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsImportModalOpen(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-white bg-[#0056D2] hover:bg-blue-700 rounded-lg shadow-sm"
                >
                  Create Course
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Course Details Modal */}
      {editingCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 border border-slate-200 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
              <h3 className="text-base font-bold text-slate-900">Edit Course: {editingCourse.id}</h3>
              <button onClick={() => setEditingCourse(null)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={editingCourse.title}
                  onChange={(e) => setEditingCourse({ ...editingCourse, title: e.target.value })}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  YouTube Playlist ID
                </label>
                <input
                  type="text"
                  value={editingCourse.playlistId}
                  onChange={(e) => setEditingCourse({ ...editingCourse, playlistId: e.target.value })}
                  className="w-full px-3 py-2 text-xs font-mono bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Playlist Status
                  </label>
                  <select
                    value={editingCourse.playlistStatus}
                    onChange={(e) =>
                      setEditingCourse({
                        ...editingCourse,
                        playlistStatus: e.target.value as PlaylistStatus,
                      })
                    }
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                  >
                    <option value="verified">Verified</option>
                    <option value="pending-verification">Pending Verification</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Level
                  </label>
                  <select
                    value={editingCourse.level}
                    onChange={(e) =>
                      setEditingCourse({
                        ...editingCourse,
                        level: e.target.value as CourseLevel,
                      })
                    }
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingCourse(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-white bg-[#0056D2] hover:bg-blue-700 rounded-lg shadow-sm"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
