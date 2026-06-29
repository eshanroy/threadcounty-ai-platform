import { Eye, Trash2 } from "lucide-react";

function HistoryRow({ item }) {
  return (
    <tr className="border-b border-slate-200 hover:bg-slate-50 transition">
      <td className="p-4">
        <img
          src={item.image}
          alt={item.weaveType}
          className="h-16 w-16 rounded-xl object-cover"
        />
      </td>

      <td className="p-4 font-semibold">
        {item.weaveType}
      </td>

      <td className="p-4">
        {item.confidence}%
      </td>

      <td className="p-4">
        {item.date}
      </td>

      <td className="p-4">
        <div className="flex gap-2">
          <button className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700">
            <Eye size={18} />
          </button>

          <button className="rounded-lg bg-red-600 p-2 text-white hover:bg-red-700">
            <Trash2 size={18} />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default HistoryRow;