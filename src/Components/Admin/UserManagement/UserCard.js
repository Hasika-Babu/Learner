import React from 'react';

const UserCard = ({ user, onApprove, onReject, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <h4>{user.name}</h4>
      <p>Email: {user.email}</p>
      {onApprove && <button onClick={() => onApprove(user._id)} className="btn btn-success">Approve</button>}
      {onReject && <button onClick={() => onReject(user._id)} className="btn btn-danger">Reject</button>}
      {onEdit && <button onClick={() => onEdit(user._id)} className="btn btn-warning">Edit</button>}
      {onDelete && <button onClick={() => onDelete(user._id)} className="btn btn-danger">Delete</button>}
    </div>
  );
};

export default UserCard;
