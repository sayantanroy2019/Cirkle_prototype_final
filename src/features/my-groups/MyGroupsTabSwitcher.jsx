import { useState } from 'react';

const TABS = [
  { key: 'upcoming', label: 'UPCOMING' },
  { key: 'past',     label: 'PAST' },
];

export function MyGroupsTabSwitcher() {
  const [activeTab, setActiveTab] = useState('upcoming');

  return (
    <div className="px-4 mt-5">
      <div className="flex items-center bg-cirkle-card border border-cirkle-border rounded-full p-1">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 h-9 rounded-full font-body text-[12px] font-bold uppercase tracking-[0.08em] transition-all duration-200 ${
              activeTab === tab.key
                ? 'bg-cirkle-yellow text-cirkle-text-dark'
                : 'bg-transparent text-cirkle-text-muted hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MyGroupsTabSwitcher;
