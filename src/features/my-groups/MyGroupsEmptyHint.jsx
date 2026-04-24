export function MyGroupsEmptyHint() {
  return (
    <section className="px-4 mt-8 pb-6">
      <div className="border-t border-cirkle-border pt-6 flex items-center justify-center gap-3 flex-wrap">
        <p className="font-body text-[13px] font-normal text-cirkle-text-muted">
          Looking for more groups?
        </p>
        <button
          type="button"
          className="h-9 px-5 rounded-full bg-cirkle-yellow text-cirkle-text-dark font-body text-[12px] font-bold uppercase tracking-[0.06em] transition-all duration-200 hover:bg-cirkle-yellow-hover hover:-translate-y-0.5 active:translate-y-0"
        >
          Browse Groups
        </button>
      </div>
    </section>
  );
}

export default MyGroupsEmptyHint;
