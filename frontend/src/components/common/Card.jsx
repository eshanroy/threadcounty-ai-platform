function Card({
  children,
  className = "",
  hover = true,
}) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-slate-200/70
        bg-white/80
        backdrop-blur-xl
        shadow-lg
        transition-all
        duration-300

        ${
          hover
            ? "hover:-translate-y-1 hover:shadow-2xl hover:border-blue-200"
            : ""
        }

        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;