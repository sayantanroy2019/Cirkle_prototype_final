import { X } from 'lucide-react';

export function PromptPickerSheet({ prompts, selected, onPick, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end" onClick={onClose}>

      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full bg-cirkle-black border-t border-cirkle-border rounded-t-[24px] pb-[env(safe-area-inset-bottom)]"
      >
        <div className="mx-auto mt-3 w-10 h-1 rounded-full bg-cirkle-border" />

        <div className="flex items-center justify-between px-5 pt-3 pb-2">
          <h3 className="font-body text-[16px] font-bold text-white">
            Choose a prompt
          </h3>
          <button type="button" onClick={onClose}>
            <X size={20} strokeWidth={2} className="text-cirkle-text-muted" />
          </button>
        </div>

        <ul className="px-2 pb-6 max-h-[60vh] overflow-y-auto">
          {prompts.map((p) => (
            <li key={p}>
              <button
                type="button"
                onClick={() => onPick(p)}
                className={`w-full text-left px-3 py-3 rounded-card font-body text-[14px] font-medium transition-colors duration-200 ${
                  p === selected ? 'bg-cirkle-card text-cirkle-yellow' : 'text-white hover:bg-cirkle-card'
                }`}
              >
                {p}
              </button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default PromptPickerSheet;
