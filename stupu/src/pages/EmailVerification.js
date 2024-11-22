import React, { useState, useContext } from "react";
import { FetchContext } from "hooks/FetchContext";

const EmailVerification = ({ email }) => {
  const { authAxios } = useContext(FetchContext);
  const [code, setCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await authAxios.post("/api/Auth/EmailVerification", { email, code });
      console.log("Email verified:", response.data);
      setIsVerified(true);
    } catch (error) {
      console.error("Verification error:", error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || "Verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isVerified) {
    return <p>Email verified successfully! You can now log in.</p>;
  }

  return (
    <div>
      <h1>Email Verification</h1>
      <p>We’ve sent a verification code to your email: {email}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="code">Verification Code</label>
          <input
            type="text"
            id="code"
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Verifying..." : "Verify"}
        </button>
      </form>
    </div>
  );
};

export default EmailVerification;
