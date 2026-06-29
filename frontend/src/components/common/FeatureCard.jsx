import Card from "./Card";

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card className="p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
        <Icon className="text-blue-600" size={28} />
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>

    </Card>
  );
}

export default FeatureCard;