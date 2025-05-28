import { motion } from "framer-motion";

const appointments = [
  { time: '09:00 AM', patient: 'Sarah Johnson', type: 'Follow-up' },
  { time: '10:30 AM', patient: 'Michael Chen', type: 'Consultation' },
  { time: '01:15 PM', patient: 'Emma Williams', type: 'Physical' },
  { time: '03:45 PM', patient: 'Robert Davis', type: 'Vaccination' }
];

export default function UpcomingSchedule() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0, delay: 0 }}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Upcoming Schedule</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View All
        </motion.button>
      </div>
      
      <div className="space-y-4">
        {appointments.map((appt, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index *0 }}
            whileHover={{ 
              backgroundColor: '#F8FAFC',
              borderLeftWidth: '4px',
              borderLeftColor: '#3B82F6'
            }}
            className="p-4 rounded-lg border border-gray-100 transition-all duration-200"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-100 text-blue-800 rounded-lg p-2">
                <ClockIcon />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">{appt.patient}</p>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <span>{appt.time}</span>
                  <span className="mx-2">•</span>
                  <span>{appt.type}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function ClockIcon() {
  return (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  );
}