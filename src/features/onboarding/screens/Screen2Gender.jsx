import OnboardingShell from '../shared/OnboardingShell';
import { useOnboarding } from '../context/OnboardingContext';

const OPTIONS = ['Man', 'Woman', 'Non-binary', 'Prefer not to say'];

export function Screen2Gender({ onBack, onSkip, onNext }) {
  const { data, update } = useOnboarding();
  const gender = data.gender;

  const valid = gender !== null;

  return (
    <OnboardingShell
      step={2}
      onBack={onBack}
      onSkip={onSkip}
      cta={{ label: 'Continue', disabled: !valid, onClick: onNext }}
    >
      <h2 className="font-display text-[36px] leading-[0.95] uppercase text-white text-center tracking-[0.01em]">
        I am a
      </h2>

      <p className="mt-2 font-body text-[13px] font-normal text-cirkle-text-muted text-center">
        This helps us personalize your experience
      </p>

      <ul className="mt-8 flex flex-col gap-3">
        {OPTIONS.map((opt) => {
          const selected = gender === opt;
          return (
            <li key={opt}>
              <button
                type="button"
                onClick={() => update({ gender: opt })}
                className={`w-full h-14 px-5 rounded-full flex items-center justify-between font-body text-[15px] font-semibold transition-all duration-200 border ${
                  selected
                    ? 'bg-cirkle-yellow text-cirkle-text-dark border-cirkle-yellow'
                    : 'bg-cirkle-card text-white border-cirkle-border hover:border-cirkle-border-card'
                }`}
              >
                <span>{opt}</span>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                  selected ? 'bg-cirkle-text-dark' : 'border border-cirkle-border-card'
                }`}>
                  {selected && <span className="w-2 h-2 rounded-full bg-cirkle-yellow" />}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </OnboardingShell>
  );
}

export default Screen2Gender;
