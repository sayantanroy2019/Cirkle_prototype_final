import { useState } from 'react';

export function EventAbout({ about }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-cirkle-black px-4 pt-5 pb-4">

      <h3 className="font-body text-[20px] font-bold text-white mb-3">
        About
      </h3>

      {expanded ? (
        <p className="font-body text-[14px] font-normal text-cirkle-text-muted leading-relaxed">
          {about}
        </p>
      ) : (
        <p className="font-body text-[14px] font-normal text-cirkle-text-muted leading-relaxed line-clamp-4">
          {about}
        </p>
      )}

      <button
        type="button"
        onClick={() => setExpanded(prev => !prev)}
        className="font-body text-[14px] font-semibold text-cirkle-yellow mt-2 hover:text-cirkle-yellow-hover transition-colors duration-200"
      >
        {expanded ? 'Show less' : 'Read more'}
      </button>

      <hr className="border-cirkle-border mt-5" />

    </section>
  );
}

export default EventAbout;
