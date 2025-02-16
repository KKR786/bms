import { Home, Users, FileText, Calendar, BarChart2 } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-40 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-64`}
    >
      <div className="p-4 flex items-center justify-between mt-14">
        <h2 className="text-xl font-bold">Billboard CRM</h2>
      </div>

      <nav className="mt-8">
        <ul className="space-y-2 px-3">
          {[
            { to: "/", icon: <Home size={20} />, text: "Dashboard" },
            { to: "/allbillboards", icon: <FileText size={20} />, text: "Billboards" },
            { to: "/users", icon: <Users size={20} />, text: "Users" },
            { to: "/bookings", icon: <Calendar size={20} />, text: "Bookings" },
            { to: "/payments", icon: <Calendar size={20} />, text: "Payments" },
            { to: "/reports", icon: <BarChart2 size={20} />, text: "Reports" }
          ].map((item) => (
            <li key={item.to} className="hover:bg-gray-700 rounded-lg cursor-pointer transition-colors duration-300">
              <Link to={item.to} className="flex items-center p-3 space-x-3">
                {item.icon}
                <span>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;