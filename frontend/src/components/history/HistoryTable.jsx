import HistoryRow from "./HistoryRow";

function HistoryTable({ history }) {
  return (
    <div className="overflow-x-auto rounded-3xl bg-white shadow-lg">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Image</th>
            <th className="p-4 text-left">Weave Type</th>
            <th className="p-4 text-left">Confidence</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {history.map((item) => (
            <HistoryRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryTable;