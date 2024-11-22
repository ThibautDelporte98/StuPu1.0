import React from "react";
import usePasswordToggler from "hooks/usePasswordToggler";
import succes from "assets/svg/check.svg";
import error from "assets/svg/red-cross.svg";

const PasswordInput = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  isValid,
  validationMessage,
  showValidation,
  ...props
}) => {
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
        {...props}
      />
      <button
        type="button" // Correct button type
        className="password-toggle"
        onClick={togglePassword}
        aria-label={passwordType === "password" ? "Verberg wachtwoord" : "Toon wachtwoord"}
      >
        {passwordType === "password" ? "Toon" : "Verberg"}
      </button>
      {!isValid && showValidation && validationMessage && (
        <p className="error-message">{validationMessage}</p>
      )}
    </div>
  );
};

export default PasswordInput;
