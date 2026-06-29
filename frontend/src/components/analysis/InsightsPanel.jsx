import { CheckCircle2 } from "lucide-react";

function InsightsPanel({ insights }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg">

      <h2 className="text-3xl font-bold mb-8">
        AI Insights
      </h2>

      <div className="space-y-4">

        {insights.map((item) => (
          <div
            key={item}
            className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5"
          >
            <CheckCircle2
              className="text-green-600 mt-1"
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