import React, { useState } from 'react';
import Table from '../ui/Table';

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users, setUsers] = useState([
    {
      id: 'U001',
      email: 'john@example.com',
      userName: 'johndoe',
      userType: 'Admin',
      phone: '1234567890',
      password: 'password123'
    },
    {
      id: 'U002',
      email: 'jane@example.com',
      userName: 'janesmith',
      userType: 'User',
      phone: '0987654321',
      password: 'password456'
    },
    {
      id: 'U003',
      email: 'bob@example.com',
      userName: 'bobwilson',
      userType: 'User',
      phone: '1112223333',
      password: 'password789'
    }
  ]);

  const [newUser, setNewUser] = useState({
    email: '',
    userName: '',
    userType: 'User',
    phone: '',
    password: ''
  });

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

  const handleDelete = (userId) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
  };

  const headings = ["ID", "Email", "Username", "User Type", "Phone", "Password", "Actions"];

  const handleAddNewUser = () => {
    setIsModalOpen(true);
  };

  const Modal = ({ isOpen, onClose, title, onSubmit, user, onChange, submitText }) => (
    <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="h-full flex flex-col">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-xl font-bold">{title}</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl">×</button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <form onSubmit={onSubmit} className="space-y-4">
            {['email', 'userName', 'userType', 'phone', 'password'].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.charAt(0).toUpperCase() + field.slice(1).replace('Name', 'name')}
                </label>
                {field === 'userType' ? (
                  <select
                    name={field}
                    value={user[field]}
                    onChange={onChange}
                    className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                  </select>
                ) : (
                  <input
                    type={field === 'email' ? 'email' : field === 'password' ? 'password' : field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    value={user[field]}
                    onChange={onChange}
                    className="w-full p-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                )}
              </div>
            ))}
          </form>
        </div>

        <div className="border-t p-6">
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={onSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              {submitText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="px-5">
      <Table
        title="User List"
        button="Add New User"
        buttonClick={handleAddNewUser} // Added this prop to handle button click
        headings={headings}
      >
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.userName}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.userType}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.password}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button 
                className="text-blue-600 hover:text-blue-800 mr-3"
                onClick={() => handleEdit(user)}
              >
                Edit
              </button>
              <button 
                className="text-red-600 hover:text-red-800"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </Table>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New User"
        onSubmit={handleSubmit}
        user={newUser}
        onChange={handleInputChange}
        submitText="Add User"
      />

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit User"
        onSubmit={handleEditSubmit}
        user={selectedUser || {}}
        onChange={handleEditInputChange}
        submitText="Save Changes"
      />
    </div>
  );
};

export default Users;