import { Shield, Server, AlertTriangle, Key } from 'lucide-react';

type SecurityPageProps = {
  onNavigateHome: () => void;
};

export default function SecurityPage({ onNavigateHome }: SecurityPageProps) {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0056D2] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
          <Shield className="w-4 h-4 text-[#0056D2]" />
          Platform Security &amp; Trust
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Security Architecture &amp; Integrity
        </h1>
        <p className="mt-3 text-slate-600 text-xs sm:text-sm">
          Technical transparency regarding credential verification, zero secret exposure, and backend roadmaps.
        </p>
      </div>

      <div className="space-y-6">
        {/* Card 1: API Key Protection */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0056D2] flex items-center justify-center flex-shrink-0">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Zero Secret Exposure in Client Code</h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Learn With Flow strictly adheres to security best practices: no private API keys, service role secrets, or administrative master tokens are ever bundled or exposed in client-side source code. Embedded video playback is powered by YouTube's official public iframe API without client credential leakage.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Honest Architectural Disclosure */}
        <div className="bg-white rounded-2xl border border-amber-200 p-6 sm:p-8 shadow-sm bg-amber-50/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Architectural Note: Browser Prototype vs Production</h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                In this responsive browser-based client build, assessment grading and certificate generation execute client-side. We do <strong>not</strong> falsely claim that client-side JavaScript execution is cryptographically unforgeable.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                For our high-assurance enterprise roadmap, assessment verification, score grading, and PDF signing will be executed inside isolated serverless microservices paired with HMAC digital signatures and asynchronous blockchain ledger stamping.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Credential Verification & Accreditation */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0056D2] flex items-center justify-center flex-shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">Authentic Credential Verification</h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Each certificate carries an unambiguous unique identification number (<span className="font-mono font-bold text-slate-800">LWF-2026-XXXXXX</span>) and QR code pointing directly to our platform verification system.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <strong>Accreditation Transparency:</strong> Learn With Flow is an independent educational initiative. Our credentials celebrate course mastery and technical skill development. We make no false assertions of accreditation by government departments, universities, or corporate trademark holders.
              </p>
            </div>
          </div>
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
