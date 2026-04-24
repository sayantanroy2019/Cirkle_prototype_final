export function EventWhosGoing({ attendees }) {
  const visibleNames = attendees.visible.slice(0, 3);

  return (
    <section className="bg-cirkle-black px-4 pt-5 pb-4">

      <div className="flex items-center justify-between mb-1">
        <h3 className="font-body text-[20px] font-bold text-white">
          Who's Going
        </h3>
        <button
          type="button"
          className="font-body text-[14px] font-semibold text-cirkle-yellow hover:text-cirkle-yellow-hover transition-colors duration-200"
        >
          See All
        </button>
      </div>

      <p className="font-body text-[13px] font-normal text-cirkle-text-muted mb-3">
        {attendees.count} attending
      </p>

      <div className="flex items-center mb-2">
        {attendees.visible.map((person, index) => (
          <div
            key={person.id}
            className="w-11 h-11 rounded-full overflow-hidden border-2 border-cirkle-black flex-shrink-0"
            style={{ marginLeft: index === 0 ? '0' : '-12px', zIndex: attendees.visible.length - index }}
          >
            <img
              src={person.image}
              alt={person.name}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        <div
          className="w-11 h-11 rounded-full bg-cirkle-yellow border-2 border-cirkle-black flex items-center justify-center flex-shrink-0"
          style={{ marginLeft: '-12px', zIndex: 0 }}
        >
          <span className="font-body text-[13px] font-bold text-cirkle-text-dark">
            +{attendees.overflow}
          </span>
        </div>
      </div>

      <p className="font-body text-[13px] font-normal text-cirkle-text-muted">
        {visibleNames.map((p, i) => (
          <span key={p.id}>
            <span className="text-white font-medium">{p.name}</span>
            {i < visibleNames.length - 1 ? ', ' : ''}
          </span>
        ))}
        {' '}and {attendees.count - 3} others
      </p>

      <hr className="border-cirkle-border mt-5" />

    </section>
  );
}

export default EventWhosGoing;
