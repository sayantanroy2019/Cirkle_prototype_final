import { ArrowLeft, Settings } from 'lucide-react';

export function JoinedGroupTopBar({
  groupName,
  onBack = () => window.history.back(),
  onSettings = () => {},
}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-12 bg-cirkle-black border-b border-cirkle-border backdrop-blur-sm">
      <div className="relative flex items-center justify-between h-full px-4">

        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          className="w-9 h-9 flex items-center justify-center text-white hover:opacity-70 transition-opacity duration-200"
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </button>

        <h1 className="absolute left-1/2 -translate-x-1/2 font-body text-[15px] font-semibold text-white pointer-events-none select-none whitespace-nowrap">
          {groupName}
        </h1>

        <button
          type="button"
          onClick={onSettings}
          aria-label="Group settings"
          className="w-9 h-9 flex items-center justify-center text-white hover:opacity-70 transition-opacity duration-200"
        >
          <Settings size={20} strokeWidth={2} />
        </button>

      </div>
    </header>
  );
}

export default JoinedGroupTopBar;
