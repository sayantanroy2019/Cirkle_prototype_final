import { Search } from 'lucide-react';

export function GroupsSearchBar() {
  return (
    <div className="px-4 pt-4 pb-2">
      <div className="flex items-center gap-3 bg-cirkle-input rounded-full px-4 py-3 border border-cirkle-border">
        <Search size={18} strokeWidth={2} className="text-cirkle-text-muted flex-shrink-0" />
        <input
          type="text"
          placeholder="Search groups..."
          className="flex-1 bg-transparent font-body text-[14px] font-medium text-white placeholder:text-cirkle-text-muted placeholder:font-medium outline-none"
        />
      </div>
    </div>
  );
}

export default GroupsSearchBar;
