import React, { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";
import { FetchContext } from "../hooks/FetchContext";
import Nav from "layouts/Navigation";
import InputField from "components/inputs/InputField";
import PasswordInput from "components/inputs/PasswordInput";
import Button from "components/button/Button";
import Loader from "components/loader/Loader";
import "./SignUp.css";
import ResetPassword from "./ResertPwd";

const SignIn = () => {
  const authContext = useContext(AuthContext);
  const { authAxios } = useContext(FetchContext);

  const [email, setEmail] = useState("");
  const [redirectEmail, setRedirectEmail] = useState("");
  const passwordRef = useRef(); // Updated to use useRef for password
  const [loginError, setLoginError] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [resetPwd, setResetPwd] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsLoading(true); // Show loading indicator

    // Retrieve credentials from form inputs
    const credentials = {
      userName: email, // Note: API expects "userName", not "username"
      password: passwordRef.current.value, // Access password from the ref
    };

    try {
      const response = await authAxios.post("api/Auth/Login", credentials);

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


  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError(null);

    try {
      const response = await authAxios.post("/api/Auth/ForgotPassword", {
        email,
      });

      if (response.status === 200) {
        const resetMessage = response.data; // "Password reset link sent."

        console.log(resetMessage)
        setResetPwd(true);
        setRedirectEmail(email);
        console.log("succes");
        console.log(response);

        // setMessage("Password reset link has been sent to your email.");
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (err) {
      setLoginError(
        err.response?.data?.message || "Vul eerst uw email in.."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="Login">
        <div className="Login-header">
          <div className="cstm-container">
            <Nav />
            {resetPwd ? (
              <ResetPassword email={redirectEmail} />
            ) : (
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
                    ref={passwordRef}
                  />
                  <Button
                    className={"mt-2"}
                    type="submit"
                    text="aanmelden"
                    disabled={!email}
                  />
                </form>
                {loading ? <Loader /> : ""}
                <div className="director flex-colomn align-items-center ">
                  <Link onClick={handleForgotPassword}>
                    Wachtwoord vergeten?
                  </Link>
                </div>
                <div className="director flex-colomn align-items-center mt-1">
                  <p>Heb je nog geen account?</p>
                  <Link to={"/registratie"}>Registreer</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
