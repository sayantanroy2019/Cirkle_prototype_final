import EventCard from './EventCard';
import { EVENTS } from './events.data';

export function PopularEventsGrid({ onEventClick }) {
  return (
    <section className="px-4 pt-4 pb-8">
      <h2 className="font-display text-section-sm text-white uppercase mb-4">
        POPULAR EVENTS
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {EVENTS.map((event) => (
          <EventCard key={event.id} data={event} onClick={() => onEventClick?.(event)} />
        ))}
      </div>
    </section>
  );
}

export default PopularEventsGrid;
