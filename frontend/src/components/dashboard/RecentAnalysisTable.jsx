import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

function qualityColor(quality) {
  switch (quality.toLowerCase()) {
    case "excellent":
      return "bg-green-100 text-green-700";

    case "good":
      return "bg-blue-100 text-blue-700";

    case "average":
      return "bg-yellow-100 text-yellow-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
}

function confidenceColor(value) {
  if (value >= 98)
    return "bg-green-100 text-green-700";

  if (value >= 95)
    return "bg-blue-100 text-blue-700";

  return "bg-yellow-100 text-yellow-700";
}

function RecentAnalysisTable({ analyses }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
    >
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Recent Analyses
          </h2>

          <p className="mt-1 text-slate-500">
            Latest AI fabric inspection results
          </p>

        </div>

        <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
          <CheckCircle2 size={24} />
        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-200 text-left">

              <th className="pb-4 font-semibold text-slate-500">
                Weave Type
              </th>

              <th className="pb-4 font-semibold text-slate-500">
                Confidence
              </th>

              <th className="pb-4 font-semibold text-slate-500">
                Quality
              </th>

            </tr>

          </thead>

          <tbody>

            {analyses.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-100 transition hover:bg-slate-50"
              >
                <td className="py-5 font-semibold text-slate-900">
                  {item.weaveType}
                </td>

                <td className="py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${confidenceColor(
                      item.confidence
                    )}`}
                  >
                    {item.confidence}%
                  </span>

                </td>

                <td className="py-5">

                  <span
                    className={`rounded-full px-3 py-1 text-sm font-semibold ${qualityColor(
                      item.quality
                    )}`}
                  >
                    {item.quality}
                  </span>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </motion.div>
  );
}

export default RecentAnalysisTable;