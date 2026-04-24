export function MyProfilePhotoGrid({ photos }) {
  const extras = photos.slice(1).filter(Boolean);
  if (extras.length === 0) return null;

  return (
    <section className="mt-6 px-4 md:max-w-[560px] md:mx-auto md:px-0">
      <h3 className="font-body text-[10px] font-bold uppercase tracking-[0.15em] text-cirkle-yellow">
        More Photos
      </h3>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {extras.map((src, i) => (
          <div key={i} className="relative aspect-square overflow-hidden rounded-card border border-cirkle-border">
            <img
              src={src}
              alt={`Photo ${i + 2}`}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyProfilePhotoGrid;
