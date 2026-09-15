import { useState, useEffect } from 'react';
import {
  Search,
  BookOpen,
  Award,
  Video,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import type { Course, CourseLevel, PlaylistStatus } from '@/types';
import { courseService } from '@/services/courseService';
import { COURSE_CATEGORIES } from '@/data/coursesCatalog';

type HomePageProps = {
  onOpenCourse: (course: Course) => void;
  onNavigateVerify: () => void;
  onNavigateAbout: () => void;
  onNavigateMission: () => void;
  onNavigateAboutCeo: () => void;
  onNavigatePrivacy: () => void;
  onNavigateSecurity: () => void;
  onNavigateContact: () => void;
  onOpenOwnerLogin: () => void;
};

const CATEGORIES = ['All', ...COURSE_CATEGORIES];

export default function HomePage({
  onOpenCourse,
  onNavigateVerify,
  onNavigateAbout,
  onNavigateMission,
  onNavigateAboutCeo,
  onNavigatePrivacy,
  onNavigateSecurity,
  onNavigateContact,
  onOpenOwnerLogin,
}: HomePageProps) {
  const [courses, setCourses] = useState<Course[]>([]);
  const [totalCourses, setTotalCourses] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState<CourseLevel | 'All'>('All');
  const [selectedStatus, setSelectedStatus] = useState<PlaylistStatus | 'All'>('All');

  // Load courses via courseService simulating API pagination
  useEffect(() => {
    let isCurrent = true;
    async function fetchCatalog() {
      setLoading(true);
      try {
        const res = await courseService.getCourses({
          page: currentPage,
          limit: 12,
          category: selectedCategory,
          search,
          level: selectedLevel,
          status: selectedStatus,
        });

        if (isCurrent) {
          setCourses(res.data);
          setTotalCourses(res.total);
          setTotalPages(res.totalPages);
        }
      } catch (err) {
        console.error('Failed to load courses:', err);
      } finally {
        if (isCurrent) setLoading(false);
      }
    }

    const timer = setTimeout(() => {
      fetchCatalog();
    }, 150);

    return () => {
      isCurrent = false;
      clearTimeout(timer);
    };
  }, [currentPage, selectedCategory, search, selectedLevel, selectedStatus]);

  // Reset page to 1 when filters change
  function handleCategoryChange(cat: string) {
    setSelectedCategory(cat);
    setCurrentPage(1);
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    setCurrentPage(1);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-[#E2E8F0] pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0056D2] text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#0056D2]" />
            <span>100% Free Learning • Zero Financial Barriers</span>
          </div>

          {/* Main Title & Tagline */}
          <h1 className="font-display text-4xl sm:text-6xl font-black text-[#0F172A] tracking-tight max-w-4xl mx-auto leading-[1.1]">
            Learn. Build. Flow.
          </h1>

          <p className="mt-5 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Free Courses • Free Assessments • Free Certificates
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Structured curricula with 8-question lesson quizzes, 15-question module assessments, 25-question final graduation exams, and verified digital certificates.
          </p>

          {/* Value Prop Highlights */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs text-center">
              <div className="font-display text-xl sm:text-2xl font-black text-[#0056D2]">50+</div>
              <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">Initial Tracks</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs text-center">
              <div className="font-display text-xl sm:text-2xl font-black text-[#0056D2]">8 / 15 / 25</div>
              <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">Quiz Mastery</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs text-center">
              <div className="font-display text-xl sm:text-2xl font-black text-[#0056D2]">100%</div>
              <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">Free Access</div>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-[#E2E8F0] shadow-xs text-center">
              <div className="font-display text-xl sm:text-2xl font-black text-emerald-600">QR &amp; PDF</div>
              <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">Verified Certs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Search & Filter Controls */}
      <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E2E8F0]">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight">
              Technology Learning Tracks
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Showing {courses.length} of {totalCourses} courses
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Search Box */}
            <div className="relative min-w-[240px] flex-1 sm:flex-initial">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search tracks, topics, languages..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs sm:text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056D2] transition-all"
              />
            </div>

            {/* Level Filter */}
            <select
              value={selectedLevel}
              onChange={(e) => {
                setSelectedLevel(e.target.value as CourseLevel | 'All');
                setCurrentPage(1);
              }}
              className="py-2 px-3 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) => {
                setSelectedStatus(e.target.value as PlaylistStatus | 'All');
                setCurrentPage(1);
              }}
              className="py-2 px-3 bg-slate-50 border border-[#E2E8F0] rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#0056D2]"
            >
              <option value="All">All Playlists</option>
              <option value="verified">Verified Only</option>
              <option value="pending-verification">Pending Only</option>
            </select>
          </div>
        </div>

        {/* Category Pills Slider */}
        <div className="pt-4 pb-2 overflow-x-auto flex items-center gap-2 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  isSelected
                    ? 'bg-[#0056D2] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden p-4 space-y-3 animate-pulse"
              >
                <div className="h-44 bg-slate-100 rounded-xl" />
                <div className="h-4 bg-slate-200 rounded w-3/4" />
                <div className="h-3 bg-slate-100 rounded w-full" />
                <div className="h-3 bg-slate-100 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : courses.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300 p-8">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-900">No matching tracks found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              Try adjusting your search keywords or switching category filters.
            </p>
            <button
              onClick={() => {
                setSearch('');
                setSelectedCategory('All');
                setSelectedLevel('All');
                setSelectedStatus('All');
              }}
              className="mt-4 px-4 py-2 text-xs font-bold text-[#0056D2] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              const totalLessons = course.modules.reduce((acc, m) => acc + m.lessons.length, 0);

              return (
                <div
                  key={course.id}
                  className="group bg-white rounded-2xl border border-[#E2E8F0] hover:border-blue-300 hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Thumbnail banner */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                      />

                      {/* Top Overlay Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-slate-900/80 text-white backdrop-blur-xs">
                          {course.level}
                        </span>

                        {course.playlistStatus === 'verified' ? (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-emerald-600 text-white shadow-xs">
                            <CheckCircle2 className="w-3 h-3" />
                            Verified Playlist
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold bg-amber-500 text-slate-950 shadow-xs">
                            <Clock className="w-3 h-3" />
                            Pending Verification
                          </span>
                        )}
                      </div>

                      {/* Category Pill on bottom */}
                      <div className="absolute bottom-2.5 left-3">
                        <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-600/90 text-white backdrop-blur-xs">
                          {course.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5">
                      <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0056D2] transition-colors line-clamp-2">
                        {course.title}
                      </h3>

                      <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {course.description}
                      </p>

                      {/* Curriculum Meta Pills */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-3.5 h-3.5 text-slate-400" />
                          <span>{course.modules.length} Modules</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Video className="w-3.5 h-3.5 text-slate-400" />
                          <span>{totalLessons} Lessons</span>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                          <Award className="w-3.5 h-3.5" />
                          <span>Certificate</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => onOpenCourse(course)}
                      id={`open-course-${course.id}`}
                      className="w-full py-2.5 px-4 bg-slate-50 hover:bg-[#0056D2] text-slate-800 hover:text-white border border-[#E2E8F0] hover:border-transparent rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 group-hover:shadow-sm"
                    >
                      <span>Start Learning Track</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="p-2 rounded-lg border border-[#E2E8F0] text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-bold text-slate-700 px-3">
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              className="p-2 rounded-lg border border-[#E2E8F0] text-slate-600 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-[#E2E8F0] bg-slate-50/70 py-12 text-slate-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0056D2] text-white flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="font-display font-black text-lg text-slate-900">
                  LEARN WITH FLOW
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed max-w-md">
                Learn. Build. Flow. — 100% Free Learning platform providing world-class technology curricula, rigorous multi-tier testing, and verifiable credentials.
              </p>
              <div className="text-[11px] text-slate-400">
                Support: <a href="mailto:support@learnwithflow.org" className="underline text-[#0056D2]">support@learnwithflow.org</a>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Platform
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#0056D2]">
                    Courses Catalog
                  </button>
                </li>
                <li>
                  <button onClick={onNavigateVerify} className="hover:text-[#0056D2]">
                    Verify Certificate
                  </button>
                </li>
                <li>
                  <button onClick={onNavigateAbout} className="hover:text-[#0056D2]">
                    About Learn With Flow
                  </button>
                </li>
                <li>
                  <button onClick={onNavigateMission} className="hover:text-[#0056D2]">
                    Our Mission
                  </button>
                </li>
                <li>
                  <button onClick={onNavigateAboutCeo} className="hover:text-[#0056D2]">
                    About the CEO
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                Governance &amp; Trust
              </h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <button onClick={onNavigatePrivacy} className="hover:text-[#0056D2]">
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button onClick={onNavigateSecurity} className="hover:text-[#0056D2]">
                    Security Architecture
                  </button>
                </li>
                <li>
                  <button onClick={onNavigateContact} className="hover:text-[#0056D2]">
                    Contact Support
                  </button>
                </li>
                <li>
                  <button onClick={onOpenOwnerLogin} className="text-slate-400 hover:text-slate-600">
                    Owner Portal
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              © 2026 Learn With Flow. All rights reserved. Founded by Muhammad Talha.
            </div>
            <div>
              100% Free Technology Education.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
