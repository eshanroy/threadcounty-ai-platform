import { motion } from "motion/react";

function ConfidenceGauge({ value }) {
  const radius = 90;
  const stroke = 14;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const offset =
    circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center">

      <svg
        width="220"
        height="220"
        className="-rotate-90"
      >
        <circle
          stroke="#e2e8f0"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <motion.circle
          stroke="#2563eb"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          initial={{
            strokeDashoffset: circumference,
          }}
          animate={{
            strokeDashoffset: offset,
          }}
          transition={{
            duration: 1.6,
          }}
        />
      </svg>

      <div className="-mt-36 text-center">

        <p className="text-slate-500">
          Confidence
        </p>

        <h2 className="text-5xl font-black text-blue-600">
          {value}%
        </h2>

      </div>

    </div>
  );
}

export default ConfidenceGauge;