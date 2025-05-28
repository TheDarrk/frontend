import Header from './components/Header.jsx';
import Sidebar from './components/sidebar.jsx';
import DashboardMainContent from './components/DashboardMainContent.jsx';

export default function App() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          <DashboardMainContent />
        </main>
      </div>
    </div>
  );
}
