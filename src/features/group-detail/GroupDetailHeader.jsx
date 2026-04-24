import { MapPin } from 'lucide-react';

export function GroupDetailHeader({ ownerImage, ownerAlt, name, introText }) {
  return (
    <section className="bg-cirkle-black px-4 pt-6 pb-5 flex flex-col items-center text-center border-b border-cirkle-border">

      <div className="w-20 h-20 rounded-full overflow-hidden ring-1 ring-cirkle-border flex-shrink-0">
        <img
          src={ownerImage}
          alt={ownerAlt}
          loading="lazy"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <h2 className="mt-4 font-body text-[22px] font-bold text-white leading-tight">
        {name}
      </h2>

      <p className="mt-2 flex items-center gap-1.5 font-body text-[14px] italic font-normal text-cirkle-yellow">
        <MapPin size={14} strokeWidth={2} className="flex-shrink-0 not-italic" />
        {introText}
      </p>

    </section>
  );
}

export default GroupDetailHeader;
