import { Home, Users, FileText, Calendar, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
    
  return (
    <div className="min-h-screen bg-gray-100" onClick={handleClickOutside}>
    {/* Hamburger Menu Button */}
    <button 
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 cursor-pointer"
    >
      {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
    
    
    
    <aside className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-40 transform transition-transform duration-300 ease-in-out ${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    } w-64`}>
      <div className="p-4 flex items-center justify-between mt-14">
        <h2 className="text-xl font-bold">Billboard CRM</h2>
      </div>

      <nav className="mt-8">
        <ul className="space-y-2 px-3">
          <li className="flex items-center space-x-3 bg-blue-600 text-white p-3 rounded-lg cursor-pointer">
            <Home size={20} />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded-lg cursor-pointer">
            <FileText size={20} />
            <span>Billboards</span>
          </li>
          <Link to="/users" className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded-lg cursor-pointer">
            <Users size={20} />
            <span>Users</span>
          </Link>
          <li className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded-lg cursor-pointer">
            <Calendar size={20} />
            <span>Bookings</span>
          </li>
          <Link to="/payments" className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded-lg cursor-pointer">
            <Calendar size={20} />
            <span>Payments</span>
          </Link>
          <li className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded-lg cursor-pointer">
            <BarChart2 size={20} />
            <span>Reports</span>
          </li>
        </ul>
      </nav>
    </aside>
    </div>
  );
};

export default Sidebar;
