import { Compass, Target, Heart, CheckCircle2, ArrowRight } from 'lucide-react';

type MissionPageProps = {
  onNavigateHome: () => void;
};

export default function MissionPage({ onNavigateHome }: MissionPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0056D2] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
          <Compass className="w-4 h-4 text-[#0056D2]" />
          Our Mission
        </div>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Democratizing Elite Tech Education
        </h1>
        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
          Making software engineering, AI, cyber security, and cloud architecture education universally accessible, rigorous, and 100% free.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6 text-slate-700 text-sm leading-relaxed mb-10">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0056D2] flex items-center justify-center flex-shrink-0 mt-0.5">
            <Target className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Zero Financial Barriers</h3>
            <p className="mt-1 text-xs text-slate-600">
              No hidden fees, no credit card requests, no subscription traps, and no paid certificate upgrades. Education should empower upward mobility, not extract debt.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0056D2] flex items-center justify-center flex-shrink-0 mt-0.5">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Merit-Based Assessment</h3>
            <p className="mt-1 text-xs text-slate-600">
              Certificates at Learn With Flow cannot be clicked through or bought. Every learner must demonstrate 100% accuracy on comprehensive question banks covering theory, code mechanics, and system architecture.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0056D2] flex items-center justify-center flex-shrink-0 mt-0.5">
            <Heart className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Empowering Independent Creators</h3>
            <p className="mt-1 text-xs text-slate-600">
              We celebrate and amplify the incredible work of global educators and open-source communities who publish high-caliber video series on YouTube, giving their lessons structured academic frameworks.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={onNavigateHome}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0056D2] hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
        >
          <span>Start Learning Today</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
