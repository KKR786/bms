import React from 'react';
import Table from '../ui/Table';

const Users = () => {
  const users = [
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
  ];

  const headings = ["ID", "Email", "UserName", "UserType", "Phone", "Password","Actions"];

  return (
    <div className='px-5'>
      <Table title="User List" button="Add New User" headings={headings}>
        {users.map((user) => (
          <tr key={user.id} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.id}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.userName}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.userType}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.phone}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.password}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
              <button className="text-red-600 hover:text-red-800">Delete</button>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default Users;