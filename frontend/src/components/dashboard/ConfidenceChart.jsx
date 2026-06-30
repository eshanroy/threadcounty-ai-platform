import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

import { TrendingUp } from "lucide-react";
import { motion } from "motion/react";

function ConfidenceChart({ data }) {
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
            Confidence Trend
          </h2>

          <p className="mt-1 text-slate-500">
            AI confidence scores from recent analyses
          </p>
        </div>

        <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
          <TrendingUp size={24} />
        </div>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="confidenceGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#2563eb"
                  stopOpacity={0.35}
                />
                <stop
                  offset="95%"
                  stopColor="#2563eb"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#e2e8f0"
            />

            <XAxis
              dataKey="name"
              tick={{ fill: "#64748b" }}
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              domain={[90, 100]}
              tick={{ fill: "#64748b" }}
              tickLine={false}
              axisLine={false}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "14px",
                border: "none",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            />

            <Area
              type="monotone"
              dataKey="confidence"
              fill="url(#confidenceGradient)"
            />

            <Line
              type="monotone"
              dataKey="confidence"
              stroke="#2563eb"
              strokeWidth={4}
              dot={{
                r: 5,
                fill: "#2563eb",
              }}
              activeDot={{
                r: 8,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default ConfidenceChart;