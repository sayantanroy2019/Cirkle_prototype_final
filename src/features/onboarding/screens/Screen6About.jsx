import { useState } from 'react';
import { Briefcase, ChevronDown } from 'lucide-react';
import OnboardingShell from '../shared/OnboardingShell';
import PromptPickerSheet from './PromptPickerSheet';
import { useOnboarding } from '../context/OnboardingContext';

const BIO_MAX = 300;
const PROMPTS = [
  'My perfect Sunday is...',
  "You'll find me at...",
  "I'm weirdly good at...",
  'My simple pleasures...',
  'Two truths and a lie...',
  "I'm looking for someone who...",
];

export function Screen6About({ onBack, onSkip, onNext }) {
  const { data, update } = useOnboarding();
  const { bio, occupation, prompt, promptAnswer } = data;
  const [sheetOpen, setSheetOpen] = useState(false);

  const valid = bio.trim().length >= 10 && occupation && prompt && promptAnswer.trim().length > 0;

  return (
    <>
      <OnboardingShell
        step={6}
        onBack={onBack}
        onSkip={onSkip}
        cta={{ label: 'Create My Profile', disabled: !valid, onClick: onNext }}
      >
        <h2 className="font-display text-[36px] leading-[0.95] uppercase text-white">
          About you
        </h2>

        <p className="mt-2 font-body text-[13px] font-normal text-cirkle-text-muted">
          Tell people what makes you, you
        </p>

        <div className="mt-8 flex flex-col gap-5">

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="font-body text-[10px] font-bold uppercase tracking-[0.12em] text-cirkle-yellow">
                Bio
              </label>
              <span className="font-body text-[11px] font-medium text-cirkle-text-muted">
                {bio.length} / {BIO_MAX}
              </span>
            </div>
            <div className="relative">
              <textarea
                value={bio}
                maxLength={BIO_MAX}
                onChange={(e) => update({ bio: e.target.value })}
                placeholder="Share a bit about yourself..."
                className="w-full h-[120px] p-4 rounded-card bg-cirkle-input border border-cirkle-border font-body text-[14px] font-normal text-white leading-relaxed resize-none placeholder:text-cirkle-text-muted caret-cirkle-yellow outline-none focus:border-cirkle-border-card transition-colors duration-200"
              />
              <span className="absolute bottom-2 right-3 font-body text-[11px] font-medium text-cirkle-text-muted pointer-events-none">
                {bio.length} / {BIO_MAX}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-body text-[10px] font-bold uppercase tracking-[0.12em] text-cirkle-yellow">
              Occupation
            </label>
            <div className="relative">
              <Briefcase size={16} strokeWidth={2} className="absolute left-5 top-1/2 -translate-y-1/2 text-cirkle-text-muted flex-shrink-0" />
              <input
                type="text"
                value={occupation}
                onChange={(e) => update({ occupation: e.target.value })}
                placeholder="What do you do?"
                className="w-full h-14 pl-12 pr-5 rounded-full bg-cirkle-input border border-cirkle-border font-body text-[15px] font-medium text-white placeholder:text-cirkle-text-muted caret-cirkle-yellow outline-none focus:border-cirkle-border-card transition-colors duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-body text-[10px] font-bold uppercase tracking-[0.12em] text-cirkle-yellow">
              A Prompt
            </label>
            <button
              type="button"
              onClick={() => setSheetOpen(true)}
              className="w-full h-14 px-5 rounded-card bg-cirkle-input border border-cirkle-border flex items-center justify-between text-left hover:border-cirkle-border-card transition-colors duration-200"
            >
              <span className={`font-body text-[14px] font-medium truncate ${prompt ? 'text-white' : 'text-cirkle-text-muted'}`}>
                {prompt || 'Pick a prompt...'}
              </span>
              <ChevronDown size={16} strokeWidth={2} className="text-cirkle-text-muted flex-shrink-0" />
            </button>
            <textarea
              value={promptAnswer}
              onChange={(e) => update({ promptAnswer: e.target.value })}
              placeholder="Your answer..."
              className="w-full min-h-[72px] px-5 py-3 rounded-card bg-cirkle-input border border-cirkle-border font-body text-[14px] font-normal text-white leading-relaxed resize-none placeholder:text-cirkle-text-muted caret-cirkle-yellow outline-none focus:border-cirkle-border-card transition-colors duration-200"
            />
          </div>

        </div>
      </OnboardingShell>

      {sheetOpen && (
        <PromptPickerSheet
          prompts={PROMPTS}
          selected={prompt}
          onPick={(p) => { update({ prompt: p }); setSheetOpen(false); }}
          onClose={() => setSheetOpen(false)}
        />
      )}
    </>
  );
}

export default Screen6About;
