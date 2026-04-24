export function Hero({ onCreateProfile }) {
  return (
    <section className="pt-10 md:pt-16 pb-14 md:pb-16 px-2 md:px-3 text-center">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">

        <h1
          className="font-display leading-[0.9] tracking-[-0.01em] text-white uppercase w-full opacity-0 animate-[fadeUp_0.5s_ease_forwards]"
          style={{ fontSize: 'clamp(52px, 19vw, 200px)', animationDelay: '0s' }}
        >
          FIND YOUR CREW.
        </h1>

        <p
          className="mt-5 font-body text-[15px] md:text-[17px] font-normal text-cirkle-text-muted leading-relaxed max-w-[300px] md:whitespace-nowrap md:max-w-none mx-auto opacity-0 animate-[fadeUp_0.5s_ease_forwards]"
          style={{ animationDelay: '0.15s' }}
        >
          Discover experiences, join tribes, meet new people — all in one place.
        </p>

        <div
          className="mt-7 flex items-center justify-center gap-3.5 flex-wrap opacity-0 animate-[fadeUp_0.5s_ease_forwards]"
          style={{ animationDelay: '0.3s' }}
        >
          <button type="button" onClick={onCreateProfile} className="btn-primary px-8 py-3.5">
            Create Profile
          </button>
          <button type="button" className="btn-secondary px-8 py-3.5">
            Create Experiences
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;
