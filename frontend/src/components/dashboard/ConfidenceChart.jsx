import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function ConfidenceChart({ data }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold">
        Confidence Trend
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis domain={[90, 100]} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="confidence"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ConfidenceChart;