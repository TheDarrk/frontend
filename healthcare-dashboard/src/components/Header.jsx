import { Bell, Plus } from "lucide-react";
import avtarimg from "/avtar.jpg";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm border-b gap-2 sm:gap-4 flex-wrap">
      <h1 className="text-xl sm:text-2xl font-bold text-blue-700">Healthcare.</h1>

      <div className="flex items-center gap-2 sm:gap-4 ml-auto">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded-md px-2 py-1 text-sm shadow-sm w-28 sm:w-40"
        />
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
