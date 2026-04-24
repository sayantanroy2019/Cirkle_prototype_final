import { Quote } from 'lucide-react';

export function MyProfileAbout({ bio, prompt, promptAnswer }) {
  const hasBio = bio && bio.trim().length > 0;
  const hasPrompt = prompt && promptAnswer && promptAnswer.trim().length > 0;

  if (!hasBio && !hasPrompt) return null;

  return (
    <section className="mt-8 px-4 flex flex-col gap-5 md:max-w-[560px] md:mx-auto md:px-0">

      {hasBio && (
        <article className="rounded-card bg-cirkle-card border border-cirkle-border p-5">
          <h3 className="font-body text-[10px] font-bold uppercase tracking-[0.15em] text-cirkle-yellow">
            About
          </h3>
          <p className="mt-3 font-body text-[14px] font-normal text-cirkle-text-light leading-relaxed whitespace-pre-wrap">
            {bio}
          </p>
        </article>
      )}

      {hasPrompt && (
        <article className="rounded-card bg-cirkle-card border border-cirkle-border p-5">
          <div className="flex items-start gap-2">
            <Quote size={14} strokeWidth={2.5} className="text-cirkle-yellow flex-shrink-0 mt-0.5" />
            <h3 className="font-body text-[13px] font-semibold text-cirkle-text-muted">
              {prompt}
            </h3>
          </div>
          <p className="mt-3 font-display text-[22px] leading-[1.1] uppercase text-white tracking-[0.005em]">
            {promptAnswer}
          </p>
        </article>
      )}

    </section>
  );
}

export default MyProfileAbout;
