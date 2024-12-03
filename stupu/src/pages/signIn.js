import React, { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";
import { publicFetch } from "../utils/fetch";
import Nav from "layouts/Navigation";
import InputField from "components/inputs/InputField";
import PasswordInput from "components/inputs/PasswordInput";
import Button from "components/button/Button";
import Loader from "components/loader/Loader";
import "./SignUp.css";

const SignIn = () => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const passwordRef = useRef(); // Updated to use useRef for password
  const [loginError, setLoginError] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsLoading(true); // Show loading indicator
  
    // Retrieve credentials from form inputs
    const credentials = { 
      userName: email, // Note: API expects "userName", not "username"
      password: passwordRef.current.value // Access password from the ref
    };
  
    try {
      const response = await publicFetch.post("api/Auth/Login", credentials);
  
      // Extract token and username from the response
      const { token, userName } = response.data || {};
  
      if (token && userName) {
        // Save token and username to localStorage and context
        authContext.setAuthState(token, userName);
        localStorage.setItem("token", token);
        localStorage.setItem("userName", userName);
  
        navigate("/dashboard");
        console.log("Logged in successfully");
      } else {
        throw new Error("Token or username not received from server");
      }
    } catch (error) {
      // Display error message
      const errorMessage = error.response?.data?.message || "Login failed";
      setLoginError(errorMessage);
      console.error("Login error:", errorMessage);
    } finally {
      setIsLoading(false); // Hide loading indicator
    }
  };
  
  

  return (
    <>
      <div className="Login">
        <div className="Login-header">
          <div className="cstm-container">
            <Nav />
              <div className="login-box">
                <h1 className="title">Meld u aan!</h1>
                <p className={loginError ? "error-message" : "hide-message"}>
                  {loginError}
                </p>
                <form className="login-form" onSubmit={handleSubmit}>
                  <InputField
                    id="email"
                    label="Email"
                    type="email"
                    value={email}
                    placeholder={"JohnDoe@outlook.be"}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <PasswordInput
                    id="password"
                    label="Wachtwoord"
                    ref={passwordRef} // Pass ref to PasswordInput
                  />
                  <Button
                    className={"mt-2"}
                    type="submit"
                    text="aanmelden"
                    disabled={!email}
                  />
                </form>
                {loading ? <Loader /> : ""}
                <div className="director flex-colomn align-items-center">
                  <p>Heb je nog geen account?</p>
                  <Link to={"/registratie"}>Registreer</Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
