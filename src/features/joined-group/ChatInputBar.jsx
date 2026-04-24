import { Send } from 'lucide-react';

export function ChatInputBar() {
  return (
    <div className="fixed bottom-[60px] left-0 right-0 z-40 bg-cirkle-black border-t border-cirkle-border px-4 py-3">
      <div className="flex items-center gap-2">
        <div className="flex-1 flex items-center bg-cirkle-input border border-cirkle-border rounded-full px-4 h-10">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-transparent font-body text-[13px] font-medium text-white placeholder:text-cirkle-text-muted outline-none"
          />
        </div>
        <button
          type="button"
          className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-cirkle-yellow text-cirkle-text-dark transition-all duration-200 hover:bg-cirkle-yellow-hover hover:-translate-y-0.5 active:translate-y-0"
          aria-label="Send message"
        >
          <Send size={16} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

export default ChatInputBar;
