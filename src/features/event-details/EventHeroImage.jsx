import { Share2, Bookmark, MoreHorizontal } from 'lucide-react';

export function EventHeroImage({ image, title }) {
  return (
    <div className="bg-cirkle-black px-4 pt-4 pb-2">
      <div className="relative w-full rounded-[16px] overflow-hidden" style={{ aspectRatio: '4/3' }}>

        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <button type="button" className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:bg-black/70">
            <Share2 size={16} strokeWidth={2} />
          </button>
          <button type="button" className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:bg-black/70">
            <Bookmark size={16} strokeWidth={2} />
          </button>
          <button type="button" className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:bg-black/70">
            <MoreHorizontal size={16} strokeWidth={2} />
          </button>
        </div>

      </div>
    </div>
  );
}

export default EventHeroImage;
