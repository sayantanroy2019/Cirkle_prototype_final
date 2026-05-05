import { useState } from 'react';
import { Sparkles, Clock } from 'lucide-react';
import { saveLead } from '../../lib/leads';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PENDING_KEY = 'cirkle:pending';

function readPending() {
  try {
    const raw = localStorage.getItem(PENDING_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writePending(value) {
  try { localStorage.setItem(PENDING_KEY, JSON.stringify(value)); } catch {}
}

function clearPending() {
  try { localStorage.removeItem(PENDING_KEY); } catch {}
}

export function AccessGateOverlay() {
  const [pending, setPending] = useState(readPending);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const canSubmit =
    !submitting && trimmedName.length > 0 && EMAIL_REGEX.test(trimmedEmail);

  async function handleSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    if (trimmedName.length === 0 || !EMAIL_REGEX.test(trimmedEmail)) {
      setError('Enter your name and a valid email to continue.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      await saveLead({ name: trimmedName, email: trimmedEmail });
      const next = { name: trimmedName, email: trimmedEmail };
      writePending(next);
      setPending(next);
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  function handleUseDifferentEmail() {
    clearPending();
    setPending(null);
    setName('');
    setEmail('');
    setError('');
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-5">
      <div className="absolute inset-0 bg-cirkle-black/70 backdrop-blur-md" />

      <div
        className="relative w-full max-w-[420px] card-dark p-6 md:p-7
                   opacity-0 animate-[fadeUp_0.35s_ease_forwards]"
      >
        {pending ? (
          <PendingView
            name={pending.name}
            email={pending.email}
            onUseDifferentEmail={handleUseDifferentEmail}
          />
        ) : (
          <FormView
            name={name}
            email={email}
            error={error}
            submitting={submitting}
            canSubmit={canSubmit}
            onNameChange={(v) => { setName(v); setError(''); }}
            onEmailChange={(v) => { setEmail(v); setError(''); }}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}

function FormView({
  name, email, error, submitting, canSubmit,
  onNameChange, onEmailChange, onSubmit,
}) {
  return (
    <>
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cirkle-yellow text-cirkle-text-dark">
          <Sparkles size={16} aria-hidden="true" />
        </span>
        <span className="text-cirkle-yellow font-body font-semibold tracking-[0.15em] text-[11px] uppercase">
          Request access
        </span>
      </div>

      <h2 className="font-display text-[44px] md:text-[52px] leading-[0.92] uppercase text-white">
        Enter Cirkle.
      </h2>
      <p className="mt-2 text-cirkle-text-muted text-[14px]">
        Drop your name and email. We review every request and email you a link once you're approved.
      </p>

      <form onSubmit={onSubmit} className="mt-5 space-y-3" noValidate>
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
            onChange={(e) => onNameChange(e.target.value)}
            placeholder="Your name"
            disabled={submitting}
            className="w-full bg-cirkle-input border border-cirkle-border rounded-full
                       px-4 py-3 text-white font-body text-[14px]
                       placeholder:text-cirkle-text-placeholder
                       focus:outline-none focus:border-cirkle-yellow
                       transition-all duration-200 disabled:opacity-60"
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
            onChange={(e) => onEmailChange(e.target.value)}
            placeholder="you@email.com"
            disabled={submitting}
            className="w-full bg-cirkle-input border border-cirkle-border rounded-full
                       px-4 py-3 text-white font-body text-[14px]
                       placeholder:text-cirkle-text-placeholder
                       focus:outline-none focus:border-cirkle-yellow
                       transition-all duration-200 disabled:opacity-60"
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
          {submitting ? 'Sending request…' : 'Request access'}
        </button>
      </form>
    </>
  );
}

function PendingView({ name, email, onUseDifferentEmail }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-4">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cirkle-yellow text-cirkle-text-dark">
          <Clock size={26} aria-hidden="true" />
        </span>
      </div>

      <h2 className="font-display text-[40px] md:text-[48px] leading-[0.92] uppercase text-white">
        Request received.
      </h2>
      <p className="mt-3 text-cirkle-text-light text-[14px] leading-relaxed">
        Thanks{name ? `, ${name}` : ''} — we'll review your request and email{' '}
        <span className="text-white font-semibold break-all">{email}</span>{' '}
        with a link to enter Cirkle.
      </p>
      <p className="mt-3 text-cirkle-text-muted text-[12px]">
        Check your inbox (and spam) once you hear from us. Click the link from the same browser to unlock access.
      </p>

      <button
        type="button"
        onClick={onUseDifferentEmail}
        className="mt-5 font-body text-[13px] text-cirkle-yellow
                   underline-offset-4 hover:underline transition-all duration-200"
      >
        Use a different email
      </button>
    </div>
  );
}

export default AccessGateOverlay;
