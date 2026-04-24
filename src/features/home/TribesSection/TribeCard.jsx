import { MapPin } from 'lucide-react';

export function TribeCard({ data }) {
  return (
    <article className="min-w-[280px] w-[280px] flex-shrink-0 snap-start card-dark p-5 text-center cursor-pointer">

      <img
        src={data.avatar}
        alt={data.name}
        loading="lazy"
        className="w-20 h-20 rounded-full object-cover mx-auto border-2 border-cirkle-border-card"
      />

      <p className="mt-3 font-body text-base font-bold text-white">
        {data.name}, {data.age}
      </p>

      <div className="mt-2 flex flex-wrap gap-1 justify-center">
        {data.interests.map(tag => (
          <span key={tag} className="chip">{tag}</span>
        ))}
      </div>

      <p className="mt-2.5 flex items-center justify-center gap-1 font-body text-[13px] font-medium text-cirkle-yellow">
        <MapPin size={14} strokeWidth={2} className="flex-shrink-0" />
        Going to {data.goingTo}
      </p>

      <button type="button" className="mt-3 w-full btn-small py-2.5">
        Join Group
      </button>

    </article>
  );
}

export default TribeCard;
