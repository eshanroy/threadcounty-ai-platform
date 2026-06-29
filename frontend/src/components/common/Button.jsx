function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
}) {
  const base =
    "rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:scale-105",

    secondary:
      "bg-white border border-slate-300 hover:border-blue-600 hover:text-blue-600",

    dark:
      "bg-slate-900 hover:bg-slate-800 text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;