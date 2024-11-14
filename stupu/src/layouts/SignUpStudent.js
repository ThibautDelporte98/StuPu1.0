// src/pages/LoginForm.js
import React from "react";
import "../styles/LoginForm.css";
import Button from "components/common/button/Button";
import usePasswordToggler from "../hooks/usePasswordToggler";
import padlock from "../assets/img/padlock.png"
import padlockUnlock from "../assets/img/padlock-unlock.png"


const SignUpForm = ({firstName, lastName , email, password, setName, setLastname, setEmail, setPassword, onSubmit }) => {
    const { passwordType, togglePassword } = usePasswordToggler();

  return (
    <div className="login-box">
      <h1 className="title">Meld u aan!</h1>
      <form className="login-form" onSubmit={onSubmit}>
      <div className="input">
                    <label>Voornaam</label>

        <input
            type="text"
            id="user-name"
            name="firstname"
            value={firstName}
            placeholder="voornaam"
            aria-describedby="user-name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input">
            <label>Achternaam</label>

        <input
            type="text"
            id="user-lastname"
            name="lastname"
            value={lastName}
            placeholder="voornaam"
            aria-describedby="user-lastname"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="input">
        <label>Email:</label>
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


export default SignUpForm;
