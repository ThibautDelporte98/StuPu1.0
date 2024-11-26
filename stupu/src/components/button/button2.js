import React from 'react';
import './Button.css';

const Button = ({ className, type, text, onClick, disabled, icon }) => {
  return (
    <button type={type} className={`custom-button ${className} ${disabled ? "disabled-button" : "" }`} onClick={onClick} disabled={disabled}>
       {icon && icon}
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;
