import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PendingRequests = () => {
  const [pendingRequests, setPendingRequests] = useState([]);

  // Fetch pending requests from backend
  useEffect(() => {
    axios.get('/api/users/pending')  // Replace with your actual endpoint
      .then(response => setPendingRequests(response.data))
      .catch(error => console.error('Error fetching pending requests:', error));
  }, []);

  // Handle approve action
  const handleApprove = (userId) => {
    axios.put(`/api/users/approve/${userId}`)
      .then(() => {
        setPendingRequests(pendingRequests.filter(user => user._id !== userId));
        alert('User Approved');
      })
      .catch(error => console.error('Error approving user:', error));
  };

  // Handle reject action
  const handleReject = (userId) => {
    axios.put(`/api/users/reject/${userId}`)
      .then(() => {
        setPendingRequests(pendingRequests.filter(user => user._id !== userId));
        alert('User Rejected');
      })
      .catch(error => console.error('Error rejecting user:', error));
  };

  return (
    <div className="pending-requests">
      <h3>Pending Requests</h3>
      {pendingRequests.length === 0 ? (
        <p>No pending requests.</p>
      ) : (
        <div className="request-cards">
          {pendingRequests.map(user => (
            <div key={user._id} className="user-card">
              <h4>{user.name}</h4>
              <p>Email: {user.email}</p>
              <button onClick={() => handleApprove(user._id)} className="btn btn-success">Approve</button>
              <button onClick={() => handleReject(user._id)} className="btn btn-danger">Reject</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PendingRequests;
