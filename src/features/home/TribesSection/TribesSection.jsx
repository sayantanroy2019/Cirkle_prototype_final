import TribeCard from './TribeCard';
import { TRIBES } from './tribes.data';

export function TribesSection() {
  return (
    <section className="py-12 pl-6 bg-cirkle-black">

      <h2 className="font-display text-section-sm md:text-[32px] text-white uppercase pr-6 mb-6">
        TRIBES
      </h2>

      <div className="snap-carousel gap-3.5 pr-6">
        {TRIBES.map(tribe => (
          <TribeCard key={tribe.id} data={tribe} />
        ))}
      </div>

    </section>
  );
}

export default TribesSection;
