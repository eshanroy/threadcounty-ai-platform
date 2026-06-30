import { History } from "lucide-react";
import { motion } from "motion/react";
import HistoryRow from "./HistoryRow";

function HistoryTable({ history }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 p-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Analysis History
          </h2>

          <p className="mt-1 text-slate-500">
            Browse your previous AI fabric analyses
          </p>
        </div>

        <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
          <History size={24} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">
                Image
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">
                Weave Type
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">
                Confidence
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">
                Date
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {history.map((item) => (
              <HistoryRow key={item.id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default HistoryTable;