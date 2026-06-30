import Card from "./Card";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <Card
        className="
          group
          relative
          overflow-hidden
          border
          border-slate-200
          bg-white
          p-8
          transition-all
          duration-300
          hover:border-blue-200
          hover:shadow-2xl
        "
      >
        {/* Background Glow */}
        <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-blue-100 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

        {/* Icon */}
        <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          <Icon size={30} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-900">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-slate-600">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-8 flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3">
          Learn More
          <ArrowUpRight size={18} />
        </div>
      </Card>
    </motion.div>
  );
}

export default FeatureCard;