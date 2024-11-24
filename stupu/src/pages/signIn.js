import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../hooks/AuthContext";
import { publicFetch } from "../utils/fetch";
import Nav from "layouts/Navigation";
import InputField from "components/common/inputs/InputField";
import PasswordInput from "components/common/inputs/PasswordInput";
import EmailVerification from "./EmailVerification";
import Button from "components/common/button/Button";
import Loader from "components/common/loader/Loader";
import "./SignUp.css";

const SignIn = () => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(null);
  const [succes, setSucces] = useState(false);
  const [loading, setIsLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsLoading(true)
    const credentials = { email, password };
    try {
      const { data } = await publicFetch.post("authenticate", credentials);
    
      // Update auth context state
      authContext.setAuthState(data); 
      setSucces(true)
      setIsLoading(false)
      console.log("Logged in successfully");
    } catch (error) {
      setLoginError(error.response?.data?.message || "Login failed");
      setIsLoading(false)
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
          {succes ? (
            <EmailVerification />
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                className={"mt-2"}
                  type="submit"
                  text="aanmelden"
                  disabled={
                    !email
                  }
                />
              </form>
              { loading ? (<Loader />) : ""}
              <div className="director flex-colomn align-items-center">
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
