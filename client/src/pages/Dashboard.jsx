import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Home,
  Users,
  FileText,
  Calendar,
  BarChart2,
  Settings,
  LogOut,
  Menu,
  Bell,
  Mail,
  User,
  HelpCircle,
  X,
  MapPin,
  DollarSign,
  TrendingUp,
  LayoutDashboard
} from 'lucide-react';

import Badge from '../ui/Badge'
import Table from "../ui/Table";

const Dashboard = () => {
  const [billboards, setBillboards] = useState([
    { id: "B001", location: "City Center", status: "Occupied", advertiser: "ABC Corp", nextAvailable: "15 Feb 2025" },
    { id: "B002", location: "Highway 5", status: "Available", advertiser: "-", nextAvailable: "Now" },
    { id: "B003", location: "Mall Road", status: "Occupied", advertiser: "XYZ Ltd", nextAvailable: "1 March 2025" },
  ]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const headings = [
    "ID", "Location", "Status", "Advertiser", "Next Available", "Actions"
  ];

  const handleProfileClick = (e) => {
    e.stopPropagation();
    setIsProfileOpen(!isProfileOpen);
  };

  const handleClickOutside = () => {
    if (isProfileOpen) {
      setIsProfileOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100" onClick={handleClickOutside}>
      {/* Hamburger Menu Button */}
      <button 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 cursor-pointer"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-40 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } w-64`}>
        <div className="p-4 flex items-center justify-between mt-14">
          <h2 className="text-xl font-bold">Billboard CRM</h2>
        </div>
        
        <nav className="mt-8 ">
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
             

            <Link   to="/payments"  className="flex items-center space-x-3 hover:bg-gray-700 p-3 rounded-lg cursor-pointer">
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

      {/* Main Content Wrapper */}
      <div className={`${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-margin duration-300 ease-in-out`}>
        {/* Main Content */}
        <div className="flex-1 ">
          {/* Top Navigation */}
          <header className="bg-white shadow-sm pl-20 ">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center space-x-3 cursor-pointer">
                <h1 className="text-xl font-semibold">Dashboard</h1>
                <div className="text-sm text-gray-500">
                  <span>Home</span>
                  <span className="mx-2">/</span>
                  <span className="text-blue-600">Dashboard</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
               
                
                <div className="flex items-center space-x-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Bell size={20} className="text-gray-600 cursor-pointer" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <Mail size={20} className="text-gray-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                    <Settings size={20} className="text-gray-600" />
                  </button>
                  <div className="relative cursor-pointer">
                    <button 
                      onClick={handleProfileClick}
                      className="flex items-center space-x-3 hover:bg-gray-100 rounded-lg p-1"
                    >
                      <img
                        src="/api/placeholder/40/40"
                        alt="Profile"
                        className="w-10 h-10 rounded-full cursor-pointer"
                      />
                      <div>
                        <p className="text-sm font-medium cursor-pointer" >John Doe</p>
                        <p className="text-xs text-gray-500">Administrator</p>
                      </div>
                    </button>

                    {/* Profile Dropdown */}
                    {isProfileOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200">
                        <a href="/profile" className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
                          <User size={16} />
                          <span>My Profile</span>
                        </a>
                        <a href="/settings" className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2">
                          <Settings size={16} />
                          <span>Settings</span>
                        </a>
                        <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
                          <HelpCircle size={16} />
                          <span>Help Center</span>
                        </button>
                        <hr className="my-1 border-gray-200" />
                        <button className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer">
                          <LogOut size={16} />
                          <span>Sign Out</span>
                        </button>
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
              {/* Summary Cards content */}
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

            <Table title="Billboard Status" button="Add New Billboard " headings={headings}>
              {billboards.map((billboard) => (
                <tr key={billboard.id} className="hover:bg-gray-50 cursor-pointer">
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

            {/* New Feature Cards Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Dashboard Overview */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <LayoutDashboard className="text-blue-600" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">Dashboard Overview</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">Quick access to booked billboards, active campaigns, and payments</p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    20 Active Campaigns
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    15 Booked Billboards
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
                    5 Pending Payments
                  </li>
                </ul>
              </div>

                {/* Browse Billboards */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <MapPin className="text-purple-600" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">Browse Billboards</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">Find and filter available billboard locations</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Available Locations</span>
                    <span className="font-medium">15</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Price Range</span>
                    <span className="font-medium">$500 - $2,500</span>
                  </div>
                  <button className="w-full mt-2 bg-purple-50 text-purple-600 py-2 rounded-lg text-sm hover:bg-purple-100">
                    Browse All
                  </button>
                </div>
              </div>

              {/* Book & Manage Ads */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Calendar className="text-green-600" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">Book & Manage Ads</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">Schedule and manage your advertising campaigns</p>
                <div className="space-y-3">
                  <button className="w-full bg-green-50 text-green-600 py-2 rounded-lg text-sm hover:bg-green-100">
                    Create New Campaign
                  </button>
                  <button className="w-full bg-gray-50 text-gray-600 py-2 rounded-lg text-sm hover:bg-gray-100">
                    Manage Existing
                  </button>
                </div>
              </div>

              {/* Payments & Invoices */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                    <DollarSign className="text-yellow-600" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">Payments & Invoices</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">Manage payments and view billing history</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Outstanding</span>
                    <span className="font-medium">$1,250</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Next Due</span>
                    <span className="font-medium">Feb 15, 2025</span>
                  </div>
                  <button className="w-full bg-yellow-50 text-yellow-600 py-2 rounded-lg text-sm hover:bg-yellow-100">
                    View All Invoices
                  </button>
                </div>
              </div>

              {/* Ad Performance Analytics */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                    <TrendingUp className="text-red-600" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">Ad Performance Analytics</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">Track your campaign performance metrics</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Total Impressions</span>
                    <span className="font-medium">125K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Engagement Rate</span>
                    <span className="font-medium">4.8%</span>
                  </div>
                  <button className="w-full bg-red-50 text-red-600 py-2 rounded-lg text-sm hover:bg-red-100">
                    View Full Report
                  </button>
                </div>
              </div>
              
                {/* Billboard Owner Features */}
            <div className="grid w-full gap-6">
              {/* Dashboard Overview */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <LayoutDashboard className="text-blue-600" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">Dashboard Overview</h3>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Total Earnings</p>
                      <p className="text-lg font-semibold text-gray-900">$45,250</p>
                      <span className="text-xs text-green-600">↑ 12% vs last month</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Active Billboards</p>
                      <p className="text-lg font-semibold text-gray-900">24</p>
                      <span className="text-xs text-green-600">↑ 2 new this month</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Booked Slots</p>
                      <p className="text-lg font-semibold text-gray-900">18/24</p>
                      <span className="text-xs text-yellow-600">75% occupancy</span>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Pending Bookings</p>
                      <p className="text-lg font-semibold text-gray-900">5</p>
                      <span className="text-xs text-blue-600">Need review</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>

               {/* Manage Billboards */}
               <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                    <MapPin className="text-purple-600" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">Manage Billboards</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Total Locations</span>
                    <span className="font-medium">24 billboards</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Maintenance Due</span>
                    <span className="font-medium text-yellow-600">3 billboards</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <button className="bg-purple-50 text-purple-600 py-2 px-4 rounded-lg text-sm hover:bg-purple-100">
                      Add New
                    </button>
                    <button className="bg-gray-50 text-gray-600 py-2 px-4 rounded-lg text-sm hover:bg-gray-100">
                      View All
                    </button>
                  </div>
                </div>
              </div>

              {/* View Bookings */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Calendar className="text-green-600" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">View Bookings</h3>
                </div>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-3">
                    <p className="text-sm font-medium">ABC Corp</p>
                    <p className="text-xs text-gray-500">City Center - Until Mar 2025</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-3">
                    <p className="text-sm font-medium">XYZ Ltd</p>
                    <p className="text-xs text-gray-500">Highway 5 - Until Apr 2025</p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-3">
                    <p className="text-sm font-medium">123 Industries</p>
                    <p className="text-xs text-gray-500">Mall Road - Pending Approval</p>
                  </div>
                  <button className="w-full bg-green-50 text-green-600 py-2 rounded-lg text-sm hover:bg-green-100 mt-2">
                    View All Bookings
                  </button>
                </div>
              </div>

              {/* Revenue & Transactions */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                    <DollarSign className="text-yellow-600" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">Revenue & Transactions</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-500">Monthly Revenue</span>
                      <span className="text-sm font-medium">$12,450</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    <span className="text-xs text-gray-500">75% of target</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Pending Payments</span>
                      <span className="font-medium text-yellow-600">$3,250</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Last Transaction</span>
                      <span className="font-medium">Feb 8, 2025</span>
                    </div>
                  </div>
                  <button className="w-full bg-yellow-50 text-yellow-600 py-2 rounded-lg text-sm hover:bg-yellow-100 mt-2">
                    View Transaction History
                  </button>
                </div>
              </div>
              
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;