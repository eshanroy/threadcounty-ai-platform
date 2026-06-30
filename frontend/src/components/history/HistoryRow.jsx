import {
  Eye,
  Trash2,
  Calendar,
  CheckCircle2,
} from "lucide-react";

function confidenceColor(value) {
  if (value >= 98) return "bg-green-100 text-green-700";
  if (value >= 95) return "bg-blue-100 text-blue-700";
  return "bg-yellow-100 text-yellow-700";
}

function HistoryRow({ item }) {
  return (
    <tr className="border-b border-slate-100 transition-all duration-300 hover:bg-slate-50">
      {/* Image */}
      <td className="px-6 py-5">
        <img
          src={item.image}
          alt={item.weaveType}
          className="h-20 w-20 rounded-2xl border border-slate-200 object-cover shadow-sm"
        />
      </td>

      {/* Weave */}
      <td className="px-6 py-5">
        <div>
          <h3 className="font-bold text-slate-900">
            {item.weaveType}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            AI Fabric Analysis
          </p>
        </div>
      </td>

      {/* Confidence */}
      <td className="px-6 py-5">
        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${confidenceColor(
            item.confidence
          )}`}
        >
          {item.confidence}%
        </span>
      </td>

      {/* Date */}
      <td className="px-6 py-5">
        <div className="flex items-center gap-2 text-slate-600">
          <Calendar size={16} />
          {item.date}
        </div>
      </td>

      {/* Actions */}
      <td className="px-6 py-5">
        <div className="flex gap-3">
          <button className="rounded-xl bg-blue-600 p-3 text-white shadow transition hover:scale-105 hover:bg-blue-700">
            <Eye size={18} />
          </button>

          <button className="rounded-xl bg-red-500 p-3 text-white shadow transition hover:scale-105 hover:bg-red-600">
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default HistoryRow;