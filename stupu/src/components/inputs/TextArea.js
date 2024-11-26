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
        className="mt-1"
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
