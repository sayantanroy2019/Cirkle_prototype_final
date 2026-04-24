import { ArrowLeft, Share2 } from 'lucide-react';

export function GroupDetailTopBar({ onBack = () => window.history.back(), onShare = () => {} }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-12 bg-cirkle-black border-b border-cirkle-border backdrop-blur-sm">
      <div className="relative flex items-center justify-between h-full px-4">

        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          className="w-9 h-9 flex items-center justify-center text-white transition-opacity duration-200 hover:opacity-70"
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </button>

        <h1 className="absolute left-1/2 -translate-x-1/2 font-body text-[15px] font-semibold text-white pointer-events-none select-none">
          Group Details
        </h1>

        <button
          type="button"
          onClick={onShare}
          aria-label="Share group"
          className="w-9 h-9 flex items-center justify-center text-white transition-opacity duration-200 hover:opacity-70"
        >
          <Share2 size={20} strokeWidth={2} />
        </button>

      </div>
    </header>
  );
}

export default GroupDetailTopBar;
