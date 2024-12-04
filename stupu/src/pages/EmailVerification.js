import React, { useState, startTransition,useContext } from "react";
import { FetchContext } from "hooks/FetchContext";
import { useNavigate } from "react-router-dom";
import "./EmailVerification.css";
import InputField from "components/inputs/InputField";
import Button from "components/button/Button";
import Loader from "components/loader/Loader";

const EmailVerification = ({ email }) => {
  const { authAxios } = useContext(FetchContext);
  const [code, setCode] = useState("");

  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => navigate("/aanmelden");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await authAxios.post("/api/Auth/EmailVerification", {
        email,
        code,
      });
      console.log("Email verified:", response.data);  
      startTransition(() => {
        setIsVerified(true);
        setErrorMessage("");
      });
    } catch (error) {
      console.error(
        "Verification error:",
        error.response?.data || error.message
      );

      startTransition(() => {
        setErrorMessage(
          error.response?.data?.message || "Verificatie mislukt probeer opnieuw."
        );
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isVerified) {
    return (
      <div className="popup">
        <div className="popup-box">
          <h1>E-mail succesvol geverifieerd! Je kan nu inloggen.</h1>
          <Button
            className="custom-button button-registration button-mobile mt-2"
            type="button"
            text="login in"
            onClick={handleLoginClick}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="popup">
      <h1>Email Verificatie</h1>
      <p>We hebben een verificatiecode naar je e-mail gestuurd: {email}</p>
      {errorMessage && <p className="error-message  mt-2">{errorMessage}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <InputField 
           label={"verificatiecode:"}
           type="email"
           id="email"
           name="email"
           value={email}
          />
          <InputField
            label={"verificatiecode:"}
            type="text"
            id="code"
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <Button className={" mt-1"} type="submit" text="Verifeer" />
      </form>
      {isLoading ? <Loader /> : ""}
    </div>
  );
};

export default EmailVerification;
