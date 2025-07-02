export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
