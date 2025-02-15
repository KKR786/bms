import React, { useState } from 'react';
import { 
  Search, 
  Star, 
  Trash, 
  Mail,
  Archive,
  Send,
  AlertCircle,
  Clock,
  ChevronDown,
  Paperclip
} from 'lucide-react';

const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow ${className}`}>
    {children}
  </div>
);

const MessagesPage = () => {
  const [selectedTab, setSelectedTab] = useState('inbox');
  const [selectedMessage, setSelectedMessage] = useState(null);
  
  const messages = [
    {
      id: 1,
      from: "John Smith",
      subject: "Billboard Maintenance Request",
      preview: "The City Center billboard needs immediate maintenance...",
      date: "10:30 AM",
      unread: true,
      starred: false,
      category: "inbox",
      fullMessage: "The City Center billboard needs immediate maintenance. We've noticed some lighting issues during the evening hours. Could you please schedule a maintenance team to check it out? This is affecting our client's advertisement visibility.",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      from: "Sarah Johnson",
      subject: "Contract Renewal",
      preview: "Regarding the upcoming contract renewal for Highway 5...",
      date: "Yesterday",
      unread: false,
      starred: true,
      category: "inbox",
      fullMessage: "Regarding the upcoming contract renewal for Highway 5 billboard, I'd like to discuss some terms. Our client is interested in extending the contract for another year but has some requests for consideration.",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 3,
      from: "Mike Wilson",
      subject: "New Billboard Proposal",
      preview: "I've attached the proposal for the new digital billboard...",
      date: "Feb 10",
      unread: true,
      starred: false,
      category: "inbox",
      fullMessage: "I've attached the proposal for the new digital billboard installation at the mall entrance. The location analysis and projected revenue reports are included. Please review and let me know your thoughts on proceeding with this project.",
      avatar: "/api/placeholder/40/40"
    }
  ];

  const tabs = [
    { id: 'inbox', label: 'Inbox', icon: Mail },
    { id: 'starred', label: 'Starred', icon: Star },
    { id: 'sent', label: 'Sent', icon: Send },
    { id: 'archived', label: 'Archived', icon: Archive }
  ];

  const filteredMessages = messages.filter(message => {
    if (selectedTab === 'starred') return message.starred;
    return message.category === selectedTab;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Messages</h1>
        <p className="text-gray-500 mt-1">Manage your communications</p>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          {/* New Message Button */}
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg mb-6 hover:bg-blue-700 flex items-center justify-center gap-2">
            <Send className="w-4 h-4" />
            <span>New Message</span>
          </button>

          {/* Navigation Tabs */}
          <nav className="space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-sm ${
                    selectedTab === tab.id
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <Card className="flex-1">
          {/* Search Bar */}
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Messages List */}
          <div className="divide-y divide-gray-200">
            {filteredMessages.map((message) => (
              <div
                key={message.id}
                onClick={() => setSelectedMessage(message)}
                className={`p-4 hover:bg-gray-50 cursor-pointer ${
                  message.unread ? 'bg-blue-50' : ''
                } ${selectedMessage?.id === message.id ? 'bg-blue-50' : ''}`}
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={message.avatar}
                    alt={message.from}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-sm font-medium ${
                        message.unread ? 'text-black' : 'text-gray-900'
                      }`}>
                        {message.from}
                      </p>
                      <p className="text-sm text-gray-500">{message.date}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900 mt-1">
                      {message.subject}
                    </p>
                    <p className="text-sm text-gray-500 truncate mt-1">
                      {message.preview}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Message View */}
        {selectedMessage && (
          <Card className="w-1/2 flex-shrink-0">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedMessage.avatar}
                    alt={selectedMessage.from}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-medium">{selectedMessage.from}</h3>
                    <p className="text-sm text-gray-500">{selectedMessage.date}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Star className="w-5 h-5 text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Trash className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
              <h2 className="text-xl font-semibold mb-4">{selectedMessage.subject}</h2>
              <p className="text-gray-600 whitespace-pre-line">{selectedMessage.fullMessage}</p>
              
              {/* Reply Section */}
              <div className="mt-6 pt-6 border-t">
                <div className="bg-gray-50 rounded-lg p-4">
                  <textarea
                    placeholder="Type your reply..."
                    className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                  ></textarea>
                  <div className="flex justify-between items-center mt-4">
                    <button className="p-2 hover:bg-gray-200 rounded-lg">
                      <Paperclip className="w-5 h-5 text-gray-500" />
                    </button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                      Send Reply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default MessagesPage;