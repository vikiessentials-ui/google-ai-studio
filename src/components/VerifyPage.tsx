import { useState, useEffect, useCallback } from 'react';
import { Search, ShieldCheck, ShieldAlert, Award, Calendar, User, BookOpen, ArrowRight, ExternalLink } from 'lucide-react';
import { progressService } from '@/services/progressService';
import type { CertificateRecord } from '@/types';

type VerifyPageProps = {
  initialId?: string;
  onViewCertificate?: (cert: CertificateRecord) => void;
  onNavigateHome: () => void;
};

export default function VerifyPage({ initialId, onViewCertificate, onNavigateHome }: VerifyPageProps) {
  const [searchId, setSearchId] = useState(initialId || '');
  const [verifiedRecord, setVerifiedRecord] = useState<CertificateRecord | null>(null);
  const [searched, setSearched] = useState(false);

  const handleLookup = useCallback((idToTest?: string) => {
    const target = (idToTest || searchId).trim();
    if (!target) return;

    setSearched(true);
    const result = progressService.verifyCertificate(target);
    setVerifiedRecord(result);
  }, [searchId]);

  useEffect(() => {
    if (initialId) {
      handleLookup(initialId);
    }
  }, [initialId, handleLookup]);

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    handleLookup();
  }

  return (
    <div className="min-h-[80vh] py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0056D2] text-xs font-bold uppercase tracking-wider mb-4 border border-blue-100">
          <ShieldCheck className="w-4 h-4 text-[#0056D2]" />
          Credential Registry
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Verify Learn With Flow Certificate
        </h1>
        <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
          Authenticate completion credentials issued by Learn With Flow. Every verified credential requires achieving a 100% score on comprehensive modular and graduation assessments.
        </p>
      </div>

      {/* Verification Lookup Box */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <label htmlFor="verification-id-input" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            Certificate or Verification ID (e.g. LWF-2026-XXXXXX)
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                id="verification-id-input"
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value.toUpperCase())}
                placeholder="LWF-2026-ABCDEF"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 font-mono text-sm placeholder:font-sans focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056D2] focus:border-transparent transition-all"
                required
              />
            </div>
            <button
              type="submit"
              id="submit-verify-btn"
              className="px-6 py-3 bg-[#0056D2] hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Verify Credential</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

      {/* Result Presentation */}
      {searched && verifiedRecord && (
        <div className="bg-white rounded-2xl border-2 border-emerald-500 shadow-md p-6 sm:p-8 mb-8 animate-fade-in">
          <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700">
                <span>Authentic Record Found</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                ✔ Certificate Verified
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 border-b border-slate-100">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-slate-400 mt-0.5" />
              <div>
                <div className="text-xs text-slate-500 font-semibold uppercase">Recipient Name</div>
                <div className="text-base font-bold text-slate-900 mt-0.5">{verifiedRecord.studentName}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <BookOpen className="w-5 h-5 text-slate-400 mt-0.5" />
              <div>
                <div className="text-xs text-slate-500 font-semibold uppercase">Course Title</div>
                <div className="text-base font-bold text-[#0056D2] mt-0.5">{verifiedRecord.courseTitle}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-slate-400 mt-0.5" />
              <div>
                <div className="text-xs text-slate-500 font-semibold uppercase">Assessment Score</div>
                <div className="text-base font-bold text-emerald-700 mt-0.5">
                  {verifiedRecord.finalExamScore}/{verifiedRecord.totalQuestions} (100% Perfect Graduation)
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-slate-400 mt-0.5" />
              <div>
                <div className="text-xs text-slate-500 font-semibold uppercase">Issue &amp; Completion Date</div>
                <div className="text-base font-bold text-slate-900 mt-0.5">{verifiedRecord.issueDate}</div>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-500 font-mono">
              Verification ID: <span className="font-bold text-slate-800">{verifiedRecord.verificationId}</span>
            </div>

            {onViewCertificate && (
              <button
                onClick={() => onViewCertificate(verifiedRecord)}
                id="view-verified-cert-btn"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#0056D2] hover:bg-blue-700 rounded-lg transition-colors"
              >
                <span>View Official Certificate</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {searched && !verifiedRecord && (
        <div className="bg-white rounded-2xl border-2 border-rose-200 shadow-sm p-6 sm:p-8 mb-8 text-center animate-fade-in">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-3">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            ❌ Certificate Not Found
          </h2>
          <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
            No certificate matching ID <span className="font-mono font-bold text-slate-800">"{searchId}"</span> was found in our verification registry. Please check the spelling or format (e.g. LWF-2026-XXXXXX).
          </p>
        </div>
      )}

      {/* Honest statement note */}
      <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 text-xs text-slate-600 leading-relaxed space-y-2">
        <p className="font-bold text-slate-800">About Learn With Flow Verification:</p>
        <p>
          Certificates issued by Learn With Flow verify successful completion of structured self-paced coursework and mastery of lesson quizzes, module assessments, and the final graduation exam on our platform.
        </p>
        <p>
          Learn With Flow is an independent, 100% free educational platform. Our certificates confirm individual course achievement and skill acquisition; they do not represent an accredited university degree or formal institutional licensure.
        </p>
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
