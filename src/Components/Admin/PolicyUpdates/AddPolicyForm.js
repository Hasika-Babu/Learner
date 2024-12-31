import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPolicyForm = () => {
  const navigate = useNavigate();
  
  // Define state to store form data
  const [policyData, setPolicyData] = useState({
    title: '',
    description: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPolicyData({
      ...policyData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make an API request to add the policy (assuming you have a backend API)
    try {
      const response = await fetch('/api/policies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(policyData),
      });

      if (response.ok) {
        // Redirect to policy section or another page after success
        navigate('/admin/policy-updates');
      } else {
        console.error('Failed to add policy');
      }
    } catch (error) {
      console.error('Error adding policy:', error);
    }
  };

  return (
    <div>
      <h2>Add New Policy</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Policy Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={policyData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Policy Description</label>
          <textarea
            id="description"
            name="description"
            value={policyData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Policy</button>
      </form>
    </div>
  );
};

export default AddPolicyForm;
