import { motion } from "motion/react";

function SectionTitle({ badge, title, subtitle }) {
  return (
    <motion.div
      className="mx-auto max-w-3xl text-center"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {badge && (
        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold tracking-wide text-blue-700 shadow-sm">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default SectionTitle;