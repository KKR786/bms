import { useState } from "react";
import { 
  Home,
  Users,
  FileText,
  Calendar,
  BarChart2,
  Settings,
  LogOut,
  Menu,
  Search,
  Bell,
  Mail
} from 'lucide-react';

import Badge from '../ui/Badge'
import Table from "../ui/Table";

const Dashboard = () => {
  const [billboards, setBillboards] = useState([
    { id: "B001", location: "City Center", status: "Occupied", advertiser: "ABC Corp", nextAvailable: "15 Feb 2025" },
    { id: "B002", location: "Highway 5", status: "Available", advertiser: "-", nextAvailable: "Now" },
    { id: "B003", location: "Mall Road", status: "Occupied", advertiser: "XYZ Ltd", nextAvailable: "1 March 2025" },
  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const headings = [
    "ID", "Location","Status","Advertiser","Next Available","Actions"
  ]

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-all duration-300`}>
        <div className="p-4 flex items-center justify-between">
          {isSidebarOpen && <h2 className="text-xl font-bold">Billboard CRM</h2>}
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-gray-700 rounded-lg"
          >
            <Menu size={20} />
          </button>
        </div>
        
        <nav className="mt-8">
          <ul className="space-y-2 px-3">
            <li className="flex items-center space-x-3 bg-blue-600 text-white p-3 rounded-lg cursor-pointer">
              <Home size={20} />
              {isSidebarOpen && <span>Dashboard</span>}
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded-lg cursor-pointer">
              <FileText size={20} />
              {isSidebarOpen && <span>Billboards</span>}
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded-lg cursor-pointer">
              <Users size={20} />
              {isSidebarOpen && <span>Advertisers</span>}
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded-lg cursor-pointer">
              <Calendar size={20} />
              {isSidebarOpen && <span>Bookings</span>}
            </li>
            <li className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded-lg cursor-pointer">
              <BarChart2 size={20} />
              {isSidebarOpen && <span>Reports</span>}
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-3">
              <h1 className="text-xl font-semibold">Dashboard</h1>
              <div className="text-sm text-gray-500">
                <span>Home</span>
                <span className="mx-2">/</span>
                <span className="text-blue-600">Dashboard</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Bell size={20} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Mail size={20} className="text-gray-600" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <Settings size={20} className="text-gray-600" />
                </button>
                <div className="flex items-center space-x-3 ml-4">
                  <img
                    src="/api/placeholder/40/40"
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                  {isSidebarOpen && (
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-gray-500">Administrator</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Total Billboards</p>
                  <p className="text-2xl font-bold mt-1">50</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="text-blue-600" size={24} />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-green-500">↑ 12%</span>
                <span className="text-gray-500 ml-2">vs last month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Active Ads</p>
                  <p className="text-2xl font-bold mt-1">20</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <BarChart2 className="text-green-600" size={24} />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-green-500">↑ 8%</span>
                <span className="text-gray-500 ml-2">vs last month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <p className="text-2xl font-bold mt-1">$5,000</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="text-purple-600 font-bold text-lg">$</div>
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-green-500">↑ 15%</span>
                <span className="text-gray-500 ml-2">vs last month</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-500">Available Slots</p>
                  <p className="text-2xl font-bold mt-1">30</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Calendar className="text-yellow-600" size={24} />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className="text-red-500">↓ 5%</span>
                <span className="text-gray-500 ml-2">vs last month</span>
              </div>
            </div>
          </div>

          <Table title="Billboard Status" button="Add New Billboard" headings={headings}>
            {billboards.map((billboard) => (
                    <tr key={billboard.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{billboard.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{billboard.location}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <Badge type={billboard.status}/>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{billboard.advertiser}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{billboard.nextAvailable}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                        <button className="text-red-600 hover:text-red-800">Delete</button>
                      </td>
                    </tr>
                ))}
          </Table>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;