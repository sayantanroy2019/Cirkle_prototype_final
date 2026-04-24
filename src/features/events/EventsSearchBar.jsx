import { Search } from 'lucide-react';

export function EventsSearchBar() {
  return (
    <div className="px-4 pt-4 pb-2">
      <div className="flex items-center gap-3 bg-cirkle-input rounded-full px-4 py-3 border border-cirkle-border">
        <Search size={16} strokeWidth={2} className="text-cirkle-text-muted flex-shrink-0" />
        <input
          type="text"
          placeholder="Search events..."
          className="flex-1 bg-transparent font-body text-[14px] text-white placeholder:text-cirkle-text-placeholder outline-none"
        />
      </div>
    </div>
  );
}

export default EventsSearchBar;
