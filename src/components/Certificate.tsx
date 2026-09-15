import { useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import confetti from 'canvas-confetti';
import { Award, Download, CheckCircle2, Shield, Calendar, Copy, Check } from 'lucide-react';
import type { CertificateRecord } from '@/types';

type CertificateProps = {
  certificate: CertificateRecord;
  onClose?: () => void;
};

export default function CertificateView({ certificate, onClose }: CertificateProps) {
  const certContainerRef = useRef<HTMLDivElement>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Generate high-resolution QR code
  useEffect(() => {
    QRCode.toDataURL(certificate.verificationUrl, {
      width: 256,
      margin: 1,
      color: {
        dark: '#0F172A',
        light: '#FFFFFF',
      },
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error('Failed to generate QR code:', err));

    // Trigger celebratory confetti on view
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0056D2', '#38a9f6', '#0F172A', '#facc15'],
      });
    } catch {
      // ignore
    }
  }, [certificate]);

  // PDF Download using html2pdf.js
  async function handleDownloadPdf() {
    if (!certContainerRef.current) return;
    setDownloading(true);

    try {
      // Dynamic import of html2pdf.js for optimal performance
      const html2pdfModule = await import('html2pdf.js');
      const html2pdf = html2pdfModule.default || html2pdfModule;

      const element = certContainerRef.current;
      const safeStudentName = certificate.studentName.replace(/[^a-zA-Z0-9]/g, '-');
      const filename = `Learn-With-Flow-Certificate-${safeStudentName}-${certificate.verificationId}.pdf`;

      const opt = {
        margin: 0,
        filename,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          letterRendering: true,
          windowWidth: 1122, // Standard A4 landscape at 96 DPI
        },
        jsPDF: {
          unit: 'mm',
          format: 'a4',
          orientation: 'landscape' as const,
        },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (err) {
      console.error('PDF export failed:', err);
      window.print();
    } finally {
      setDownloading(false);
    }
  }

  function handleCopyVerificationLink() {
    navigator.clipboard.writeText(certificate.verificationUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <div className="flex flex-col items-center py-6 px-4 max-w-5xl mx-auto">
      {/* Top action bar */}
      <div className="w-full flex flex-wrap items-center justify-between gap-4 mb-6 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span>Verified Certificate of Completion</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-100 text-emerald-800">
                100% Score Verified
              </span>
            </div>
            <div className="text-xs text-slate-500 font-mono">ID: {certificate.verificationId}</div>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleCopyVerificationLink}
            id="copy-verification-link-btn"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            title="Copy verification link"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Link Copied' : 'Copy Verify Link'}</span>
          </button>

          <button
            onClick={handleDownloadPdf}
            id="download-certificate-pdf-btn"
            disabled={downloading}
            className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-[#0056D2] hover:bg-blue-700 rounded-lg shadow-sm transition-all hover:shadow"
          >
            <Download className="w-4 h-4" />
            <span>{downloading ? 'Exporting PDF...' : 'Download Official PDF (A4)'}</span>
          </button>

          {onClose && (
            <button
              onClick={onClose}
              id="close-certificate-view-btn"
              className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
            >
              Close
            </button>
          )}
        </div>
      </div>

      {/* A4 Landscape Printable Certificate Container */}
      <div className="w-full overflow-x-auto pb-4 flex justify-center">
        <div
          ref={certContainerRef}
          id="official-certificate-canvas"
          className="relative bg-white text-slate-900 shadow-2xl overflow-hidden print:shadow-none"
          style={{
            width: '1020px',
            minWidth: '1020px',
            height: '720px',
            boxSizing: 'border-box',
          }}
        >
          {/* Subtle Watermark in background */}
          <div
            className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.035] select-none"
            aria-hidden="true"
          >
            <div className="text-center font-display font-black text-[120px] tracking-widest text-[#0056D2] uppercase">
              FLOW
            </div>
          </div>

          {/* Outer Royal Blue Solid Border */}
          <div className="absolute inset-4 border-[3px] border-[#0056D2] pointer-events-none" />

          {/* Inner Thin Border with 6px gap */}
          <div className="absolute inset-6 border border-slate-300 pointer-events-none" />

          {/* Corner Ornaments */}
          <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-[#0056D2] pointer-events-none" />
          <div className="absolute top-8 right-8 w-8 h-8 border-t-2 border-r-2 border-[#0056D2] pointer-events-none" />
          <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-[#0056D2] pointer-events-none" />
          <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-[#0056D2] pointer-events-none" />

          {/* Main Certificate Content Layout */}
          <div className="relative h-full flex flex-col justify-between p-12 text-center">
            {/* Header / Brand */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#0056D2] text-white flex items-center justify-center shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-display font-black text-xl tracking-tight text-[#0F172A] leading-none">
                    LEARN WITH FLOW
                  </div>
                  <div className="text-[9px] font-semibold text-[#0056D2] tracking-widest uppercase mt-0.5">
                    Learn. Build. Flow.
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h1 className="font-display text-3xl font-extrabold text-[#0F172A] uppercase tracking-wider">
                  Certificate of Completion
                </h1>
                <div className="w-24 h-0.5 bg-[#0056D2] mx-auto mt-2" />
              </div>
            </div>

            {/* Recipient and Course Details */}
            <div className="my-auto py-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                This verified credential is proud to certify that
              </p>

              <h2 className="font-display text-3xl sm:text-4xl font-black text-[#0F172A] px-6 py-1 tracking-tight">
                {certificate.studentName}
              </h2>
              <div className="w-64 h-px bg-slate-300 mx-auto my-2" />

              <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed mt-2">
                has successfully mastered the comprehensive curriculum, fulfilled all hands-on requirements,
                and passed the 25-question final graduation examination with a perfect score in:
              </p>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0056D2] mt-2 px-8">
                {certificate.courseTitle}
              </h3>

              {/* Verified Badge */}
              <div className="mt-3 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 border border-blue-200">
                <Shield className="w-3.5 h-3.5 text-[#0056D2]" />
                <span className="text-xs font-bold text-[#0056D2]">
                  Final Assessment Score: {certificate.finalExamScore}/{certificate.totalQuestions} (100% Verified)
                </span>
              </div>
            </div>

            {/* Bottom Row: CEO Signature, Official Seal & QR Code */}
            <div className="grid grid-cols-3 items-end pt-4 border-t border-slate-200">
              {/* Left Column: CEO Signature */}
              <div className="text-left pl-4">
                {/* Stylized CEO script signature */}
                <div
                  className="font-script text-3xl text-slate-900 leading-none mb-1 select-none"
                  style={{ transform: 'rotate(-2deg)' }}
                >
                  Muhammad Talha
                </div>
                <div className="w-48 h-px bg-slate-400" />
                <div className="text-xs font-bold text-slate-900 mt-1.5 uppercase tracking-wide">
                  Muhammad Talha
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  Founder &amp; CEO, Learn With Flow
                </div>
              </div>

              {/* Center Column: Official Verification Details & Dates */}
              <div className="text-center px-2">
                <div className="inline-flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-[#0056D2] bg-blue-50 flex items-center justify-center shadow-inner">
                    <Award className="w-7 h-7 text-[#0056D2]" />
                  </div>
                  <div className="text-[10px] font-bold text-slate-800 uppercase tracking-widest mt-1">
                    Official Credential
                  </div>
                  <div className="text-[9px] text-slate-500 mt-0.5 flex items-center gap-1 justify-center">
                    <Calendar className="w-3 h-3" />
                    <span>Completed: {certificate.completionDate}</span>
                  </div>
                  <div className="text-[9px] text-slate-500">
                    <span>Issued: {certificate.issueDate}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: QR Code & Verification ID */}
              <div className="text-right pr-4 flex flex-col items-end">
                {qrDataUrl && (
                  <div className="p-1 bg-white border border-slate-200 rounded shadow-sm mb-1">
                    <img
                      src={qrDataUrl}
                      alt={`Verification QR Code for ${certificate.verificationId}`}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                )}
                <div className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider">
                  Scan to Verify or Visit
                </div>
                <div className="text-xs font-mono font-bold text-[#0056D2] tracking-wider">
                  {certificate.verificationId}
                </div>
                <div className="text-[8px] text-slate-400 font-mono">
                  learnwithflow.org/verify
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Verification Notice */}
      <div className="w-full max-w-3xl mt-4 p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 text-xs text-center leading-relaxed">
        <span className="font-semibold text-slate-800">Authenticity Guarantee:</span> This official Learn With Flow certificate represents verified mastery of the curriculum. The credential can be verified instantly by scanning the QR code or searching ID <span className="font-mono font-bold text-slate-900">{certificate.verificationId}</span> on the verification portal.
      </div>
    </div>
  );
}
