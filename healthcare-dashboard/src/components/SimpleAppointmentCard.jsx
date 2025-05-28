

export default function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
      <span className="text-sm font-medium text-gray-700">{title}</span>
      <span className="text-xs text-gray-500">{time}</span>
    </div>
  );
}