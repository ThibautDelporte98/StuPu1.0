import "./Input.css";

const TextareaField = ({
  id,
  label,
  value,
  defaultValue,
  placeholder,
  onChange,
  onBlur,
  isValid,
  validationMessage,
  showValidation,
  ...props
}) => {
  return (
    <div className="input">
      <textarea
        id={id}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={!isValid}
        placeholder={placeholder}
        required
        {...props}
      />
    </div>
  );
};

export default TextareaField;
