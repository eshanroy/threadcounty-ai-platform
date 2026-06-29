function HistoryEmpty() {
  return (
    <div className="rounded-3xl bg-white p-16 text-center shadow-lg">
      <h2 className="text-3xl font-bold text-slate-700">
        No Analysis Found
      </h2>

      <p className="mt-4 text-slate-500">
        Upload and analyze a fabric image to see it here.
      </p>
    </div>
  );
}

export default HistoryEmpty;