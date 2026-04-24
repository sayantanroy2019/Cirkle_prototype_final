import { CalendarDays } from 'lucide-react';

export function GroupCard({ group, onClick }) {
  return (
    <article className="bg-cirkle-card border border-cirkle-border rounded-card overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 group cursor-pointer" onClick={onClick}>

      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={group.ownerImage}
          alt={group.ownerAlt}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="p-3 flex flex-col gap-1.5">

        <h3 className="font-body text-[13px] font-bold text-white leading-tight line-clamp-1">
          {group.eventName}
        </h3>

        <p className="font-body text-[12px] italic font-normal text-cirkle-yellow leading-snug line-clamp-2">
          Hey, I am going to{' '}
          <span className="font-bold">{group.eventName}</span>
        </p>

        <p className="font-body text-[12px] font-medium text-white flex items-center gap-1 flex-wrap">
          {group.boys} Boys, {group.girls} Girls going
          <span className="text-[13px]" role="img" aria-label="male">♂</span>
          <span className="text-[13px]" role="img" aria-label="female">♀</span>
        </p>

        <div className="flex items-center gap-1.5">
          <CalendarDays size={11} strokeWidth={2} className="text-cirkle-text-muted flex-shrink-0" />
          <span className="font-body text-[11px] font-medium text-cirkle-text-muted leading-tight">
            {group.date}
          </span>
        </div>

        <button
          type="button"
          className="w-full mt-1 bg-cirkle-yellow text-cirkle-text-dark font-body text-[12px] font-bold rounded-full py-2 transition-all duration-200 hover:bg-cirkle-yellow-hover hover:-translate-y-0.5 active:translate-y-0"
        >
          Join Group
        </button>

      </div>
    </article>
  );
}

export default GroupCard;
