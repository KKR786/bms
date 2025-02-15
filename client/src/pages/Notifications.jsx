import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Bell,
  Mail,
  Users,
  AlertTriangle,
  CheckCircle,
  Info,
  Clock,
  Filter,
  Search,
  Trash2,
  Settings
} from 'lucide-react';



// Custom Card component since we're not using shadcn/ui
const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg border shadow-sm ${className}`}>
    {children}
  </div>
);

const NotificationsPage = () => {
    const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      type: 'alert',
      title: 'System Alert',
      message: 'High server load detected on primary database',
      time: '2 minutes ago',
      read: false,
      priority: 'high'
    },
    {
      id: 2,
      type: 'user',
      title: 'New User Registration',
      message: 'John Doe completed account verification',
      time: '1 hour ago',
      read: true,
      priority: 'medium'
    },
    {
      id: 3,
      type: 'success',
      title: 'Backup Completed',
      message: 'Daily system backup completed successfully',
      time: '3 hours ago',
      read: true,
      priority: 'low'
    },
    {
      id: 4,
      type: 'info',
      title: 'System Update',
      message: 'New version 2.1.0 is available for installation',
      time: '1 day ago',
      read: false,
      priority: 'medium'
    }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'alert':
        return <AlertTriangle className="text-red-500" size={20} />;
      case 'user':
        return <Users className="text-blue-500" size={20} />;
      case 'success':
        return <CheckCircle className="text-green-500" size={20} />;
      case 'info':
        return <Info className="text-purple-500" size={20} />;
      default:
        return <Bell className="text-gray-500" size={20} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Notifications</h1>
          <p className="text-gray-600">Manage and monitor system notifications</p>
        </div>
        <button 
                    onClick={() => navigate("/settings")} 
                    className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer "
                  >
                    <Settings size={20} className="text-gray-600" />
                  </button>
      </div>

      {/* Filters and Search */}
      <Card className="mb-6">
        <div className="p-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              <button
                onClick={() => setSelectedFilter('all')}
                className={`px-4 py-2 rounded-lg ${
                  selectedFilter === 'all'
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedFilter('unread')}
                className={`px-4 py-2 rounded-lg ${
                  selectedFilter === 'unread'
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Unread
              </button>
              <button
                onClick={() => setSelectedFilter('important')}
                className={`px-4 py-2 rounded-lg ${
                  selectedFilter === 'important'
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Important
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search notifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-lg w-full md:w-64"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>
        </div>
      </Card>

      {/* Notifications List */}
      <Card>
        <div className="divide-y">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 hover:bg-gray-50 ${
                !notification.read ? 'bg-blue-50' : ''
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium">{notification.title}</h3>
                      <p className="text-gray-600">{notification.message}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock size={14} className="text-gray-400" />
                        <span className="text-sm text-gray-500">
                          {notification.time}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-gray-600">
          Showing 4 of 24 notifications
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
            Previous
          </button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;