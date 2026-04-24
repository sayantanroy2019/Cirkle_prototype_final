function PerformerAvatar({ performer }) {
  return (
    <div className="flex flex-col items-center gap-2" style={{ width: 'calc(25% - 8px)' }}>
      <div className="w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-cirkle-border-card flex-shrink-0">
        <img
          src={performer.image}
          alt={performer.name}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <span className="font-body text-[12px] font-medium text-white text-center leading-tight">
        {performer.name}
      </span>
    </div>
  );
}

export function EventLineup({ lineup }) {
  return (
    <section className="bg-cirkle-black px-4 pt-5 pb-4">

      <h3 className="font-body text-[20px] font-bold text-white mb-4">
        Lineup
      </h3>

      <div className="flex items-start justify-between">
        {lineup.map(performer => (
          <PerformerAvatar key={performer.id} performer={performer} />
        ))}
      </div>

      <hr className="border-cirkle-border mt-5" />

    </section>
  );
}

export default EventLineup;
