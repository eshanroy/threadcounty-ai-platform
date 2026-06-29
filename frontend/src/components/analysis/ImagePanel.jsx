import { motion } from "motion/react";

function ImagePanel({ image }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-white p-6 shadow-lg"
    >
      <h2 className="mb-5 text-2xl font-bold">
        Uploaded Fabric
      </h2>

      <img
        src={image}
        alt="Fabric"
        className="w-full max-h-[500px] rounded-2xl object-contain"
      />
    </motion.div>
  );
}

export default ImagePanel;