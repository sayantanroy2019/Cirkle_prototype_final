import { Plus, Trash2, Lightbulb } from 'lucide-react';
import OnboardingShell from '../shared/OnboardingShell';
import { useOnboarding } from '../context/OnboardingContext';

const STOCK = [
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80',
  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&q=80',
];

export function Screen3Photos({ onBack, onSkip, onNext }) {
  const { data, update } = useOnboarding();
  const photos = data.photos;

  const pickPhoto = (index) => {
    const updated = [...photos];
    updated[index] = STOCK[index % STOCK.length];
    update({ photos: updated });
  };

  const removePhoto = (index) => {
    const updated = [...photos];
    updated[index] = null;
    update({ photos: updated });
  };

  const valid = photos.filter(Boolean).length >= 2;

  return (
    <OnboardingShell
      step={3}
      onBack={onBack}
      onSkip={onSkip}
      cta={{ label: 'Continue', disabled: !valid, onClick: onNext }}
    >
      <h2 className="font-display text-[36px] leading-[0.95] uppercase text-white text-center">
        Add your photos
      </h2>

      <p className="mt-2 font-body text-[13px] font-normal text-cirkle-text-muted text-center max-w-[280px] mx-auto">
        Add at least 2 photos. First photo is your main profile picture.
      </p>

      <div className="mt-8 grid grid-cols-3 gap-2.5">
        {Array.from({ length: 6 }).map((_, i) => {
          const photo = photos[i];
          return (
            <div key={i} className="relative aspect-square">
              {photo ? (
                <>
                  <img
                    src={photo}
                    alt={`Photo ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-card border border-cirkle-border"
                  />
                  {i === 0 && (
                    <span className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-cirkle-yellow text-cirkle-text-dark font-body text-[10px] font-bold uppercase tracking-wide">
                      Main
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => removePhoto(i)}
                    aria-label="Remove photo"
                    className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-cirkle-black/80 flex items-center justify-center text-white hover:bg-cirkle-black transition-colors duration-200"
                  >
                    <Trash2 size={14} strokeWidth={2} />
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => pickPhoto(i)}
                  className="w-full h-full rounded-card bg-cirkle-input border border-dashed border-cirkle-border-card flex flex-col items-center justify-center gap-1 hover:border-cirkle-yellow hover:bg-cirkle-card transition-all duration-200"
                >
                  <Plus size={24} strokeWidth={2} className="text-cirkle-text-muted" />
                  <span className="font-body text-[11px] font-medium text-cirkle-text-muted">
                    Add Photo
                  </span>
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex items-start gap-1.5">
        <Lightbulb size={14} strokeWidth={2} className="text-cirkle-text-muted flex-shrink-0 mt-0.5" />
        <p className="font-body text-[11px] font-normal text-cirkle-text-muted leading-snug">
          Tips: Use clear, recent photos of yourself
        </p>
      </div>
    </OnboardingShell>
  );
}

export default Screen3Photos;
