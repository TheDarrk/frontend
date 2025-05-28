
import navLinks from "../data/navLinks";
import { 
  Home,
  Calendar,
  MessageCircle,
  Settings,
  Clock,
  
  Activity,
 
  HelpCircle,
 
  Thermometer,
} from 'react-feather';

const iconMap = {
  Dashboard: <Home size={18} />,
  Calendar: <Calendar size={18} />,
  Chat: <MessageCircle size={18} />,
  Setting: <Settings size={18} />,
  History: <Clock size={18} />,
  Appointments: <Calendar size={18} />,
  Statistics: <Activity size={18} />,
  Tests: <Thermometer size={18} />, 
  Support: <HelpCircle size={18} />,

};

export default function Sidebar() {
  return (
    <aside className="w-60 h-full bg-blue-50 p-6 shadow-md hidden md:block">
      <h2 className="text-lg font-semibold mb-6 text-blue-700">General</h2>
      <ul className="space-y-4">
        {navLinks.map((link, idx) => (
          <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
            {iconMap[link.label] || <div className="w-4 h-4" />} {link.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}
