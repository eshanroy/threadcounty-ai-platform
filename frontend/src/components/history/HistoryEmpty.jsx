import { SearchX } from "lucide-react";
import { Link } from "react-router-dom";

function HistoryEmpty() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-20 text-center shadow-lg">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
        <SearchX
          size={42}
          className="text-blue-600"
        />
      </div>

      <h2 className="mt-8 text-3xl font-black text-slate-900">
        No Analysis Found
      </h2>

      <p className="mx-auto mt-4 max-w-lg text-lg leading-8 text-slate-500">
        Upload a fabric image and run an AI analysis.
        Your reports will automatically appear here.
      </p>

      <Link
        to="/upload"
        className="mt-10 inline-flex rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        Upload Fabric
      </Link>
    </div>
  );
}

export default HistoryEmpty;