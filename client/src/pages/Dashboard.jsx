import { useState } from "react";

const Dashboard = () => {
  const [billboards, setBillboards] = useState([
    { id: "B001", location: "City Center", status: "Occupied", advertiser: "ABC Corp", nextAvailable: "15 Feb 2025" },
    { id: "B002", location: "Highway 5", status: "Available", advertiser: "-", nextAvailable: "Now" },
    { id: "B003", location: "Mall Road", status: "Occupied", advertiser: "XYZ Ltd", nextAvailable: "1 March 2025" },
  ]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-800 text-white p-5 space-y-4">
        <h2 className="text-xl font-bold">Billboard Manager</h2>
        <nav>
          <ul className="space-y-2">
            <li className="hover:bg-gray-700 p-2 rounded">Dashboard</li>
            <li className="hover:bg-gray-700 p-2 rounded">Billboards</li>
            <li className="hover:bg-gray-700 p-2 rounded">Advertisers</li>
            <li className="hover:bg-gray-700 p-2 rounded">Bookings</li>
            <li className="hover:bg-gray-700 p-2 rounded">Reports</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 shadow rounded-lg">Total Billboards: 50</div>
          <div className="bg-white p-4 shadow rounded-lg">Active Ads: 20</div>
          <div className="bg-white p-4 shadow rounded-lg">Revenue: $5000</div>
        </div>

        {/* Billboard Table */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-bold mb-4">Billboard Status</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2">ID</th>
                <th className="p-2">Location</th>
                <th className="p-2">Status</th>
                <th className="p-2">Advertiser</th>
                <th className="p-2">Next Available</th>
              </tr>
            </thead>
            <tbody>
              {billboards.map((billboard) => (
                <tr key={billboard.id} className="border-b">
                  <td className="p-2">{billboard.id}</td>
                  <td className="p-2">{billboard.location}</td>
                  <td className="p-2">{billboard.status}</td>
                  <td className="p-2">{billboard.advertiser}</td>
                  <td className="p-2">{billboard.nextAvailable}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
