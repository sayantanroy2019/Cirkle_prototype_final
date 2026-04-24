import { Check } from 'lucide-react';
import OnboardingShell from '../shared/OnboardingShell';
import { useOnboarding } from '../context/OnboardingContext';

const ALL_INTERESTS = [
  'Music', 'Nightlife', 'Foodie', 'Hiking', 'Yoga', 'Photography',
  'Travel', 'Art & Design', 'Gaming', 'Tech', 'Dance', 'Fitness',
  'Coffee', 'Books', 'Films', 'Fashion', 'Cycling', 'Cooking',
  'Theatre', 'Pets',
];

const MIN = 5;
const MAX = 20;

export function Screen5Interests({ onBack, onSkip, onNext }) {
  const { data, update } = useOnboarding();
  const selected = data.interests;

  const toggle = (tag) => {
    const next = selected.includes(tag)
      ? selected.filter((t) => t !== tag)
      : [...selected, tag];
    update({ interests: next });
  };

  const valid = selected.length >= MIN;

  return (
    <OnboardingShell
      step={5}
      onBack={onBack}
      onSkip={onSkip}
      cta={{ label: 'Continue', disabled: !valid, onClick: onNext }}
    >
      <h2 className="font-display text-[36px] leading-[0.95] uppercase text-white">
        What are you into?
      </h2>

      <div className="mt-2 flex items-start justify-between gap-3">
        <p className="font-body text-[13px] font-normal text-cirkle-text-muted max-w-[80%]">
          Pick at least {MIN} interests so we can match you with the right tribes
        </p>
        <span className={`flex-shrink-0 inline-flex items-center h-6 px-2.5 rounded-full font-body text-[11px] font-bold tracking-wide whitespace-nowrap ${
          valid
            ? 'bg-cirkle-yellow/15 text-cirkle-yellow'
            : 'bg-cirkle-card text-cirkle-text-muted border border-cirkle-border'
        }`}>
          {selected.length} / {MAX} selected
        </span>
      </div>

      <ul className="mt-7 flex flex-wrap gap-x-2 gap-y-2.5" role="group" aria-label="Interests">
        {ALL_INTERESTS.map((tag) => {
          const on = selected.includes(tag);
          const atMax = !on && selected.length >= MAX;
          return (
            <li key={tag}>
              <button
                type="button"
                onClick={() => !atMax && toggle(tag)}
                disabled={atMax}
                className={`h-9 px-4 rounded-full inline-flex items-center gap-1.5 font-body text-[13px] font-semibold transition-all duration-200 ${
                  on
                    ? 'bg-cirkle-yellow text-cirkle-text-dark'
                    : 'bg-cirkle-input text-cirkle-text-light border border-cirkle-border hover:text-white hover:border-cirkle-border-card'
                } ${atMax ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                {on && <Check size={14} strokeWidth={3} />}
                {tag}
              </button>
            </li>
          );
        })}
      </ul>
    </OnboardingShell>
  );
}

export default Screen5Interests;
