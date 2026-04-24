import { MapPin, CalendarDays } from 'lucide-react';

export function EventInfoBlock({ title, location, date, time, price, isLive }) {
  return (
    <div className="bg-cirkle-black px-4 pt-3 pb-4">

      <h2 className="font-body text-[24px] font-bold text-white leading-tight mb-3">
        {title}
      </h2>

      <div className="flex items-center gap-2 mb-2">
        <MapPin size={15} strokeWidth={2} className="text-cirkle-text-muted flex-shrink-0" />
        <span className="font-body text-[14px] font-normal text-cirkle-text-muted">
          {location}
        </span>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <CalendarDays size={15} strokeWidth={2} className="text-cirkle-text-muted flex-shrink-0" />
        <span className="font-body text-[14px] font-normal text-cirkle-text-muted">
          {date} · {time}
        </span>
        {isLive && (
          <span className="w-2 h-2 rounded-full bg-cirkle-yellow flex-shrink-0 ml-1" />
        )}
      </div>

      <hr className="border-cirkle-border mb-4" />

      <div className="flex items-center justify-between bg-cirkle-card border border-cirkle-border-card rounded-[14px] px-4 py-3">
        <span className="font-body text-[18px] font-semibold text-white">
          {price}
        </span>
        <button type="button" className="btn-primary px-6 py-3 text-[15px] font-bold tracking-wide uppercase">
          JOIN THIS EVENT
        </button>
      </div>

    </div>
  );
}

export default EventInfoBlock;
