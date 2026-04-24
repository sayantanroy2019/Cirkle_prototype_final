import { Info } from 'lucide-react';
import OnboardingShell from '../shared/OnboardingShell';
import { useOnboarding } from '../context/OnboardingContext';

export function Screen1Name({ onBack, onSkip, onNext }) {
  const { data, update } = useOnboarding();
  const { firstName, birthdayDd: dd, birthdayMm: mm, birthdayYyyy: yyyy } = data;

  const age = yyyy ? new Date().getFullYear() - parseInt(yyyy) : 0;
  const valid = firstName.trim().length >= 2 && dd && mm && yyyy && age >= 18;

  return (
    <OnboardingShell
      step={1}
      onBack={onBack}
      onSkip={onSkip}
      cta={{ label: 'Continue', disabled: !valid, onClick: onNext }}
    >
      <h2 className="font-display text-[36px] leading-[0.95] uppercase text-white tracking-[0.01em]">
        What&apos;s your name?
      </h2>

      <p className="mt-2 font-body text-[13px] font-normal text-cirkle-text-muted">
        This is how you&apos;ll appear to others
      </p>

      <div className="mt-8 flex flex-col gap-2">
        <label className="font-body text-[10px] font-bold uppercase tracking-[0.12em] text-cirkle-yellow">
          First Name
        </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => update({ firstName: e.target.value })}
          placeholder="Alex"
          className="w-full h-14 px-5 rounded-full bg-cirkle-input border border-cirkle-border font-body text-[16px] font-medium text-white placeholder:text-cirkle-text-muted caret-cirkle-yellow outline-none focus:border-cirkle-border-card transition-colors duration-200"
        />
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <label className="font-body text-[10px] font-bold uppercase tracking-[0.12em] text-cirkle-yellow">
          When&apos;s your birthday?
        </label>

        <div className="grid grid-cols-3 gap-2">
          <input
            inputMode="numeric"
            maxLength={2}
            value={dd}
            onChange={(e) => update({ birthdayDd: e.target.value })}
            placeholder="DD"
            className="h-14 text-center rounded-card bg-cirkle-input border border-cirkle-border font-body text-[16px] font-semibold text-white placeholder:text-cirkle-text-muted caret-cirkle-yellow outline-none focus:border-cirkle-border-card transition-colors duration-200"
          />
          <input
            inputMode="numeric"
            maxLength={2}
            value={mm}
            onChange={(e) => update({ birthdayMm: e.target.value })}
            placeholder="MM"
            className="h-14 text-center rounded-card bg-cirkle-input border border-cirkle-border font-body text-[16px] font-semibold text-white placeholder:text-cirkle-text-muted caret-cirkle-yellow outline-none focus:border-cirkle-border-card transition-colors duration-200"
          />
          <input
            inputMode="numeric"
            maxLength={4}
            value={yyyy}
            onChange={(e) => update({ birthdayYyyy: e.target.value })}
            placeholder="YYYY"
            className="h-14 text-center rounded-card bg-cirkle-input border border-cirkle-border font-body text-[16px] font-semibold text-white placeholder:text-cirkle-text-muted caret-cirkle-yellow outline-none focus:border-cirkle-border-card transition-colors duration-200"
          />
        </div>

        <div className="flex items-start gap-1.5 pt-1">
          <Info size={12} strokeWidth={2} className="text-cirkle-text-muted flex-shrink-0 mt-0.5" />
          <p className="font-body text-[11px] font-normal text-cirkle-text-muted leading-snug">
            Your age will be public, your birthday won&apos;t
          </p>
        </div>
      </div>
    </OnboardingShell>
  );
}

export default Screen1Name;
