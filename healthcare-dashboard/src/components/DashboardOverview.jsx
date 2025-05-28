
import { motion } from "framer-motion";
import AnatomySection from "./AnatomySection.jsx";
import HealthStatusCards from "./HealthStatusCards.jsx";

export default function DashboardOverview() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 gap-6"
    >
      <motion.div
        initial={{ x: -20 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        whileHover={{ 
          y: -3,
          transition: { duration: 0.2 }
        }}
      >
        <AnatomySection />
      </motion.div>

      <motion.div
        initial={{ x: 20 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        whileHover={{ 
          y: -3,
          transition: { duration: 0.2 }
        }}
      >
        <HealthStatusCards />
      </motion.div>
    </motion.section>
  );
}