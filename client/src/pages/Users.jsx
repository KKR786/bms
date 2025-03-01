import React, { useState, useEffect } from 'react';
import Table from '../ui/Table';
import { X } from 'lucide-react'
import { useAuthContext } from '../hooks/useAuth';
import Image from '../ui/Image';

const Users = () => {
  const { user, dispatch } = useAuthContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([]);

  const [newUser, setNewUser] = useState({
    email: '',
    userName: '',
    userType: 'User',
    phone: '',
    password: ''
  });

  useEffect(() => {
    const fetchUsers = async () => {
    const response = await fetch('/api/protected/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
        }
    })
    const json = await response.json()

    if (!response.ok) {
     throw new Error("");
    }
    if (response.ok) {
      setUsers(json);
      dispatch({type: 'GET_USERS', payload: json})
    }
  }
  fetchUsers();
  },[user])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = `U${(users.length + 1).toString().padStart(3, '0')}`;
    setUsers(prev => [...prev, { ...newUser, id }]);
    setNewUser({
      email: '',
      userName: '',
      userType: 'User',
      phone: '',
      password: ''
    });
    setIsModalOpen(false);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setUsers(prev => prev.map(user => 
      user.id === selectedUser.id ? selectedUser : user
    ));
    setIsEditModalOpen(false);
    setSelectedUser(null);
  };

  const headings = ["ID", "Photo", "Email", "UserName", "UserType", "Phone", "Actions"];

  return (
    <div className="px-5 py-6">

      {/* Add User Modal */} 
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isModalOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center p-6 border-b">
            <h3 className="text-xl font-bold">Add New User</h3>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-500 cursor-pointer hover:text-gray-700 text-2xl"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={newUser.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <input
                  type="text"
                  name="userName"
                  value={newUser.userName}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  User Type
                </label>
                <select
                  name="userType"
                  value={newUser.userType}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={newUser.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={newUser.password}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </form>
          </div>

          <div className="border-t p-6">
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit User Modal */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isEditModalOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center p-6 border-b">
            <h3 className="text-xl font-bold">Edit User</h3>
            <button
              onClick={() => setIsEditModalOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>

          {selectedUser && (
            <div className="flex-1 overflow-y-auto p-6">
              <form onSubmit={handleEditSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={selectedUser.email}
                    onChange={handleEditInputChange}
                    className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Username
                  </label>
                  <input
                    type="text"
                    name="userName"
                    value={selectedUser.userName}
                    onChange={handleEditInputChange}
                    className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    User Type
                  </label>
                  <select
                    name="userType"
                    value={selectedUser.userType}
                    onChange={handleEditInputChange}
                    className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={selectedUser.phone}
                    onChange={handleEditInputChange}
                    className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={selectedUser.password}
                    onChange={handleEditInputChange}
                    className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </form>
            </div>
          )}

          <div className="border-t p-6">
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 border rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <Table title="User List" headings={headings}
       button={
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Add New User
        </button>
       }
      >
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user._id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <Image
                src={user?.photo}
                alt={user.name}
                className="w-12 h-12 object-cover"
              />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.userName}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.userType}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phoneNumber}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button 
                className="text-blue-600 hover:text-blue-800 mr-3"
                onClick={() => handleEdit(user)}
              >
                Edit
              </button>
              <button className="text-red-600 hover:text-red-800">Delete</button>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default Users;