import { ArrowLeft, Upload, Bookmark } from 'lucide-react';

export function EventDetailHeader({ onBack = () => window.history.back() }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cirkle-black flex items-center justify-between px-4 h-14">

      <button
        type="button"
        onClick={onBack}
        className="w-9 h-9 flex items-center justify-center text-white transition-opacity duration-200 hover:opacity-70"
      >
        <ArrowLeft size={22} strokeWidth={2.5} />
      </button>

      <h1 className="font-body text-[16px] font-semibold text-white absolute left-1/2 -translate-x-1/2">
        Event Details
      </h1>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="w-9 h-9 flex items-center justify-center text-white transition-opacity duration-200 hover:opacity-70"
        >
          <Upload size={20} strokeWidth={2} />
        </button>

        <button
          type="button"
          className="w-9 h-9 flex items-center justify-center text-white transition-opacity duration-200 hover:opacity-70"
        >
          <Bookmark size={20} strokeWidth={2} />
        </button>
      </div>

    </header>
  );
}

export default EventDetailHeader;
