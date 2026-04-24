export function SelectablePillRow({ label, isActive, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full h-14 px-5 rounded-[14px] flex items-center font-body text-[15px] font-semibold transition-all duration-200 border ${
        isActive
          ? 'bg-cirkle-yellow text-cirkle-text-dark border-cirkle-yellow'
          : 'bg-cirkle-input text-white border-cirkle-border hover:border-cirkle-yellow/50'
      }`}
    >
      {label}
    </button>
  );
}

export default SelectablePillRow;
