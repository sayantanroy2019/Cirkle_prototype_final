import { Users, CalendarDays } from 'lucide-react';
import AvatarStack from './AvatarStack';

export function MyGroupCard({ group, onClick }) {
  return (
    <article className="bg-cirkle-card border border-cirkle-border rounded-[16px] p-4 transition-transform duration-200 hover:-translate-y-0.5">

      <div className="flex items-start gap-3">

        <AvatarStack avatars={group.avatars} />

        <div className="flex-1 min-w-0">

          <div className="flex items-start justify-between gap-2">
            <h3 className="font-body text-[16px] font-bold text-white leading-tight flex-1 min-w-0">
              {group.eventName}
            </h3>
            <span className="flex-shrink-0 inline-flex items-center px-2.5 py-1 rounded-full bg-cirkle-yellow text-cirkle-text-dark font-body text-[10px] font-bold uppercase tracking-[0.06em] whitespace-nowrap">
              {group.status}
            </span>
          </div>

          <p className="mt-1 font-body text-[13px] font-semibold text-cirkle-yellow">
            {group.groupOwner}
          </p>

          <div className="mt-1.5 flex items-center gap-1.5 font-body text-[12px] font-medium text-white">
            <Users size={14} strokeWidth={2} className="text-cirkle-text-muted flex-shrink-0" />
            {group.boys} Boys, {group.girls} Girls
          </div>

          <div className="mt-1 flex items-center gap-1.5 font-body text-[12px] font-normal text-cirkle-text-muted">
            <CalendarDays size={14} strokeWidth={2} className="flex-shrink-0" />
            <span>{group.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cirkle-yellow flex-shrink-0" />
          </div>

        </div>
      </div>

      <button
        type="button"
        onClick={onClick}
        className="mt-4 w-full h-10 rounded-full bg-transparent border border-cirkle-border-card text-white font-body text-[13px] font-semibold transition-all duration-200 hover:border-cirkle-yellow hover:text-cirkle-yellow active:scale-[0.98]"
      >
        Chat with Group
      </button>

    </article>
  );
}

export default MyGroupCard;
