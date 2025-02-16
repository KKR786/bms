import { useState } from "react";
import { Bell, Mail, Settings, User, HelpCircle, LogOut } from "lucide-react";
import { useAuthContext } from "../../hooks/useAuth";
import { useLogout } from "../../hooks/useLogout";

const TopBar = ({ isOpen }) => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileClick = (e) => {
    e.stopPropagation();
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div
            className={`${
              isOpen ? "ml-64" : "ml-0"
            } transition-margin duration-300 ease-in-out`}
          >
      <header className="bg-white shadow-sm pl-20">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Left Section - Breadcrumb */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <div className="text-sm text-gray-500">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span className="text-blue-600">Dashboard</span>
            </div>
          </div>

          {/* Right Section - Icons & Profile */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <Bell size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <Mail size={20} className="text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <Settings size={20} className="text-gray-600" />
              </button>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={handleProfileClick}
                  className="flex items-center cursor-pointer space-x-3 hover:bg-gray-100 rounded-lg p-2"
                >
                  <img
                    src={`http://localhost:1111/${user.photo.replace(/\\/g, "/")}`}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.userType}</p>
                  </div>
                </button>

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
                    <button className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center space-x-2 cursor-pointer" onClick={() => logout()}>
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
    </div>
  );
};

export default TopBar;
