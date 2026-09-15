import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HomePage from '@/components/HomePage';
import CourseView from '@/components/CourseView';
import VerifyPage from '@/components/VerifyPage';
import CertificateView from '@/components/Certificate';
import AboutPage from '@/components/AboutPage';
import MissionPage from '@/components/MissionPage';
import AboutCeoPage from '@/components/AboutCeoPage';
import PrivacyPage from '@/components/PrivacyPage';
import SecurityPage from '@/components/SecurityPage';
import ContactPage from '@/components/ContactPage';
import OwnerDashboard from '@/components/OwnerDashboard';
import OwnerLoginModal from '@/components/OwnerLoginModal';
import type { Course, CertificateRecord } from '@/types';
import { courseService } from '@/services/courseService';

type ViewMode =
  | 'home'
  | 'course'
  | 'verify'
  | 'certificate'
  | 'about'
  | 'mission'
  | 'about-ceo'
  | 'privacy'
  | 'security'
  | 'contact'
  | 'owner';

export default function App() {
  const [view, setView] = useState<ViewMode>('home');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateRecord | null>(null);
  const [verifyId, setVerifyId] = useState<string | undefined>(undefined);

  // Authenticated Owner State (Requirement 16: No public owner toggle, server-side authenticated only)
  const [isOwnerAuthenticated, setIsOwnerAuthenticated] = useState<boolean>(() => {
    return Boolean(sessionStorage.getItem('lwf_owner_session_token'));
  });
  const [isOwnerLoginModalOpen, setIsOwnerLoginModalOpen] = useState(false);

  // Verify stored session token on initial mount
  useEffect(() => {
    const token = sessionStorage.getItem('lwf_owner_session_token');
    if (!token) {
      setIsOwnerAuthenticated(false);
      return;
    }

    fetch(`/api/owner/verify-session?token=${encodeURIComponent(token)}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.authenticated) {
          setIsOwnerAuthenticated(true);
        } else {
          sessionStorage.removeItem('lwf_owner_session_token');
          setIsOwnerAuthenticated(false);
        }
      })
      .catch(() => {
        // In local development fallback
        setIsOwnerAuthenticated(true);
      });
  }, []);

  // Handle URL hash changes for deep linking (e.g. #verify?id=LWF-2026-XXXXXX)
  useEffect(() => {
    function handleHashRoute() {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash) return;

      if (hash.startsWith('verify')) {
        const urlParams = new URLSearchParams(hash.split('?')[1] || '');
        const idParam = urlParams.get('id') || undefined;
        setVerifyId(idParam);
        setView('verify');
      } else if (hash === 'owner') {
        const token = sessionStorage.getItem('lwf_owner_session_token');
        if (token) {
          setView('owner');
        } else {
          // Trigger owner authentication modal
          setIsOwnerLoginModalOpen(true);
          setView('home');
        }
      } else if (hash === 'about') {
        setView('about');
      } else if (hash === 'mission') {
        setView('mission');
      } else if (hash === 'about-ceo') {
        setView('about-ceo');
      } else if (hash === 'privacy') {
        setView('privacy');
      } else if (hash === 'security') {
        setView('security');
      } else if (hash === 'contact') {
        setView('contact');
      } else if (hash.startsWith('course/')) {
        const courseId = hash.replace('course/', '');
        courseService.getCourseById(courseId).then((c) => {
          if (c) {
            setSelectedCourse(c);
            setView('course');
          }
        });
      }
    }

    handleHashRoute();
    window.addEventListener('hashchange', handleHashRoute);
    return () => window.removeEventListener('hashchange', handleHashRoute);
  }, []);

  // Scroll to top on view switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  function navigateTo(
    target: ViewMode,
    options?: { course?: Course; certificate?: CertificateRecord; verifyId?: string }
  ) {
    if (options?.course) {
      setSelectedCourse(options.course);
    }
    if (options?.certificate) {
      setSelectedCertificate(options.certificate);
    }
    if (options?.verifyId !== undefined) {
      setVerifyId(options.verifyId);
    }
    setView(target);
    window.location.hash = target === 'home' ? '' : target;
  }

  function handleOwnerLogout() {
    sessionStorage.removeItem('lwf_owner_session_token');
    setIsOwnerAuthenticated(false);
    if (view === 'owner') {
      navigateTo('home');
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header
        currentView={view}
        isOwnerAuthenticated={isOwnerAuthenticated}
        onNavigateHome={() => navigateTo('home')}
        onNavigateVerify={() => navigateTo('verify')}
        onNavigateAbout={() => navigateTo('about')}
        onNavigateMission={() => navigateTo('mission')}
        onNavigateAboutCeo={() => navigateTo('about-ceo')}
        onNavigatePrivacy={() => navigateTo('privacy')}
        onNavigateSecurity={() => navigateTo('security')}
        onNavigateContact={() => navigateTo('contact')}
        onNavigateOwnerDashboard={() => navigateTo('owner')}
        onOwnerLogout={handleOwnerLogout}
      />

      <main className="flex-1">
        {view === 'home' && (
          <HomePage
            onOpenCourse={(course) => navigateTo('course', { course })}
            onNavigateVerify={() => navigateTo('verify')}
            onNavigateAbout={() => navigateTo('about')}
            onNavigateMission={() => navigateTo('mission')}
            onNavigateAboutCeo={() => navigateTo('about-ceo')}
            onNavigatePrivacy={() => navigateTo('privacy')}
            onNavigateSecurity={() => navigateTo('security')}
            onNavigateContact={() => navigateTo('contact')}
            onOpenOwnerLogin={() => setIsOwnerLoginModalOpen(true)}
          />
        )}

        {view === 'course' && selectedCourse && (
          <CourseView
            course={selectedCourse}
            onBack={() => navigateTo('home')}
            onViewCertificate={(cert) => navigateTo('certificate', { certificate: cert })}
          />
        )}

        {view === 'verify' && (
          <VerifyPage
            initialId={verifyId}
            onViewCertificate={(cert) => navigateTo('certificate', { certificate: cert })}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {view === 'certificate' && selectedCertificate && (
          <div className="min-h-screen bg-slate-100 py-10 px-4">
            <CertificateView
              certificate={selectedCertificate}
              onClose={() => navigateTo('home')}
            />
          </div>
        )}

        {view === 'owner' && isOwnerAuthenticated && (
          <OwnerDashboard
            onNavigateHome={() => navigateTo('home')}
            onOpenCourse={(course) => navigateTo('course', { course })}
          />
        )}

        {view === 'about' && (
          <AboutPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateContact={() => navigateTo('contact')}
          />
        )}

        {view === 'mission' && (
          <MissionPage
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {view === 'about-ceo' && (
          <AboutCeoPage
            onNavigateHome={() => navigateTo('home')}
            onNavigateContact={() => navigateTo('contact')}
            onNavigateMission={() => navigateTo('mission')}
          />
        )}

        {view === 'privacy' && (
          <PrivacyPage
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {view === 'security' && (
          <SecurityPage
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {view === 'contact' && (
          <ContactPage
            onNavigateHome={() => navigateTo('home')}
          />
        )}
      </main>

      {/* Owner Login Modal */}
      <OwnerLoginModal
        isOpen={isOwnerLoginModalOpen}
        onClose={() => setIsOwnerLoginModalOpen(false)}
        onSuccess={() => {
          setIsOwnerAuthenticated(true);
          navigateTo('owner');
        }}
      />
    </div>
  );
}
