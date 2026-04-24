import ExperienceCard from './ExperienceCard';
import { EXPERIENCES } from './experiences.data';

export function ExperiencesSection() {
  return (
    <section className="py-12 pl-6 bg-cirkle-black">

      <h2 className="font-display text-section-sm md:text-[32px] text-white uppercase pr-6 mb-6">
        EXPERIENCES NEAR YOU
      </h2>

      <div className="snap-carousel gap-3.5 pr-6">
        {EXPERIENCES.map(exp => (
          <ExperienceCard key={exp.id} data={exp} />
        ))}
      </div>

    </section>
  );
}

export default ExperiencesSection;
