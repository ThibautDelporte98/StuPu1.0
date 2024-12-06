import React, { useState, useContext } from "react";
import InputField from "components/inputs/InputField";
import PasswordInput from "components/inputs/PasswordInput";
import { FetchContext } from "../hooks/FetchContext";

const ResetPassword = ({ email }) => {
  const { authAxios } = useContext(FetchContext);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [resetError, setResetError] = useState(null);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResetError(null);
  
    // Get the token and email from the URL query parameters
    const query = new URLSearchParams(window.location.search);
    const token = query.get("token");
    const email = query.get("email");
  
    // Check if the token and email are available
    if (!token || !email) {
      setResetError("Token or email is missing. Please try again.");
      setIsLoading(false);
      return;
    }
  
    if (newPassword !== confirmPassword) {
      setResetError("Passwords do not match.");
      setIsLoading(false);
      return;
    }
  
    try {
      const response = await authAxios.post("/api/Auth/ResetPassword", {
        token,
        email,
        newPassword,
      });
  
      if (response.status === 200) {
        console.log("Password reset successful");
        // Redirect the user or show a success message
      } else {
        throw new Error("Unexpected response status");
      }
    } catch (err) {
      setResetError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-box">
      <h1>Reset Password</h1>
      <form className="login-form" onSubmit={handleResetPassword}>
        <div>
          <InputField
            label={"email:"}
            type="email"
            id="email"
            name="email"
            value={email}
          />
        </div>
        <div>
          <PasswordInput
            id="password"
            label="Nieuw Wachtwoord"
            uniqueName={"password"}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            autoComplete="new-password"
          />
          <PasswordInput
            id="password"
            label="Bevestig nieuw wachtwoord"
            uniqueName={"password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
          />
        </div>
        {resetError && <p>{resetError}</p>}
        <button type="submit" disabled={isLoading}>
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
