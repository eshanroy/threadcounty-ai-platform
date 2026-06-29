import { CheckCircle2 } from "lucide-react";

function InsightsPanel({ insights = [] }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">
      <h2 className="mb-8 text-3xl font-bold">
        AI Insights
      </h2>

      <div className="space-y-4">
        {insights.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5"
          >
            <CheckCircle2
              className="mt-1 text-green-600"
              size={24}
            />

            <p className="text-slate-700">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InsightsPanel;