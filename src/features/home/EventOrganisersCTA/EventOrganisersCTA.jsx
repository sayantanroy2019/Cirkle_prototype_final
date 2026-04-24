export function EventOrganisersCTA() {
  return (
    <section className="py-16 px-6 bg-cirkle-black border-t border-cirkle-border text-center">
      <div className="max-w-[480px] mx-auto flex flex-col items-center">

        <p className="font-body text-label font-bold text-cirkle-yellow uppercase tracking-[0.15em]">
          FOR EVENT ORGANISERS
        </p>

        <h2 className="mt-4 font-display text-[28px] md:text-section-md text-white uppercase leading-[0.95]">
          ARE YOU AN EVENT ORGANISER?
        </h2>

        <p className="mt-4 font-body text-[15px] font-normal text-cirkle-text-muted leading-relaxed max-w-[400px]">
          Create unforgettable experiences and connect with your audience on Cirkle.
        </p>

        <button type="button" className="mt-7 btn-primary px-9 py-3.5">
          Create Event
        </button>

      </div>
    </section>
  );
}

export default EventOrganisersCTA;
