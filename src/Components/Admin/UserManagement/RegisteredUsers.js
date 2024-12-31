import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RegisteredUsers = () => {
  const [users, setUsers] = useState([]);

  // Fetch registered users from backend
  useEffect(() => {
    axios.get('/api/users')  // Replace with your actual endpoint to get registered users
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  // Handle delete action
  const handleDelete = (userId) => {
    axios.delete(`/api/users/${userId}`)
      .then(() => {
        setUsers(users.filter(user => user._id !== userId));
        alert('User Deleted');
      })
      .catch(error => console.error('Error deleting user:', error));
  };

  // Handle edit action
  const handleEdit = (userId) => {
    // You can implement a modal or redirect to an edit page
    console.log(`Editing user with ID: ${userId}`);
  };

  return (
    <div className="registered-users">
      <h3>Registered Users</h3>
      {users.length === 0 ? (
        <p>No registered users.</p>
      ) : (
        <div className="user-list">
          {users.map(user => (
            <div key={user._id} className="user-card">
              <h4>{user.name}</h4>
              <p>Email: {user.email}</p>
              <button onClick={() => handleEdit(user._id)} className="btn btn-warning">Edit</button>
              <button onClick={() => handleDelete(user._id)} className="btn btn-danger">Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RegisteredUsers;
