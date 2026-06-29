function RecentAnalysisTable({ analyses }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold">
        Recent Analyses
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Weave Type</th>
              <th className="p-4 text-left">Confidence</th>
              <th className="p-4 text-left">Quality</th>
            </tr>
          </thead>

          <tbody>
            {analyses.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-slate-50"
              >
                <td className="p-4">{item.weaveType}</td>
                <td className="p-4">{item.confidence}%</td>
                <td className="p-4">{item.quality}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RecentAnalysisTable;