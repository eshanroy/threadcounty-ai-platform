import { useNavigate } from "react-router-dom";

function AnalyzeAgainButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/upload")}
      className="rounded-xl border border-slate-300 px-6 py-3 font-semibold hover:bg-slate-100 transition"
    >
      Analyze Another Image
    </button>
  );
}

export default AnalyzeAgainButton;