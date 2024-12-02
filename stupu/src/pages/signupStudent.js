import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    street: '',
    municipality: '',
    zipCode: '',
    birthPlace: '',
    birthDate: '', // Date string in 'YYYY-MM-DD' format
    university: '',
    major: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation (you can add more as needed)
    if (formData.password === '') {
      alert('Password is required');
      return;
    }

    try {
      // Sending the registration request to the API using normal fetch
      const response = await fetch('https://stupu-webapp.azurewebsites.net/api/Auth/Register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const responseData = await response.json();
      console.log('Registration successful', responseData);
      
      // Handle the response (e.g., save token, redirect, etc.)
    } catch (error) {
      console.error('Registration failed', error);
      alert('Registration failed, please try again');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Street</label>
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Municipality</label>
        <input
          type="text"
          name="municipality"
          value={formData.municipality}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Zip Code</label>
        <input
          type="number"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Birth Place</label>
        <input
          type="text"
          name="birthPlace"
          value={formData.birthPlace}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Birth Date</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>University</label>
        <input
          type="text"
          name="university"
          value={formData.university}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Major</label>
        <input
          type="text"
          name="major"
          value={formData.major}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
