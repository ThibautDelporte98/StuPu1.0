// src/pages/Login.js
import React, { useState, useContext } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { publicFetch } from "../utils/fetch";
import SignUpForm from "../layouts/SignUp";



const Login = () => {
  const authContext = useContext(AuthContext);
  const [firstname,setName] = useState("");
  const [lastname,setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const role = "student"; 

  const submitCredentials = async (e) => {
    e.preventDefault();
  
    // Include the password field here
    const credentials = { email, firstName: firstname, lastName: lastname, password, role };
  
    try {
      const { data } = await publicFetch.post("/signup", credentials); // Make sure this URL matches your server route
      
      // Update auth context state with response data
      authContext.setAuthState(data);
      console.log("User created successfully");
    } catch (error) {
      setLoginError(error.response?.data?.message || "Sign-up failed");
      console.error("Sign-up error:", error);
    }
  };

  return (
    <div className="Login">
      <div className="Login-header">
        <div className="cstm-container">
          {loginError && <p className="error">{loginError}</p>}
          <SignUpForm
            firstName={firstname}
            lastName={lastname}
            email={email} 
            password={password} 
            setName={setName}
            setLastname={setLastname}
            setEmail={setEmail} 
            setPassword={setPassword} 
            onSubmit={submitCredentials} 
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
