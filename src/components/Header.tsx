import { GraduationCap, Shield, Award, Menu, X, LogOut } from 'lucide-react';
import { useState } from 'react';

type HeaderProps = {
  currentView: string;
  isOwnerAuthenticated: boolean;
  onNavigateHome: () => void;
  onNavigateVerify: () => void;
  onNavigateAbout: () => void;
  onNavigateMission: () => void;
  onNavigateAboutCeo: () => void;
  onNavigatePrivacy: () => void;
  onNavigateSecurity: () => void;
  onNavigateContact: () => void;
  onNavigateOwnerDashboard: () => void;
  onOwnerLogout: () => void;
};

export default function Header({
  currentView,
  isOwnerAuthenticated,
  onNavigateHome,
  onNavigateVerify,
  onNavigateAbout,
  onNavigateMission,
  onNavigateAboutCeo,
  onNavigatePrivacy,
  onNavigateSecurity,
  onNavigateContact,
  onNavigateOwnerDashboard,
  onOwnerLogout,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Courses', action: onNavigateHome },
    { id: 'about', label: 'About Us', action: onNavigateAbout },
    { id: 'mission', label: 'Mission', action: onNavigateMission },
    { id: 'about-ceo', label: 'About CEO', action: onNavigateAboutCeo },
    { id: 'privacy', label: 'Privacy', action: onNavigatePrivacy },
    { id: 'security', label: 'Security', action: onNavigateSecurity },
    { id: 'contact', label: 'Contact', action: onNavigateContact },
    { id: 'verify', label: 'Verify', action: onNavigateVerify },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Tagline */}
          <button
            onClick={onNavigateHome}
            id="brand-logo-btn"
            className="flex items-center gap-3 group text-left shrink-0"
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
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={link.action}
                id={`nav-${link.id}-btn`}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  currentView === link.id
                    ? 'bg-blue-50 text-[#0056D2]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Area: OWNER DASHBOARD if Authenticated, or Clean Verified Credential link */}
          <div className="flex items-center gap-2">
            {/* Authenticated Owner Navigation Item (Requirement 16 & 24: ONLY visible when authenticated) */}
            {isOwnerAuthenticated ? (
              <div className="flex items-center gap-2">
                <button
                  onClick={onNavigateOwnerDashboard}
                  id="nav-owner-dashboard-btn"
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                    currentView === 'owner'
                      ? 'bg-slate-900 text-amber-300 border-slate-800 shadow-md ring-2 ring-amber-400/40'
                      : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300'
                  }`}
                  title="Open Authenticated Owner Dashboard"
                >
                  <Shield className="w-4 h-4 text-amber-500" />
                  <span>OWNER DASHBOARD</span>
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                </button>

                <button
                  onClick={onOwnerLogout}
                  id="owner-logout-btn"
                  className="p-2 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-100 transition-colors"
                  title="Log out of Owner Session"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={onNavigateVerify}
                id="header-quick-verify-btn"
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#0056D2] bg-blue-50 hover:bg-blue-100 border border-blue-100 transition-colors"
              >
                <Award className="w-4 h-4 text-[#0056D2]" />
                <span>Verify Credential</span>
              </button>
            )}

            {/* Mobile menu hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-100 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  link.action();
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3.5 py-2 text-xs font-bold rounded-lg ${
                  currentView === link.id
                    ? 'bg-blue-50 text-[#0056D2]'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}

            {isOwnerAuthenticated && (
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between px-3.5">
                <button
                  onClick={() => {
                    onNavigateOwnerDashboard();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-xs font-bold text-amber-900 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200"
                >
                  <Shield className="w-4 h-4 text-amber-600" />
                  <span>OWNER DASHBOARD</span>
                </button>

                <button
                  onClick={() => {
                    onOwnerLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="text-xs font-bold text-red-600 hover:underline"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
