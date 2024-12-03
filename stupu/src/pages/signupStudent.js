import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    street: "",
    municipality: "",
    zipCode: "",
    birthPlace: "",
    birthDate: "", // Date string in 'YYYY-MM-DD' format
    university: "",
    major: "",
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
    if (formData.password === "") {
      alert("Password is required");
      return;
    }
    formData.zipCode = Number(formData.zipCode);

    // Log the payload to see the data being sent
    console.log("Payload:", JSON.stringify(formData, null, 2)); // Pretty print the payload

    try {
      // Sending the registration request to the API using fetch
      const response = await fetch(
        "https://stupu-webapp.azurewebsites.net/api/Auth/Register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const textResponse = await response.text();
        console.error("API Error Response:", textResponse);
        throw new Error(textResponse || "Registration failed");
        
      }

      // If the registration is successful, log the response
      const responseData = await response.json();
      console.log("Registration successful", responseData);

      // Handle the response (e.g., save token, redirect, etc.)
    } catch (error) {
      // Handle errors gracefully and show the error to the user
      console.error("Registration failed:", error.message);
      alert(`Registration failed: ${error.message || "Please try again"}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={"firstName"}>First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor={"lastName"}>Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor={"e-mail"}>Email</label>
        <input
          id="e-mail"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="e-mail"
          required
        />
      </div>
      <div>
        <label htmlFor={"password"}>Password</label>
        <input
          id="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor={"street"}>Street</label>
        <input
          id="street"
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor={"municipality"}>Municipality</label>
        <input
          id="municipality"
          type="text"
          name="municipality"
          value={formData.municipality}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor={"zipCode"}>Zip Code</label>
        <input
          id="zipCode"
          type="number"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor={"birthPlace"}>Birth Place</label>
        <input
          id="birthPlace"
          type="text"
          name="birthPlace"
          value={formData.birthPlace}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor={"birthDate"}>Birth Date</label>
        <input
          id="birthDate"
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor={"university"}>University</label>
        <input
          id="university"
          type="text"
          name="university"
          value={formData.university}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor={"major"}>Major</label>
        <input
          id="major"
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
