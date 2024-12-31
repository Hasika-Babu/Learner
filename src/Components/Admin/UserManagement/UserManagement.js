import React from 'react';
import PendingRequests from './PendingRequests';
import RegisteredUsers from './RegisteredUsers';

const UserManagement = () => {
  return (
    <div className="user-management">
      <h2>User Management</h2>
      
      {/* Pending Requests Section */}
      <PendingRequests />

      {/* Registered Users Section */}
      <RegisteredUsers />
    </div>
  );
};

export default UserManagement;
