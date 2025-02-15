import React, { useState } from 'react';
import { 
  BarChart2, 
  Download, 
  Calendar,
  TrendingUp,
  DollarSign,
  Users,
  Filter
} from 'lucide-react';

// Simple Card Component
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>
    {children}
  </div>
);

const ReportsPage = () => {
  // Sample data for visualizations
  const monthlyRevenue = [
    { name: 'Jan', revenue: 45000, percentage: 65 },
    { name: 'Feb', revenue: 52000, percentage: 75 },
    { name: 'Mar', revenue: 48000, percentage: 70 },
    { name: 'Apr', revenue: 61000, percentage: 88 },
    { name: 'May', revenue: 55000, percentage: 80 },
    { name: 'Jun', revenue: 67000, percentage: 97 }
  ];

  const locationPerformance = [
    { location: 'City Center', bookings: 45, revenue: 85000, percentage: 100 },
    { location: 'Highway 5', bookings: 32, revenue: 62000, percentage: 73 },
    { location: 'Mall Road', bookings: 28, revenue: 55000, percentage: 65 },
    { location: 'Business District', bookings: 35, revenue: 70000, percentage: 82 },
    { location: 'Airport Road', bookings: 30, revenue: 58000, percentage: 68 }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
        <p className="text-gray-500 mt-1">View and analyze billboard performance metrics</p>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <div className="p-4 flex flex-wrap gap-4 items-center">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-gray-500" />
            <select className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download className="w-5 h-5" />
            <span>Export Report</span>
          </button>
        </div>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-2xl font-semibold mt-1">$328,500</p>
                <p className="text-sm text-green-600 mt-2">+12.5% from last month</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-semibold mt-1">170</p>
                <p className="text-sm text-green-600 mt-2">+8.2% from last month</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Clients</p>
                <p className="text-2xl font-semibold mt-1">45</p>
                <p className="text-sm text-green-600 mt-2">+5.3% from last month</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Growth Rate</p>
                <p className="text-2xl font-semibold mt-1">+12.5%</p>
                <p className="text-sm text-green-600 mt-2">+2.1% from last month</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Revenue Visualization */}
      <Card className="mb-6">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-6">Monthly Revenue</h3>
          <div className="space-y-4">
            {monthlyRevenue.map((month) => (
              <div key={month.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{month.name}</span>
                  <span className="text-gray-600">${month.revenue.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${month.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Billboard Usage */}
      <Card className="mb-6">
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Billboard Usage</h3>
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      Occupancy Rate
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      75%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div style={{ width: "75%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-center">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-lg font-semibold text-blue-600">32</p>
              <p className="text-sm text-gray-600">Active Billboards</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-lg font-semibold text-gray-600">8</p>
              <p className="text-sm text-gray-600">Available Billboards</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Location Performance Table */}
      <Card>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4">Location Performance</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Bookings</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {locationPerformance.map((location) => (
                  <tr key={location.location}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{location.location}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{location.bookings}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${location.revenue.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                          style={{ width: `${location.percentage}%` }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ReportsPage;