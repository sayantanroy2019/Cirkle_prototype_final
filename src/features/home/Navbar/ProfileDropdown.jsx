import { useState, useRef, useEffect } from 'react';
import { User, LogIn, Settings, ChevronDown } from 'lucide-react';

const MENU_ITEMS = [
  { key: 'profile',  label: 'My Profile', Icon: User },
  { key: 'login',    label: 'Login',      Icon: LogIn },
  { key: 'settings', label: 'Settings',   Icon: Settings },
];

export function ProfileDropdown({ onSelect }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  function handlePick(key) {
    setOpen(false);
    onSelect?.(key);
  }

  return (
    <div ref={wrapperRef} className="relative">

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Account menu"
        className={`h-10 pl-1 pr-2 rounded-full flex items-center gap-1.5 bg-cirkle-card border transition-all duration-200 hover:-translate-y-0.5 ${
          open ? 'border-cirkle-yellow' : 'border-cirkle-border hover:border-cirkle-border-card'
        }`}
      >
        <span className="w-8 h-8 rounded-full bg-cirkle-yellow flex items-center justify-center">
          <User size={16} strokeWidth={2.5} className="text-cirkle-text-dark" />
        </span>
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={`text-cirkle-text-muted transition-transform duration-200 ${open ? 'rotate-180 text-cirkle-yellow' : ''}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-[calc(100%+10px)] w-56 bg-cirkle-card border border-cirkle-border rounded-card shadow-card overflow-hidden z-50 origin-top-right animate-[fadeUp_0.18s_ease_forwards]"
        >

          <div className="px-4 pt-3 pb-2 border-b border-cirkle-border">
            <p className="font-body text-[10px] font-bold uppercase tracking-[0.15em] text-cirkle-yellow">
              Account
            </p>
            <p className="mt-0.5 font-body text-[13px] font-semibold text-white truncate">
              Welcome to Cirkle
            </p>
          </div>

          <ul className="py-1">
            {MENU_ITEMS.map(({ key, label, Icon }) => (
              <li key={key} role="none">
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => handlePick(key)}
                  className="group w-full flex items-center gap-3 px-4 py-2.5 font-body text-[14px] font-medium text-white hover:bg-cirkle-input hover:text-cirkle-yellow transition-colors duration-200"
                >
                  <Icon
                    size={16}
                    strokeWidth={2}
                    className="text-cirkle-text-muted group-hover:text-cirkle-yellow transition-colors duration-200"
                  />
                  {label}
                </button>
              </li>
            ))}
          </ul>

        </div>
      )}

    </div>
  );
}

export default ProfileDropdown;
