import { motion } from "framer-motion";
import appointments from "../data/calendarAppointments.jsx";

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarView() {
  const today = 15;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 w-full max-w-full overflow-x-auto"
    >
      <motion.h3
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800 flex flex-col sm:flex-row sm:justify-between sm:items-center"
      >
        October 2021
        <motion.span
          className="text-sm font-normal text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </motion.span>
      </motion.h3>

     
      <div className="grid grid-cols-7 text-center mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-gray-500 tracking-wider">
        {weekdays.map((day) => (
          <div key={day} className="py-1">
            {day}
          </div>
        ))}
      </div>

    
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-7 gap-1 sm:gap-2 text-center"
      >
        {[...Array(30)].map((_, i) => {
          const day = i + 1;
          const hasAppointment = appointments[day]?.length > 0;
          const isToday = day === today;
          const isWeekend = i % 7 === 0 || i % 7 === 6;

          return (
            <motion.div
              key={day}
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`min-w-[42px] sm:min-w-0 flex flex-col items-center justify-start rounded-lg
                p-1 sm:p-2 cursor-pointer select-none relative transition-all duration-200 border
                ${isWeekend ? "bg-gray-50" : "bg-white"}
                ${
                  isToday
                    ? "bg-blue-100 border-blue-400 font-semibold text-blue-700"
                    : "border-gray-200 hover:border-blue-300"
                }`}
            >
              
              <span className={`z-10 text-xs sm:text-sm truncate`}>
                {day}
              </span>

              {/* Appointment indicator */}
              {hasAppointment && (
                <div className="w-full mt-1 flex flex-col gap-0.5 items-center">
                  <div
                    className={`
                      text-[10px] sm:text-xs px-1 py-0.5 rounded truncate max-w-full w-full text-center overflow-hidden
                      ${isToday ? "bg-blue-200 text-blue-800" : "bg-blue-100 text-blue-600"}
                    `}
                    style={{ lineHeight: "1rem" }}
                  >
                    {appointments[day][0].split(" ")[0]}
                    {appointments[day].length > 1 && (
                      <span className="ml-1 text-blue-500">
                        +{appointments[day].length - 1}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Today dot pulse */}
              {isToday && (
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
