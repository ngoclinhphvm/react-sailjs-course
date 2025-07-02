export default function Button({
  children,
  variant = "default",
  className = "",
  ...props
}) {
  const variants = {
    default:
      "p-2 font-bold rounded-lg text-black uppercase border border-black bg-white",
    "icon-rounded":
      "hidden size-10 items-center justify-center overflow-hidden rounded-full bg-white lg:flex",
    rounded:
      "hidden h-10 w-fit rounded-3xl bg-black px-4 text-sm text-white lg:block",
    icon: "",
  };
  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
