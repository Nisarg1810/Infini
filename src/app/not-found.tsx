import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 space-y-6">
      <h1 className="text-6xl font-extrabold text-infini-navy">404</h1>
      <h2 className="text-2xl font-bold text-slate-700">Page Not Found</h2>
      <p className="text-sm text-slate-500 max-w-md">
        The page you are looking for might have been moved or does not exist.
      </p>
      <Link 
        href="/" 
        className="bg-infini-navy hover:bg-infini-cyan text-white hover:text-infini-navy px-6 py-3 rounded-full text-xs font-bold transition-colors inline-flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Return to Home Page
      </Link>
    </div>
  );
}
