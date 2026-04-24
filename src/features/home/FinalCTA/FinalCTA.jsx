export function FinalCTA({ onCreateProfile }) {
  return (
    <section className="py-20 px-2 md:px-3 bg-cirkle-black text-center overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">

        <h2
          className="font-display text-white uppercase w-full leading-[0.9] whitespace-nowrap"
          style={{ fontSize: '9vw' }}
        >
          READY TO FIND YOUR TRIBE?
        </h2>

        <button type="button" onClick={onCreateProfile} className="mt-8 btn-primary px-10 py-4 text-base">
          Create Profile
        </button>

      </div>
    </section>
  );
}

export default FinalCTA;
