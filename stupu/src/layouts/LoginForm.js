// src/pages/LoginForm.js
import React from "react";
import Input from "../components/common/Input";
import "../styles/LoginForm.css";
import Button from "../components/common/Button";
import usePasswordToggler from "../hooks/usePasswordToggler";
import padlock from "../assets/img/padlock.png"
import padlockUnlock from "../assets/img/padlock-unlock.png"


const LoginForm = ({ email, password, setEmail, setPassword, onSubmit }) => {
    const { passwordType, togglePassword } = usePasswordToggler();

  return (
    <div className="login-box">
      <h1 className="title">Meld u aan!</h1>
      <form className="login-form" onSubmit={onSubmit}>
        <div className="input">
        <input
            type="email"
            id="user-email"
            name="email"
            value={email}
            placeholder="example@yahoo.com"
            aria-describedby="user-email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
        <div className="input">
            <label>Password:</label>
            <input
              id="password"
              name="password"
              type={passwordType}
              value={password}
              aria-describedby="user-password"
              aria-invalid="false"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="button" onClick={togglePassword}>
              <img
                src={passwordType === "password" ? padlock : padlockUnlock}
                alt={
                  passwordType === "password"
                    ? "Show Password"
                    : "Hide Password"
                }
              />
            </button>
          </div>
        </div>
        <Button type="submit" text="aanmelden" />
      </form>
    </div>
  );
};


export default LoginForm;
