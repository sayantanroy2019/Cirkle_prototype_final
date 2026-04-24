import { MapPin } from 'lucide-react';

export function EventVenue({ venue }) {
  return (
    <section className="bg-cirkle-black px-4 pt-5 pb-4">

      <h3 className="font-body text-[20px] font-bold text-white mb-3">
        Venue
      </h3>

      <p className="font-body text-[16px] font-bold text-white mb-1">
        {venue.name}
      </p>

      <p className="font-body text-[13px] font-normal text-cirkle-text-muted mb-4">
        {venue.address}
      </p>

      <button
        type="button"
        className="flex items-center gap-2 border border-cirkle-border-card rounded-full px-5 py-2.5 text-white font-body text-[14px] font-medium transition-all duration-200 hover:border-cirkle-yellow hover:text-cirkle-yellow"
      >
        <MapPin size={16} strokeWidth={2} />
        OPEN IN MAPS
      </button>

      <hr className="border-cirkle-border mt-5" />

    </section>
  );
}

export default EventVenue;
