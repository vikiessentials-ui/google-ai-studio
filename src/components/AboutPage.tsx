import { GraduationCap, Award, ShieldCheck, BookOpen, ArrowRight, Mail } from 'lucide-react';

type InfoPageProps = {
  onNavigateHome: () => void;
  onNavigateContact?: () => void;
};

export default function AboutPage({ onNavigateHome, onNavigateContact }: InfoPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Hero */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0056D2] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
          <GraduationCap className="w-4 h-4 text-[#0056D2]" />
          About Learn With Flow
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Learn. Build. Flow.
        </h1>
        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
          Learn With Flow is an independent, 100% free technology-learning platform designed to bridge world-class video content with rigorous, structured academic assessments.
        </p>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0056D2] flex items-center justify-center mb-4">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">100% Free Learning</h3>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            Free courses, free assessments, and free certificates. We believe high-quality technical education should have zero financial paywalls.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0056D2] flex items-center justify-center mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Strict Progression</h3>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            8-question lesson quizzes, 15-question module assessments, and a 25-question final graduation exam require 100% score mastery to verify competence.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0056D2] flex items-center justify-center mb-4">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Verifiable Credentials</h3>
          <p className="mt-2 text-xs text-slate-600 leading-relaxed">
            Every graduate earns a tamper-evident certificate with a unique verification code and high-resolution QR code authenticated through our registry.
          </p>
        </div>
      </div>

      {/* Story & Leadership */}
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-12 space-y-4 text-slate-700 text-sm leading-relaxed">
        <h2 className="text-xl font-bold text-slate-900">Leadership &amp; Vision</h2>
        <p>
          Founded by <strong>Muhammad Talha</strong>, Learn With Flow was established with the conviction that passive video watching does not equal retention. While YouTube hosts thousands of hours of elite educational material from creators around the globe, learners often lack structured pacing, evaluation benchmarks, and proof of mastery.
        </p>
        <p>
          By pairing top curated curricula with an unyielding 100% prerequisite testing threshold, Learn With Flow ensures that students don't simply watch code being typed—they internalize core algorithms, security postures, cloud architectures, and systems design principles.
        </p>
        <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
          <div className="font-script text-2xl text-slate-900">Muhammad Talha</div>
          <div className="text-xs text-slate-500 font-medium">
            Founder &amp; CEO, Learn With Flow
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0056D2] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
        >
          <span>Explore Course Catalog</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        {onNavigateContact && (
          <button
            onClick={onNavigateContact}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl border border-slate-200 shadow-sm transition-all"
          >
            <Mail className="w-4 h-4 text-slate-500" />
            <span>Contact Support</span>
          </button>
        )}
      </div>
    </div>
  );
}
