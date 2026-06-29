import { Layers, Ruler, Award, Clock3 } from "lucide-react";

function MetricCard({ icon, title, value }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">

      <div className="flex items-center gap-3 mb-4">
        <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
          {icon}
        </div>

        <p className="text-slate-500 font-medium">
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
    <div className="grid md:grid-cols-2 gap-6">

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

    </div>
  );
}

export default MetricsGrid;