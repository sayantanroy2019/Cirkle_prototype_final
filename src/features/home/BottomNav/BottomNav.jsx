import { Home, CalendarDays, Users, UserCheck, Wallet } from 'lucide-react';

const TABS = [
  { key: 'home',     Icon: Home,         label: 'Home' },
  { key: 'events',   Icon: CalendarDays, label: 'Events' },
  { key: 'groups',   Icon: Users,        label: 'Groups' },
  { key: 'mygroups', Icon: UserCheck,    label: 'MyGroups' },
  { key: 'mywallet', Icon: Wallet,       label: 'Wallet' },
];

export function BottomNav({ initialActive = 'home', onNavigate }) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-cirkle-nav-bottom border-t border-cirkle-border h-[60px] flex items-center pb-[env(safe-area-inset-bottom)]">
      {TABS.map(({ key, Icon, label }) => {
        const isActive = initialActive === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onNavigate?.(key)}
            className="flex-1 flex flex-col items-center justify-center gap-0.5 py-1 transition-all duration-200"
          >
            <Icon
              size={20}
              strokeWidth={2}
              fill={isActive && key === 'mygroups' ? 'currentColor' : 'none'}
              className={isActive ? 'text-cirkle-yellow' : 'text-cirkle-text-muted'}
            />
            <span className={`font-body text-[10px] font-medium ${isActive ? 'text-cirkle-yellow' : 'text-cirkle-text-muted'}`}>
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

export default BottomNav;
