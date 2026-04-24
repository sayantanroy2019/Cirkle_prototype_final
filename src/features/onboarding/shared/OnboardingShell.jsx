import { ArrowLeft } from 'lucide-react';

export function OnboardingShell({ step, total = 6, onBack, onSkip, cta, children }) {
  return (
    <main className="min-h-screen bg-cirkle-black text-white font-body flex flex-col">

      <header className="fixed top-0 left-0 right-0 z-30 h-12 bg-cirkle-black border-b border-cirkle-border flex items-center justify-between px-4">

        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          className="w-9 h-9 flex items-center justify-center text-white hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </button>

        <h1 className="absolute left-1/2 -translate-x-1/2 font-body text-[15px] font-semibold text-white pointer-events-none select-none">
          Create Profile
        </h1>

        <button
          type="button"
          onClick={onSkip}
          className="font-body text-[13px] font-medium text-cirkle-text-muted hover:text-white transition-colors duration-200"
        >
          Skip
        </button>

      </header>

      <div className="pt-16 px-4 pb-2">
        <div
          role="progressbar"
          aria-valuenow={step}
          aria-valuemin={1}
          aria-valuemax={total}
          aria-label="Onboarding progress"
          className="h-1 w-full rounded-full bg-cirkle-border overflow-hidden"
        >
          <div
            className="h-full bg-cirkle-yellow transition-all duration-300"
            style={{ width: `${(step / total) * 100}%` }}
          />
        </div>
        <p className="mt-2 font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-cirkle-text-muted">
          Step {step} of {total} · ~{Math.round((step / total) * 100)}%
        </p>
      </div>

      <section className="flex-1 px-4 pt-6 pb-32 overflow-y-auto md:max-w-[480px] md:mx-auto md:px-0">
        {children}
      </section>

      <footer className="fixed bottom-0 left-0 right-0 z-40 px-4 pt-3 pb-[calc(env(safe-area-inset-bottom)+16px)] bg-cirkle-black/95 backdrop-blur-sm border-t border-cirkle-border">
        <button
          type="button"
          onClick={cta.onClick}
          disabled={cta.disabled}
          className="w-full h-14 rounded-full bg-cirkle-yellow text-cirkle-text-dark font-body text-[14px] font-bold transition-all duration-200 hover:bg-cirkle-yellow-hover disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {cta.label}
        </button>
      </footer>

    </main>
  );
}

export default OnboardingShell;
