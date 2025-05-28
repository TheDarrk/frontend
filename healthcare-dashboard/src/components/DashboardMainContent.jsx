
import { motion } from "framer-motion";
import DashboardOverview from "./DashboardOverview.jsx";
import CalendarView from "./CalendarView.jsx";
import UpcomingSchedule from "./UpcomingSchedule.jsx";
import ActivityFeed from "./ActivityFeed.jsx";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function DashboardMainContent() {
  return (
    <motion.main 
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="p-6 bg-gray-50 min-h-screen space-y-6"
    >
      <motion.div variants={itemVariants}>
        <DashboardOverview />
      </motion.div>

      <motion.div 
        variants={itemVariants}
        whileHover={{ 
          scale: 1.005,
          transition: { duration: 0.3 }
        }}
      >
        <CalendarView />
      </motion.div>

      <motion.div 
        className="grid lg:grid-cols-2 gap-6"
        variants={containerVariants}
      >
        <motion.div 
          variants={itemVariants}
          whileHover={{ 
            y: -5,
            boxShadow: "0 10px 20px rgba(0,0,0,0.03)",
            transition: { duration: 0.3 }
          }}
        >
          <UpcomingSchedule />
        </motion.div>

        <motion.div 
          variants={itemVariants}
          whileHover={{ 
            y: -5,
            boxShadow: "0 10px 20px rgba(0,0,0,0.03)",
            transition: { duration: 0.3 }
          }}
        >
          <ActivityFeed />
        </motion.div>
      </motion.div>

      {/* Subtle decorative elements */}
      <motion.div 
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-100 to-gray-100"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.main>
  );
}