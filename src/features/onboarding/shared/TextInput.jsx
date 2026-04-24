export function TextInput({ value, onChange, placeholder, type = 'text', ...rest }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full h-14 px-4 rounded-[14px] bg-cirkle-input border border-cirkle-border font-body text-[16px] font-medium text-white placeholder:text-cirkle-text-muted caret-cirkle-yellow outline-none focus:border-cirkle-yellow transition-colors duration-200"
      {...rest}
    />
  );
}

export default TextInput;
