export default function Input({ variant, className = "", ...props }) {
  const variants = {
    text: "ml-4 h-3/4 rounded-sm border-1 border-black bg-white pl-1 outline-none",
    checkbox: "size-4",
    number:
      "ml-4 h-3/4 rounded-sm border-1 border-black bg-white pl-1 outline-none",
    search: "text-sm outline-none",
  };

  return <input className={` ${variants[variant]} ${className}`} {...props} />;
}
