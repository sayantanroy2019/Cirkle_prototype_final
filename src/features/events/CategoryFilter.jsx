import { useState } from 'react';

const CATEGORIES = ['All', 'Music', 'Nightlife', 'Food', 'Outdoor', 'Sports', 'Arts'];

export function CategoryFilter() {
  const [active, setActive] = useState('All');

  return (
    <div className="flex overflow-x-auto scrollbar-hide gap-2 px-4 py-3">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => setActive(cat)}
          className={`flex-shrink-0 px-4 py-1.5 rounded-full font-body text-[13px] font-semibold transition-all duration-200
            ${active === cat
              ? 'bg-cirkle-yellow text-cirkle-text-dark'
              : 'bg-cirkle-chip text-cirkle-text-light hover:bg-cirkle-border'
            }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
