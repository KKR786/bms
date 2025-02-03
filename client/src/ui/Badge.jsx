import React from 'react';

function Badge({ type }) {
  const getTypeStyles = () => {
    switch (type?.toLowerCase()) {
      case 'in progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-orange-100 text-orange-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'testing':
        return 'bg-red-100 text-red-800';
      case 'out of stock':
        return 'bg-red-100 text-red-800';
      case 'in stock':
        return 'bg-green-100 text-green-800';
      case 'occupied':
        return 'bg-purple-100 text-purple-800';
      case 'available':
        return 'bg-emerald-100 text-emerald-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeStyles()}`}>
      {type}
    </span>
  );
}

export default Badge;