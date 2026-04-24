import { MapPin } from 'lucide-react';

export function EventCard({ data, onClick }) {
  return (
    <article className="card-dark overflow-hidden cursor-pointer" onClick={onClick}>
      <img
        src={data.image}
        alt={data.title}
        loading="lazy"
        className="w-full h-[130px] md:h-[200px] object-cover block"
      />
      <div className="p-3">
        <h3 className="font-body text-[13px] font-bold text-white leading-tight truncate">
          {data.title}
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 font-body text-[11px] text-cirkle-text-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-cirkle-yellow flex-shrink-0" />
          {data.date} · {data.time}
        </p>
        <p className="mt-1 flex items-center gap-1 font-body text-[11px] text-cirkle-text-muted">
          <MapPin size={11} strokeWidth={2} className="flex-shrink-0" />
          <span className="truncate">{data.location}</span>
        </p>
      </div>
    </article>
  );
}

export default EventCard;
