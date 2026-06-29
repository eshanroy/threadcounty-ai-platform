import CountUp from "react-countup";
import { Upload, Target, Award, Layers } from "lucide-react";

function Card({ icon, title, value, suffix = "" }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
          {icon}
        </div>

        <p className="font-medium text-slate-500">
          {title}
        </p>
      </div>

      <h2 className="text-4xl font-black text-slate-900">
  {value}
  {suffix}
</h2>
    </div>
  );
}

function StatsCards({ stats }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <Card
        icon={<Upload size={24} />}
        title="Total Uploads"
        value={stats.totalUploads}
      />

      <Card
        icon={<Target size={24} />}
        title="Avg Confidence"
        value={stats.averageConfidence}
        suffix="%"
      />

      <Card
        icon={<Award size={24} />}
        title="Accuracy"
        value={stats.accuracy}
        suffix="%"
      />

      <Card
        icon={<Layers size={24} />}
        title="Weave Types"
        value={stats.weaveTypes}
      />
    </div>
  );
}

export default StatsCards;