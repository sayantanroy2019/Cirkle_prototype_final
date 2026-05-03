import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { useAccessGate } from './AccessGateContext';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function AccessGateOverlay() {
  const { grant } = useAccessGate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const canSubmit = trimmedName.length > 0 && EMAIL_REGEX.test(trimmedEmail);

  function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) {
      setError('Enter your name and a valid email to continue.');
      return;
    }
    grant({ name: trimmedName, email: trimmedEmail });
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-5">
      <div className="absolute inset-0 bg-cirkle-black/70 backdrop-blur-md" />

      <div
        className="relative w-full max-w-[420px] card-dark p-6 md:p-7
                   opacity-0 animate-[fadeUp_0.35s_ease_forwards]"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cirkle-yellow text-cirkle-text-dark">
            <Sparkles size={16} aria-hidden="true" />
          </span>
          <span className="text-cirkle-yellow font-body font-semibold tracking-[0.15em] text-[11px] uppercase">
            Welcome
          </span>
        </div>

        <h2 className="font-display text-[44px] md:text-[52px] leading-[0.92] uppercase text-white">
          Enter Cirkle.
        </h2>
        <p className="mt-2 text-cirkle-text-muted text-[14px]">
          Drop your name and email to unlock the experience.
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3" noValidate>
          <div>
            <label
              htmlFor="ag-name"
              className="block font-body text-[11px] uppercase tracking-[0.15em] text-cirkle-text-muted mb-1.5"
            >
              Name
            </label>
            <input
              id="ag-name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => { setName(e.target.value); setError(''); }}
              placeholder="Your name"
              className="w-full bg-cirkle-input border border-cirkle-border rounded-full
                         px-4 py-3 text-white font-body text-[14px]
                         placeholder:text-cirkle-text-placeholder
                         focus:outline-none focus:border-cirkle-yellow
                         transition-all duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="ag-email"
              className="block font-body text-[11px] uppercase tracking-[0.15em] text-cirkle-text-muted mb-1.5"
            >
              Email
            </label>
            <input
              id="ag-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(''); }}
              placeholder="you@email.com"
              className="w-full bg-cirkle-input border border-cirkle-border rounded-full
                         px-4 py-3 text-white font-body text-[14px]
                         placeholder:text-cirkle-text-placeholder
                         focus:outline-none focus:border-cirkle-yellow
                         transition-all duration-200"
            />
          </div>

          {error && (
            <p role="alert" className="font-body text-[12px] text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={!canSubmit}
            className="btn-primary w-full px-6 py-3.5
                       disabled:opacity-50 disabled:cursor-not-allowed
                       disabled:hover:translate-y-0 disabled:hover:shadow-none
                       disabled:hover:bg-cirkle-yellow"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}

export default AccessGateOverlay;
