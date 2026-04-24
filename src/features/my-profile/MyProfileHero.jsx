import { MapPin, Briefcase } from 'lucide-react';

export function MyProfileHero({ firstName, age, city, occupation, mainPhoto }) {
  const cityShort = city ? city.split(',')[0] : '';

  return (
    <section className="relative w-full">

      <div className="relative w-full aspect-[4/5] max-h-[520px] overflow-hidden">
        {mainPhoto ? (
          <img
            src={mainPhoto}
            alt={`${firstName || 'Your'} profile`}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-cirkle-input flex items-center justify-center font-display text-[96px] text-cirkle-text-muted">
            {firstName?.[0]?.toUpperCase() || '?'}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-cirkle-black via-cirkle-black/40 to-transparent" />
      </div>

      <div className="relative -mt-16 px-4 pb-2 md:max-w-[560px] md:mx-auto md:px-0">
        <h2 className="font-display text-[48px] leading-[0.9] uppercase text-white tracking-[0.005em]">
          {firstName || 'You'}{age ? `, ${age}` : ''}
        </h2>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
          {cityShort && (
            <span className="inline-flex items-center gap-1.5 font-body text-[13px] font-medium text-cirkle-text-light">
              <MapPin size={14} strokeWidth={2} className="text-cirkle-yellow flex-shrink-0" />
              {cityShort}
            </span>
          )}
          {occupation && (
            <span className="inline-flex items-center gap-1.5 font-body text-[13px] font-medium text-cirkle-text-light">
              <Briefcase size={14} strokeWidth={2} className="text-cirkle-yellow flex-shrink-0" />
              {occupation}
            </span>
          )}
        </div>
      </div>

    </section>
  );
}

export default MyProfileHero;
