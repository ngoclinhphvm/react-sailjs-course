export default function Input({
  value,
  onChange,
  placeholder = "",
  type = "text",
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
      {...props}
    />
  );
}
