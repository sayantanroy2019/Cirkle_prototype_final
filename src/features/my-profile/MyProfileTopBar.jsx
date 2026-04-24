import { ArrowLeft, Pencil } from 'lucide-react';

export function MyProfileTopBar({ onBack, onEdit }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 h-12 bg-cirkle-black border-b border-cirkle-border flex items-center justify-between px-4">

      <button
        type="button"
        onClick={onBack}
        aria-label="Go back"
        className="w-9 h-9 flex items-center justify-center text-white hover:opacity-70 transition-opacity duration-200"
      >
        <ArrowLeft size={20} strokeWidth={2} />
      </button>

      <h1 className="absolute left-1/2 -translate-x-1/2 font-body text-[15px] font-semibold text-white pointer-events-none select-none">
        My Profile
      </h1>

      <button
        type="button"
        onClick={onEdit}
        className="h-9 px-3 rounded-full bg-cirkle-yellow text-cirkle-text-dark inline-flex items-center gap-1.5 font-body text-[12px] font-bold hover:bg-cirkle-yellow-hover transition-all duration-200"
      >
        <Pencil size={13} strokeWidth={2.5} />
        Edit
      </button>

    </header>
  );
}

export default MyProfileTopBar;
