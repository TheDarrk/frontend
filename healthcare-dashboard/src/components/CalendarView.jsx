import { motion } from "framer-motion";
import appointments from "../data/calendarAppointments.jsx";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarView() {
  const today = 15;

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-xl shadow-lg max-w-290 mx-0 border border-gray-100"
    >
      <motion.h3 
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        className="text-xl font-bold mb-6 text-gray-800 flex justify-between items-center"
      >
        October 2021
        <motion.span 
          className="text-sm font-normal text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </motion.span>
      </motion.h3>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 text-center mb-4">
        {weekdays.map((day) => (
          <div 
            key={day} 
            className="py-1 text-sm font-medium text-gray-500 tracking-wider"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Dates grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-7 gap-2 text-center"
      >
        {[...Array(30)].map((_, i) => {
          const day = i + 1;
          const hasAppointment = appointments[day]?.length > 0;
          const isToday = day === today;
          const isWeekend = i % 7 === 0 || i % 7 === 6; // Sun or Sat

          return (
            <motion.div
              key={day}
              variants={item}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 4px 12px rgba(59, 130, 246, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
              className={`
                flex flex-col items-center justify-center rounded-lg
                p-2 cursor-pointer select-none relative
                transition-all duration-200 border
                ${isWeekend ? "bg-gray-50" : "bg-white"}
                ${
                  isToday
                    ? "bg-blue-100 border-blue-400 font-semibold text-blue-700"
                    : "border-gray-200 hover:border-blue-300"
                }
              `}
            >
              {/* Date number */}
              <motion.span 
                className={`
                  z-10 text-sm
                  ${isWeekend && !isToday ? "text-gray-600" : ""}
                  ${hasAppointment ? "font-medium" : ""}
                `}
              >
                {day}
              </motion.span>

              {/* Appointment indicator */}
              {hasAppointment && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.01 }}
                  className="w-full mt-1 space-y-1"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`
                      text-xs px-1 py-0.5 rounded
                      ${isToday ? "bg-blue-200 text-blue-800" : "bg-blue-100 text-blue-600"}
                    `}
                  >
                    {appointments[day][0].split(" ")[0]} 
                    {appointments[day].length > 1 && (
                      <motion.span 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="ml-1 text-blue-500"
                      >
                        +{appointments[day].length - 1}
                      </motion.span>
                    )}
                  </motion.div>
                </motion.div>
              )}

            
              {isToday && (
                <motion.div 
                  className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              )}

              
              {hasAppointment && appointments[day].length > 1 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute z-20 top-full mt-2 w-40 bg-white p-2 rounded-lg shadow-lg border border-gray-200 hidden group-hover:block"
                >
                  <div className="text-xs text-left space-y-1">
                    {appointments[day].map((appt, idx) => (
                      <div key={idx} className="py-1 border-b border-gray-100 last:border-0">
                        {appt}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}