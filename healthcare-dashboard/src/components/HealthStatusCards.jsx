
import { motion } from "framer-motion";
import healthCards from "../data/healthCards";

export default function HealthStatusCards() {
  return (
    <div className="grid grid-cols-1 gap-4">
      {healthCards.map((card, i) => {
        // Determine bar color based on percentage
        const barColor =
          card.percentage <= 40
            ? "bg-red-500"
            : card.percentage <= 70
            ? "bg-yellow-500"
            : "bg-green-500";

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: i * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{
              y: -3,
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
              transition: { duration: 0.2 }
            }}
            className="bg-white p-4 rounded-xl shadow flex flex-col gap-3 border border-gray-100"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{card.icon}</span>
                <div>
                  <h4 className="font-semibold text-gray-700">{card.label}</h4>
                  <p className="text-xs text-gray-500">{card.date}</p>
                </div>
              </div>
              <motion.span
                className={`text-xs px-3 py-1 rounded ${card.color}`}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                {card.status}
              </motion.span>
            </div>

            {/* Health Status Bar */}
            <div className="w-full bg-gray-100 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${card.percentage}%` }}
                transition={{ delay: i * 0.1 + 0.4, duration: 0.8 }}
                className={`h-full rounded-full ${barColor}`}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
