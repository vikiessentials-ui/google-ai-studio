import { FileText } from 'lucide-react';

type PrivacyPageProps = {
  onNavigateHome: () => void;
};

export default function PrivacyPage({ onNavigateHome }: PrivacyPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0056D2] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
          <FileText className="w-4 h-4 text-[#0056D2]" />
          Legal &amp; Privacy
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-3 text-slate-600 text-xs sm:text-sm">
          Effective Date: January 1, 2026 • Learn With Flow
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">1. Minimal Data Collection Principle</h2>
          <p>
            Learn With Flow is built with a privacy-first ethos. We do not sell, rent, monetize, or broker personal student data. We collect only the information strictly necessary to track course progress, render assessments, and issue verifiable completion credentials.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">2. Local-First Client Storage</h2>
          <p>
            For the browser client prototype, course progress, quiz completion scores, and issued certificates are stored locally on your device within your browser's secure web storage (`localStorage`). You maintain absolute authority over this data and can clear it at any time via your browser settings.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">3. YouTube Embedded Video Services</h2>
          <p>
            Our video lessons utilize YouTube's official embedded video players. When playing a video, YouTube/Google may collect standard player telemetry and cookies in accordance with Google's Privacy Policy. We configure embedded players using privacy-conscious parameters whenever supported.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">4. Certificate Verification Data</h2>
          <p>
            When you complete a course with a 100% final exam score and generate an official certificate, the student name you provide, the course title, score, date, and unique verification identifier (`LWF-2026-XXXXXX`) are recorded in our credential registry to allow employers and institutions to verify authenticity.
          </p>
        </div>

        <div>
          <h2 className="text-base font-bold text-slate-900 mb-2">5. Contact and Inquiries</h2>
          <p>
            For any privacy inquiries, data deletion requests, or general feedback, contact us at: <a href="mailto:support@learnwithflow.org" className="text-[#0056D2] font-semibold underline">support@learnwithflow.org</a>.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={onNavigateHome}
          className="text-xs font-semibold text-[#0056D2] hover:underline"
        >
          ← Return to Courses Catalog
        </button>
      </div>
    </div>
  );
}
