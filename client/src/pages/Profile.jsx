import React, { useState } from 'react';
import { useAuthContext } from '../hooks/useAuth';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  Building,
  AlertTriangle,
  BarChart2
} from 'lucide-react';

// Custom Card components to replace shadcn/ui
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg border shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-6 pb-2">{children}</div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

const CardContent = ({ children }) => (
  <div className="p-6 pt-2">{children}</div>
);

// Custom Tabs components to replace shadcn/ui
const TabsContent = ({ value, activeTab, children }) => (
  <div className={`${value === activeTab ? 'block' : 'hidden'}`}>
    {children}
  </div>
);

const TabsTrigger = ({ value, activeTab, onClick, children, className = '' }) => (
  <button
    onClick={() => onClick(value)}
    className={`px-4 py-2 cursor-pointer ${activeTab === value ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600'} ${className}`}
  >
    {children}
  </button>
);

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const { user } = useAuthContext();


  const renderPersonalSection = () => (
    <div className="space-y-6">
      {/* Profile Picture */}
      <div className="relative">
        <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto overflow-hidden">
          <img
            src={`http://localhost:1111/${user.photo.replace(/\\/g, "/")}`}
            alt={user.name}
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white hover:bg-blue-700">
            <Camera size={16} />
          </button>
        </div>
      </div>

      {/* Personal Information Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Full Name</label>
          <div className="flex border rounded-lg p-2 items-center">
            <User size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              value={user.name}
              className="flex-1 outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Full Name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <div className="flex border rounded-lg p-2 items-center">
            <Mail size={18} className="text-gray-400 mr-2" />
            <input
              type="email"
              value={user.email}
              className="flex-1 outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email Address"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Phone</label>
          <div className="flex border rounded-lg p-2 items-center">
            <Phone size={18} className="text-gray-400 mr-2" />
            <input
              type="tel"
              value={user.phone}
              className="flex-1 outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Phone Number"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Address</label>
          <div className="flex border rounded-lg p-2 items-center">
            <MapPin size={18} className="text-gray-400 mr-2" />
            <input
              type="text"
              value={user.address}
              className="flex-1 outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Address"
            />
          </div>
        </div>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Save Changes
      </button>
    </div>
  );

  
  
  
  const renderBusinessSection = () => (
    <div className="space-y-6">
      {/* Business Details */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Building size={18} className="mr-2" /> Business Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Company Name</label>
              <input
                type="text"
                placeholder="Your Company Name"
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Business Registration Number</label>
              <input
                type="text"
                placeholder="Registration Number"
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Website</label>
              <input
                type="url"
                placeholder="https://example.com"
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Industry</label>
              <select className="w-full border rounded-lg p-2">
                <option>Advertising</option>
                <option>Marketing</option>
                <option>Real Estate</option>
                <option>Other</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>
  
      {/* Business Analytics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <BarChart2 size={18} className="mr-2" /> Business Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600">Active Campaigns</p>
              <p className="text-2xl font-bold text-blue-600">12</p>
              <p className="text-xs text-gray-500 mt-1">↑ 8% from last month</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-green-600">$45,250</p>
              <p className="text-xs text-gray-500 mt-1">↑ 12% from last month</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-600">Pending Approvals</p>
              <p className="text-2xl font-bold text-purple-600">5</p>
              <p className="text-xs text-gray-500 mt-1">3 high priority</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
  
  
  
  const renderDeleteAccount = () => (
    <Card className="border-red-200">
      <CardHeader>
        <CardTitle className="text-lg text-red-600 flex items-center">
          <AlertTriangle size={18} className="mr-2" /> Delete Account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-gray-700 mb-2">Before deleting your account, please note:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              <li>All your active campaigns will be cancelled</li>
              <li>Your billing history will be archived</li>
              <li>Your data cannot be recovered once deleted</li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" id="confirm-delete" />
              <label htmlFor="confirm-delete" className="text-sm text-gray-600">
                I understand that this action cannot be undone
              </label>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 w-full">
              Request Account Deletion
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );



  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="flex space-x-2 border-b">
          <TabsTrigger value="personal" activeTab={activeTab} onClick={setActiveTab}>
            Personal Info
          </TabsTrigger>
         
          
          {user.role === 'vendor' &&
            <TabsTrigger value="business" activeTab={activeTab} onClick={setActiveTab}>
              Business Profile
            </TabsTrigger>
          }
        
          <TabsTrigger value="delete" activeTab={activeTab} onClick={setActiveTab}>
            Delete Account
          </TabsTrigger>
        </div>

        <TabsContent value="personal" activeTab={activeTab}>
          {renderPersonalSection()}
        </TabsContent>
        
       

      

        <TabsContent value="business" activeTab={activeTab}>
          {renderBusinessSection()}
        </TabsContent>

        

        <TabsContent value="delete" activeTab={activeTab}>
          {renderDeleteAccount()}
        </TabsContent>
      </div>
    </div>
  );
};

export default ProfilePage;