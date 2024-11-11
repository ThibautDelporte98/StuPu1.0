import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";
import { publicFetch } from "../utils/fetch";
import LoginForm from "../layouts/SignIn";
import Nav from "layouts/Navigation";

const Login = () => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();


  const submitCredentials = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const credentials = { email, password };

    try {
      const { data } = await publicFetch.post("authenticate", credentials);
    
      // Update auth context state
      authContext.setAuthState(data); 
      navigate("/")
      console.log("Logged in successfully");
    } catch (error) {
      setLoginError(error.response?.data?.message || "Login failed");
      console.error("Login error:", error);
      console.log(credentials);
    }
  };

  return (
    <>
    <div className="Login">
      <div className="Login-header">
        <div className="cstm-container">
          <Nav />
          {loginError && <p className="error">{loginError}</p>}
          <LoginForm 
            email={email} 
            password={password} 
            setEmail={setEmail} 
            setPassword={setPassword} 
            onSubmit={submitCredentials} 
          />
        </div>
      </div>
    </div>
    </>

  );
};

export default Login;
