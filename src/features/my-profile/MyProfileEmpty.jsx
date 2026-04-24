import { UserPlus, ArrowRight } from 'lucide-react';

export function MyProfileEmpty({ onCreate }) {
  return (
    <section className="flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-16 md:max-w-[480px] md:mx-auto">

      <div className="w-16 h-16 rounded-full bg-cirkle-card border border-cirkle-border flex items-center justify-center">
        <UserPlus size={28} strokeWidth={2} className="text-cirkle-yellow" />
      </div>

      <h2 className="mt-6 font-display text-[36px] leading-[0.95] uppercase text-white text-center">
        No profile yet
      </h2>

      <p className="mt-2 font-body text-[13px] font-normal text-cirkle-text-muted text-center max-w-[280px]">
        Set up your profile to get matched with tribes and events near you.
      </p>

      <button
        type="button"
        onClick={onCreate}
        className="mt-8 h-12 px-6 rounded-full bg-cirkle-yellow text-cirkle-text-dark font-body text-[14px] font-bold inline-flex items-center gap-2 hover:bg-cirkle-yellow-hover transition-all duration-200"
      >
        Create My Profile
        <ArrowRight size={16} strokeWidth={2.5} />
      </button>

    </section>
  );
}

export default MyProfileEmpty;
