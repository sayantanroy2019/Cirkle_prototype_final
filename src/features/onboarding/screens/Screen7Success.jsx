import { useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { useOnboarding } from '../context/OnboardingContext';

export function Screen7Success({ onFinish }) {
  const { data, update } = useOnboarding();
  const { firstName, birthdayYyyy, city, occupation, interests, photos, isComplete } = data;

  useEffect(() => {
    if (!isComplete) update({ isComplete: true });
  }, [isComplete, update]);

  const age = birthdayYyyy ? new Date().getFullYear() - parseInt(birthdayYyyy) : null;
  const mainPhoto = photos.find(Boolean);
  const cityShort = city ? city.split(',')[0] : '';
  const previewInterests = interests.slice(0, 5);

  return (
    <main className="min-h-screen bg-cirkle-black text-white font-body flex flex-col">

      <section className="flex-1 px-4 pt-16 pb-32 flex flex-col items-center md:max-w-[480px] md:mx-auto md:px-0">

        <div className="w-20 h-20 rounded-full bg-cirkle-yellow flex items-center justify-center">
          <Check size={36} strokeWidth={3.5} className="text-cirkle-text-dark" />
        </div>

        <h1 className="mt-6 font-display text-[40px] leading-[0.95] uppercase text-white text-center">
          You&apos;re all set!
        </h1>

        <p className="mt-2 font-body text-[13px] italic font-normal text-cirkle-yellow">
          Welcome to the tribe.
        </p>

        <article className="mt-10 w-full max-w-[360px] bg-cirkle-card rounded-[16px] border border-cirkle-border overflow-hidden">

          {mainPhoto ? (
            <img
              src={mainPhoto}
              alt={`${firstName || 'Your'} profile`}
              loading="lazy"
              className="w-full aspect-square object-cover object-top"
            />
          ) : (
            <div className="w-full aspect-square bg-cirkle-input flex items-center justify-center font-display text-[64px] text-cirkle-text-muted">
              {firstName?.[0]?.toUpperCase() || '?'}
            </div>
          )}

          <div className="p-4">
            <h2 className="font-display text-[28px] leading-none text-white">
              {firstName || 'You'}{age ? `, ${age}` : ''}
            </h2>
            <p className="mt-1 font-body text-[13px] font-normal text-cirkle-text-muted">
              {[cityShort, occupation].filter(Boolean).join(' • ') || 'Profile preview'}
            </p>
            {previewInterests.length > 0 && (
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {previewInterests.map((t) => (
                  <li
                    key={t}
                    className="h-7 px-2.5 rounded-full bg-cirkle-card border border-cirkle-yellow inline-flex items-center font-body text-[11px] font-bold uppercase tracking-wide text-cirkle-yellow"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>

        </article>

      </section>

      <footer className="fixed bottom-0 left-0 right-0 z-40 px-4 pt-3 pb-[calc(env(safe-area-inset-bottom)+16px)] bg-cirkle-black/95 backdrop-blur-sm border-t border-cirkle-border">
        <button
          type="button"
          onClick={onFinish}
          className="w-full h-14 rounded-full bg-cirkle-yellow text-cirkle-text-dark font-body text-[14px] font-bold inline-flex items-center justify-center gap-2 hover:bg-cirkle-yellow-hover transition-all duration-200"
        >
          Start Exploring
          <ArrowRight size={16} strokeWidth={2.5} />
        </button>
      </footer>

    </main>
  );
}

export default Screen7Success;
