import { GraduationCap, Shield, Award, Menu, X } from 'lucide-react';
import { useState } from 'react';

type HeaderProps = {
  currentView: string;
  isOwnerMode: boolean;
  onNavigateHome: () => void;
  onNavigateVerify: () => void;
  onNavigateAbout: () => void;
  onNavigateMission: () => void;
  onToggleOwnerMode: () => void;
};

export default function Header({
  currentView,
  isOwnerMode,
  onNavigateHome,
  onNavigateVerify,
  onNavigateAbout,
  onNavigateMission,
  onToggleOwnerMode,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Tagline */}
          <button
            onClick={onNavigateHome}
            id="brand-logo-btn"
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0056D2] text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition-colors">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display font-black text-lg text-[#0F172A] tracking-tight leading-none">
                LEARN WITH FLOW
              </div>
              <div className="text-[10px] font-bold text-[#0056D2] tracking-widest uppercase mt-0.5">
                Learn. Build. Flow.
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            <button
              onClick={onNavigateHome}
              id="nav-courses-btn"
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                currentView === 'home'
                  ? 'bg-blue-50 text-[#0056D2]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Courses
            </button>

            <button
              onClick={onNavigateVerify}
              id="nav-verify-btn"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                currentView === 'verify'
                  ? 'bg-blue-50 text-[#0056D2]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Award className="w-3.5 h-3.5 text-[#0056D2]" />
              <span>Verify Certificate</span>
            </button>

            <button
              onClick={onNavigateAbout}
              id="nav-about-btn"
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                currentView === 'about'
                  ? 'bg-blue-50 text-[#0056D2]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              About
            </button>

            <button
              onClick={onNavigateMission}
              id="nav-mission-btn"
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                currentView === 'mission'
                  ? 'bg-blue-50 text-[#0056D2]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Mission
            </button>
          </nav>

          {/* Right Action: Owner Mode Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleOwnerMode}
              id="owner-mode-toggle-btn"
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                isOwnerMode
                  ? 'bg-slate-900 text-amber-300 border-slate-800 shadow-md ring-2 ring-amber-400/40'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
              title="Toggle Owner Console"
            >
              <Shield className={`w-4 h-4 ${isOwnerMode ? 'text-amber-400' : 'text-slate-500'}`} />
              <span className="hidden sm:inline">Owner Mode</span>
              {isOwnerMode && (
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-slate-100 space-y-1">
            <button
              onClick={() => {
                onNavigateHome();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              Courses Catalog
            </button>
            <button
              onClick={() => {
                onNavigateVerify();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 rounded-lg flex items-center gap-2"
            >
              <Award className="w-3.5 h-3.5 text-[#0056D2]" />
              <span>Verify Certificate</span>
            </button>
            <button
              onClick={() => {
                onNavigateAbout();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              About
            </button>
            <button
              onClick={() => {
                onNavigateMission();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              Mission
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
