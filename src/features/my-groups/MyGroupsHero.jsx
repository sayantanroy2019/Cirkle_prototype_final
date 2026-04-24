export function MyGroupsHero({ groupCount = 3 }) {
  return (
    <section className="bg-cirkle-black px-4 pt-6 pb-0 text-center">
      <h1 className="font-display text-[36px] md:text-[48px] leading-[0.95] uppercase text-white tracking-[0.01em]">
        MY GROUPS
      </h1>
      <p className="mt-2 font-body text-[13px] font-normal text-cirkle-text-muted">
        Groups you&apos;ve joined · {groupCount} active
      </p>
    </section>
  );
}

export default MyGroupsHero;
