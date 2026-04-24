import ProfileDropdown from './ProfileDropdown';

const NAV_ITEMS = [
  { key: 'home',     label: 'Home' },
  { key: 'events',   label: 'Events' },
  { key: 'groups',   label: 'Groups' },
  { key: 'mygroups', label: 'MyGroups' },
  { key: 'mywallet', label: 'MyWallet' },
];

function Logo() {
  return (
    <span className="font-body text-[22px] font-extrabold text-white tracking-tight select-none">
      Cirkle
    </span>
  );
}

function NavLinks({ activeKey, onSelect }) {
  return (
    <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.key}
          type="button"
          onClick={() => onSelect(item.key)}
          className={
            activeKey === item.key
              ? 'flex-shrink-0 font-body text-sm font-bold text-cirkle-yellow relative after:content-[\'\'] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-cirkle-yellow after:rounded-full transition-colors duration-200'
              : 'flex-shrink-0 font-body text-sm font-medium text-cirkle-text-muted hover:text-white transition-colors duration-200'
          }
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

export function Navbar({ initialActive = 'home', onNavigate }) {
  function handleSelect(key) {
    onNavigate?.(key);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cirkle-black border-b border-cirkle-border">

      {/* Mobile: Logo + Sign In only — bottom nav handles page switching */}
      <div className="md:hidden px-4 h-14 flex items-center justify-between">
        <Logo />
        <ProfileDropdown onSelect={onNavigate} />
      </div>

      {/* Desktop: full nav */}
      <nav className="hidden md:flex max-w-[1040px] mx-auto px-6 h-16 items-center">
        <div className="flex-shrink-0">
          <Logo />
        </div>
        <div className="flex-1 flex justify-center">
          <NavLinks activeKey={initialActive} onSelect={handleSelect} />
        </div>
        <div className="flex-shrink-0">
          <ProfileDropdown onSelect={onNavigate} />
        </div>
      </nav>

    </header>
  );
}

export default Navbar;
