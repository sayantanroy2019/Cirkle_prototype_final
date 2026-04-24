function GroupCard({ group }) {
  return (
    <div className="flex-shrink-0 flex items-center gap-3 bg-cirkle-input border border-cirkle-border rounded-[14px] p-3 min-w-[160px]">

      <div className="flex items-center">
        {group.avatars.slice(0, 3).map((avatar, i) => (
          <img
            key={i}
            src={avatar}
            alt=""
            loading="lazy"
            className="w-8 h-8 rounded-full object-cover border-2 border-cirkle-input"
            style={{ marginLeft: i === 0 ? '0' : '-10px', zIndex: 3 - i }}
          />
        ))}
      </div>

      <div className="flex flex-col min-w-0">
        <span className="font-body text-[13px] font-semibold text-white truncate">
          {group.name}
        </span>
        <span className="font-body text-[11px] font-normal text-cirkle-text-muted">
          {group.members} members
        </span>
      </div>

    </div>
  );
}

export function EventFindYourTribe({ groups }) {
  return (
    <section className="bg-cirkle-black px-4 pt-5 pb-6">
      <div className="bg-cirkle-card border border-cirkle-border-card rounded-[20px] p-4">

        <p className="section-label mb-2">
          FIND YOUR TRIBE
        </p>

        <h3 className="font-body text-[18px] font-bold text-white leading-snug mb-1">
          Join Groups Going to This Event
        </h3>

        <p className="font-body text-[13px] font-normal text-cirkle-text-muted mb-4">
          Connect with people attending this event
        </p>

        <div className="flex gap-3 overflow-x-auto no-scrollbar mb-4">
          {groups.map(group => (
            <GroupCard key={group.id} group={group} />
          ))}
        </div>

        <button type="button" className="w-full btn-primary py-3.5 text-[15px] font-bold">
          Browse Groups
        </button>

      </div>
    </section>
  );
}

export default EventFindYourTribe;
