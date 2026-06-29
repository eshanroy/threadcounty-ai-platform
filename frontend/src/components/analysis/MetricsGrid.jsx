import { motion } from "motion/react";
import { Layers, Ruler, Award, Clock3 } from "lucide-react";

function MetricCard({ icon, title, value }) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
          {icon}
        </div>

        <p className="font-medium text-slate-500">
          {title}
        </p>
      </div>

      <h2 className="text-3xl font-black text-slate-900">
        {value}
      </h2>
    </div>
  );
}

function MetricsGrid({ analysis }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="grid gap-6 md:grid-cols-2"
    >
      <MetricCard
        icon={<Layers size={24} />}
        title="Weave Type"
        value={analysis.weaveType}
      />

      <MetricCard
        icon={<Ruler size={24} />}
        title="Thread Density"
        value={analysis.threadDensity}
      />

      <MetricCard
        icon={<Award size={24} />}
        title="Quality"
        value={analysis.quality}
      />

      <MetricCard
        icon={<Clock3 size={24} />}
        title="Processing Time"
        value="0.84 sec"
      />
    </motion.div>
  );
}

export default MetricsGrid;