function InfoCard({ title, value }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg border border-slate-100">
      <p className="text-sm text-slate-500">{title}</p>

      <h2 className="mt-3 text-3xl font-black text-slate-900">
        {value}
      </h2>
    </div>
  );
}

export default InfoCard;