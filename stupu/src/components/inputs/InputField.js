import succes from "assets/svg/check.svg";
import error from "assets/svg/red-cross.svg";
import "./Input.css";


const InputField = ({
  id,
  label,
  type = "text",
  value,
  uniqueName,
  defaultValue,
  placeholder,
  onChange,
  onBlur,
  isValid,
  validationMessage,
  showValidation,
  hasPasswordToggle,
  autoComplete,
  ...props
}) => {


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
        type={type}
        name={uniqueName}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={!isValid}
        placeholder={placeholder}
        required
        autoComplete={autoComplete}
        {...props}
      />
      {!isValid && showValidation && validationMessage && (
        <p className="error-message">{validationMessage}</p>
      )}
    </div>
  );
};

export default InputField;
