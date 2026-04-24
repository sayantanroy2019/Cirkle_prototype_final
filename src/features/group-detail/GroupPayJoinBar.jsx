import { Lock } from 'lucide-react';

export function GroupPayJoinBar({ price }) {
  return (
    <section className="bg-cirkle-black px-4 pt-6 pb-2">

      <div className="bg-cirkle-card border border-cirkle-border rounded-[16px] px-4 py-3 flex items-center justify-between">

        <div>
          <p className="font-body text-[11px] font-semibold text-cirkle-text-muted uppercase tracking-[0.12em]">
            Total
          </p>
          <p className="font-body text-[20px] font-bold text-white leading-tight">
            {price}
          </p>
        </div>

        <button
          type="button"
          className="h-11 px-5 rounded-full bg-cirkle-yellow text-cirkle-text-dark font-body text-[14px] font-bold transition-all duration-200 hover:bg-cirkle-yellow-hover hover:-translate-y-0.5 active:translate-y-0"
        >
          Pay & Join Group
        </button>

      </div>

      <p className="mt-2 flex items-center justify-center gap-1.5 font-body text-[11px] font-normal text-cirkle-text-muted">
        <Lock size={12} strokeWidth={2} className="flex-shrink-0" />
        Secure payment · Instant confirmation
      </p>

    </section>
  );
}

export default GroupPayJoinBar;
