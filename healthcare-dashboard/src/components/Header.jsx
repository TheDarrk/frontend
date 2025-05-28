import { Bell, Plus } from "lucide-react";
import avtarimg from "/avtar.jpg";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between px-4 py-3 bg-white shadow-sm border-b gap-3 sm:gap-4">
      <h1 className="text-xl sm:text-2xl font-bold text-blue-700 w-full sm:w-auto">Healthcare.</h1>

      {/* Search bar takes full width on small screens */}
      <input
        type="text"
        placeholder="Search..."
        className="border rounded-md px-3 py-1 text-sm shadow-sm w-full sm:w-64"
      />

      <div className="flex items-center gap-3 ml-auto">
        <Bell className="text-gray-600 w-5 h-5" />
        <div className="flex items-center gap-2">
          <img
            src={avtarimg}
            alt="User Avatar"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium hidden sm:inline">Dr. Taylor</span>
        </div>
        <button className="p-2 bg-blue-600 text-white rounded-full">
          <Plus size={16} />
        </button>
      </div>
    </header>
  );
}
