export function MyProfileInterests({ interests }) {
  if (!interests || interests.length === 0) return null;

  return (
    <section className="mt-6 px-4 md:max-w-[560px] md:mx-auto md:px-0">
      <h3 className="font-body text-[10px] font-bold uppercase tracking-[0.15em] text-cirkle-yellow">
        Interests
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {interests.map((tag) => (
          <li
            key={tag}
            className="h-8 px-3 rounded-full bg-cirkle-chip inline-flex items-center font-body text-[12px] font-semibold text-white"
          >
            {tag}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MyProfileInterests;
