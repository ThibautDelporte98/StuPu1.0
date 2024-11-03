import React from 'react';
import './Button.css';

const Button = ({ className, type, text, onClick, icon }) => {
  return (
    <button type={type} className={`custom-button ${className}`} onClick={onClick}>
       {icon && <img src={icon} alt="button icon" className="button-icon" />}
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;
