function SectionTitle({ badge, title, subtitle }) {
  return (
    <div className="text-center max-w-3xl mx-auto">

      {badge && (
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-5xl font-black text-slate-900">
        {title}
      </h2>

      <p className="mt-5 text-lg text-slate-600 leading-8">
        {subtitle}
      </p>

    </div>
  );
}

export default SectionTitle;