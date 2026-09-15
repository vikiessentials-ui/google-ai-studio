import { Award, Heart, ShieldCheck, ArrowLeft } from 'lucide-react';

type AboutCeoPageProps = {
  onNavigateHome: () => void;
  onNavigateContact: () => void;
  onNavigateMission: () => void;
};

export default function AboutCeoPage({
  onNavigateHome,
  onNavigateContact,
  onNavigateMission,
}: AboutCeoPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Breadcrumb Back */}
      <div className="mb-6">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-xs transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Courses</span>
        </button>
      </div>

      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0056D2] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
          <Award className="w-4 h-4 text-[#0056D2]" />
          Executive Leadership
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Muhammad Talha
        </h1>
        <div className="mt-2 text-base sm:text-lg font-bold text-[#0056D2]">
          Founder &amp; CEO, Learn With Flow
        </div>
        <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
          Dedicated to building an accessible, structured digital education ecosystem where any curious student can master modern computing skills regardless of financial means.
        </p>
      </div>

      {/* Founder Story Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 shadow-sm mb-10 space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
        <div className="border-b border-slate-100 pb-5">
          <h2 className="text-xl font-black text-slate-900">An Authentic Vision for Accessible Learning</h2>
          <p className="text-xs text-slate-500 mt-1">Written by the Learn With Flow Founding Desk</p>
        </div>

        <p>
          The founder's goal is to build an educational platform that makes technology learning accessible to students regardless of their financial background. Too often, aspiring programmers, analysts, and engineers encounter prohibitive paywalls, expensive subscription models, or disorganized tutorial dumps that leave them without real retention or structure.
        </p>

        <p>
          The vision of Learn With Flow is to encourage young learners to develop practical technology skills, explore modern fields, build projects, and embrace lifelong learning. The founder firmly believes that access to knowledge should never be restricted only to individuals who can afford expensive bootcamps or university tuitions.
        </p>

        <p>
          Under Muhammad Talha's leadership, Learn With Flow is intended to grow into a large, community-centered educational ecosystem covering artificial intelligence, software engineering, cybersecurity, cloud architecture, system design, data science, digital design, and other modern technical skills.
        </p>

        {/* Core Tenets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <Heart className="w-4 h-4 text-[#0056D2]" />
              <span>Zero-Paywall Philosophy</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every course, every module quiz, every graduation assessment, and every official verified certificate is completely free of charge.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <ShieldCheck className="w-4 h-4 text-[#0056D2]" />
              <span>Uncompromised Mastery</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Enforcing an unyielding 100% prerequisite testing threshold so that completion represents true, proven technical competence.
            </p>
          </div>
        </div>

        {/* Authentic Founder Signature Display Area */}
        <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="font-script text-3xl text-slate-900 leading-none">
              Muhammad Talha
            </div>
            <div className="text-xs font-bold text-slate-900 mt-1 uppercase tracking-wide">
              Muhammad Talha
            </div>
            <div className="text-[11px] text-slate-500 font-medium">
              Founder &amp; CEO, Learn With Flow
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onNavigateMission}
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#0056D2] bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              Read Our Mission
            </button>
            <button
              onClick={onNavigateContact}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#0056D2] hover:bg-blue-700 transition-colors shadow-sm"
            >
              Contact Founder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
