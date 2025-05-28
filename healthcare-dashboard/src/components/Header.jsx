
import { Bell, Plus } from "lucide-react";
import avtarimg from "/avtar.jpg" 

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm border-b">
      <h1 className="text-2xl font-bold text-blue-700">Healthcare.</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md px-3 py-1 text-sm shadow-sm"
        />
        <Bell className="text-gray-600 w-5 h-5" />
        <div className="flex items-center gap-2">
          <img
            src={avtarimg}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">Dr. Taylor</span>
        </div>
        <button className="p-2 bg-blue-600 text-white rounded-full">
          <Plus size={16} />
        </button>
      </div>
    </header>
  );
}

