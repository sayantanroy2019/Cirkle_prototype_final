export function JoinedGroupOwnerHeader({ owner }) {
  return (
    <section className="bg-cirkle-black px-4 pt-6 pb-5 flex flex-col items-center text-center border-b border-cirkle-border">

      <div className="w-20 h-20 rounded-full overflow-hidden ring-1 ring-cirkle-border flex-shrink-0">
        <img
          src={owner.image}
          alt={owner.name}
          loading="lazy"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
        <span className="font-body text-[22px] font-bold text-white leading-tight">
          {owner.name}, {owner.age}
        </span>
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-cirkle-yellow text-cirkle-text-dark font-body text-[10px] font-bold uppercase tracking-[0.06em] whitespace-nowrap">
          Group Owner
        </span>
      </div>

      <div className="mt-2.5 flex items-center justify-center gap-2 flex-wrap">
        {owner.interests.map((interest) => (
          <span
            key={interest}
            className="inline-flex items-center px-3 py-1 rounded-full border border-cirkle-border font-body text-[12px] font-medium text-white whitespace-nowrap"
          >
            {interest}
          </span>
        ))}
      </div>

      <p className="mt-2 font-body text-[13px] italic font-normal text-cirkle-yellow">
        Hey, I am going to {owner.goingTo} 📍
      </p>

    </section>
  );
}

export default JoinedGroupOwnerHeader;
