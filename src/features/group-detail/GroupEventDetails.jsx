import { Calendar, MapPin } from 'lucide-react';

export function GroupEventDetails({ event }) {
  return (
    <section className="bg-cirkle-black px-4 pt-6 pb-8 border-t border-cirkle-border">

      <p className="font-body text-[10px] font-semibold text-cirkle-yellow uppercase tracking-[0.15em] mb-3">
        EVENT DETAILS
      </p>

      <div className="bg-cirkle-card border border-cirkle-border rounded-card overflow-hidden">

        <div className="flex gap-3 p-3">

          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            className="w-20 h-20 rounded-[8px] object-cover flex-shrink-0"
          />

          <div className="flex-1 min-w-0">

            <h4 className="font-body text-[16px] font-bold text-white leading-tight line-clamp-2">
              {event.title}
            </h4>

            <div className="mt-1.5 flex items-center gap-1.5 font-body text-[12px] text-cirkle-text-muted">
              <Calendar size={12} strokeWidth={2} className="flex-shrink-0" />
              <span>{event.date} · {event.time}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cirkle-yellow flex-shrink-0" />
            </div>

            <div className="mt-1 flex items-center gap-1.5 font-body text-[12px] text-cirkle-text-muted">
              <MapPin size={12} strokeWidth={2} className="flex-shrink-0" />
              <span className="truncate">{event.location}</span>
            </div>

          </div>
        </div>

        <p className="px-3 pb-3 font-body text-[13px] font-normal text-cirkle-text-muted leading-relaxed">
          {event.description}
        </p>

        <div className="px-3 pb-3">
          <button
            type="button"
            className="font-body text-[13px] font-bold text-cirkle-yellow hover:underline transition-colors duration-200 inline-flex items-center gap-1"
          >
            View Full Event →
          </button>
        </div>

      </div>

    </section>
  );
}

export default GroupEventDetails;
