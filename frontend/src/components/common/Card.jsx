function Card({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-3xl
        border border-white/50
        bg-white/70
        backdrop-blur-xl
        shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;