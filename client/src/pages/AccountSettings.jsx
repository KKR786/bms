import React from "react";
import { Lock, Shield, Bell } from "lucide-react";

// Custom Card components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg border shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => <div className="p-6 pb-2">{children}</div>;

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

const CardContent = ({ children }) => (
  <div className="p-6 pt-2">{children}</div>
);

const AccountSettingsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Account Settings</h1>

      <div className="space-y-6">
        {/* Password Change */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <Lock size={18} className="mr-2" /> Change Password
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <input
                type="password"
                placeholder="Current Password"
                className="w-full border rounded-lg p-2"
              />
              <input
                type="password"
                placeholder="New Password"
                className="w-full border rounded-lg p-2"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full border rounded-lg p-2"
              />
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer mt-4">
              Update Password
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
