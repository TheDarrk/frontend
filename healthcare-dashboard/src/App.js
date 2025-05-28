
import Header from "./components/Header";
import Sidebar from "./components/sidebar";
import DashboardMainContent from "./components/DashboardMainContent";

export default function App() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-auto">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}
