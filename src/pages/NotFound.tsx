import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-green flex flex-col items-center justify-center text-center px-6">
      <img src="/neilsmagiccarpets-logo-white-transparent.png" alt="Neil's Magic Carpets" className="h-16 w-auto mb-12" />
      <p className="text-white/40 text-xs font-medium tracking-[0.3em] uppercase mb-4">404</p>
      <h1 className="font-display text-4xl sm:text-5xl font-medium text-white mb-6">Page not found</h1>
      <p className="text-white/60 mb-10 max-w-sm">The page you're looking for doesn't exist. Let's get you back home.</p>
      <button
        onClick={() => navigate("/")}
        className="text-sm font-medium px-8 py-3 border border-white/30 text-white hover:bg-white hover:text-green transition-colors"
      >
        Back to Home
      </button>
    </div>
  );
}
