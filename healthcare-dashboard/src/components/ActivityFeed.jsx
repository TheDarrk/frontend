import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const activityData = [
  { name: 'Mon', appointments: 12, },
  { name: 'Tue', appointments: 19, },
  { name: 'Wed', appointments: 15, },
  { name: 'Thu', appointments: 18, },
  { name: 'Fri', appointments: 10, },
  { name: 'Sat', appointments: 5,  },
  { name: 'Sun', appointments: 7, }
];

const recentActivities = [
  { user: 'Dr. Smith', action: 'added notes to', patient: 'Sarah Johnson', time: '2 mins ago' },
  { user: 'Nurse Lee', action: 'completed checkup for', patient: 'Michael Chen', time: '15 mins ago' },
  { user: 'Admin', action: 'scheduled appointment for', patient: 'Emma Williams', time: '1 hour ago' }
];

export default function ActivityFeed() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Activity Overview</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View Report
        </motion.button>
      </div>

      {/* Chart Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="h-64 mb-6"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={activityData}
            margin={{ top: 5, right: 5, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6B7280', fontSize: 12 }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#6B7280', fontSize: 12 }} 
            />
            <Tooltip 
              contentStyle={{
                borderRadius: '8px',
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
              }}
            />
            <Bar 
              dataKey="appointments" 
              fill="#93C5FD" 
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
            />
            
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Recent Activities List */}
      <div>
        <h4 className="text-md font-medium text-gray-900 mb-3">Recent Activities</h4>
        <div className="space-y-3">
          {recentActivities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ 
                backgroundColor: '#F9FAFB',
                paddingLeft: '12px',
                borderLeft: '3px solid #3B82F6'
              }}
              className="p-2 rounded-md transition-all duration-100"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 rounded-full p-1.5 mt-0.5">
                  <UserIcon />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-800">
                    <span className="text-blue-600">{activity.user}</span> {activity.action} <span className="text-blue-600">{activity.patient}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function UserIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
  );
}