import React, { forwardRef } from "react";
import usePasswordToggler from "hooks/usePasswordToggler";
import succes from "assets/svg/check.svg";
import error from "assets/svg/red-cross.svg";
import padlock from "assets/img/padlock.png";
import padlockUnlock from "assets/img/padlock-unlock.png";
import "./Input.css";

const PasswordInput = forwardRef(
  (
    {
      id,
      label,
      value,
      onChange,
      onBlur,
      isValid,
      validationMessage,
      showValidation,
      autoComplete,
      ...props
    },
    ref
  ) => {
    const { passwordType, togglePassword } = usePasswordToggler();

    return (
      <div className="input">
        <label htmlFor={id}>
          {label}
          {isValid ? (
            <span className={showValidation ? "error-message" : "hide-message"}>
              <img src={succes} alt="correct" />
            </span>
          ) : (
            <span className={showValidation ? "error-message" : "hide-message"}>
              <img src={error} alt="error" />
            </span>
          )}
        </label>
        <input
          id={id}
          type={passwordType} // Dynamically set the input type
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={!isValid}
          required
          autoComplete={autoComplete}
          ref={ref} // Forwarding the ref here
          {...props}
        />
        <button
          type="button"
          className="password-toggle"
          onClick={togglePassword}
          aria-label={
            passwordType === "password" ? "Verberg wachtwoord" : "Toon wachtwoord"
          }
        >
          <img
            src={passwordType === "password" ? padlock : padlockUnlock}
            alt={passwordType === "password" ? "Toon Wachtwoord" : "Verber Wachtwoord"}
          />
        </button>
        {!isValid && showValidation && validationMessage && (
          <p className="error-message">{validationMessage}</p>
        )}
      </div>
    );
  }
);

export default PasswordInput;
