import { MapPin } from 'lucide-react';

export function ExperienceCard({ data }) {
  return (
    <article className="min-w-[280px] w-[280px] flex-shrink-0 snap-start card-dark overflow-hidden cursor-pointer">

      <img
        src={data.image}
        alt={data.title}
        loading="lazy"
        className="w-full h-[220px] object-cover block"
      />

      <div className="p-3">

        <h3 className="font-body text-base font-bold text-white truncate">
          {data.title}
        </h3>

        <p className="mt-1.5 flex items-center gap-1.5 font-body text-xs text-cirkle-text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-cirkle-yellow flex-shrink-0" />
          {data.date}
        </p>

        <p className="mt-1 flex items-center gap-1 font-body text-xs text-cirkle-text-muted">
          <MapPin size={12} strokeWidth={2} className="flex-shrink-0" />
          {data.location}
        </p>

      </div>
    </article>
  );
}

export default ExperienceCard;
