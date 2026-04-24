import { useState } from 'react';
import { Search, MapPin, Check, Crosshair } from 'lucide-react';
import OnboardingShell from '../shared/OnboardingShell';
import { useOnboarding } from '../context/OnboardingContext';

const SUGGESTED = [
  { name: 'Mumbai, India',    country: 'Maharashtra' },
  { name: 'Delhi, India',     country: 'National Capital Territory' },
  { name: 'Bangalore, India', country: 'Karnataka' },
];

export function Screen4Location({ onBack, onSkip, onNext }) {
  const { data, update } = useOnboarding();
  const city = data.city;
  const [query, setQuery] = useState(city || '');

  const valid = city !== null && city !== '';

  return (
    <OnboardingShell
      step={4}
      onBack={onBack}
      onSkip={onSkip}
      cta={{ label: 'Continue', disabled: !valid, onClick: onNext }}
    >
      <h2 className="font-display text-[36px] leading-[0.95] uppercase text-white">
        Where are you based?
      </h2>

      <p className="mt-2 font-body text-[13px] font-normal text-cirkle-text-muted">
        Find tribes and events near you
      </p>

      <div className="mt-8 relative">
        <Search size={18} strokeWidth={2} className="absolute left-4 top-1/2 -translate-y-1/2 text-cirkle-text-muted flex-shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search city..."
          className="w-full h-12 pl-11 pr-4 rounded-full bg-cirkle-input border border-cirkle-border font-body text-[16px] font-medium text-white placeholder:text-cirkle-text-muted caret-cirkle-yellow outline-none focus:border-cirkle-border-card transition-colors duration-200"
        />
      </div>

      <ul className="mt-4 flex flex-col gap-2">
        {SUGGESTED.map((c) => {
          const selected = city === c.name;
          return (
            <li key={c.name}>
              <button
                type="button"
                onClick={() => { update({ city: c.name }); setQuery(c.name); }}
                className={`w-full h-14 px-4 rounded-card flex items-center gap-3 bg-cirkle-card transition-all duration-200 border ${
                  selected
                    ? 'border-cirkle-yellow'
                    : 'border-cirkle-border hover:border-cirkle-border-card'
                }`}
              >
                <MapPin size={16} strokeWidth={2} className="text-cirkle-text-muted flex-shrink-0" />
                <div className="flex-1 text-left min-w-0">
                  <p className="font-body text-[14px] font-semibold text-white truncate">
                    {c.name}
                  </p>
                  <p className="font-body text-[11px] font-normal text-cirkle-text-muted truncate">
                    {c.country}
                  </p>
                </div>
                {selected && <Check size={16} strokeWidth={2.5} className="text-cirkle-yellow flex-shrink-0" />}
              </button>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        className="mt-4 w-full h-11 rounded-full bg-transparent border border-white flex items-center justify-center gap-2 font-body text-[13px] font-semibold text-white hover:bg-cirkle-card transition-all duration-200"
      >
        <Crosshair size={16} strokeWidth={2} />
        Use current location
      </button>
    </OnboardingShell>
  );
}

export default Screen4Location;
