import React from 'react';

const Input = ({ ariaLabel, ariaDescribedby, name, type, placeholder, field }) => (
  <input
    {...field}
    aria-label={ariaLabel}
    aria-describedby={ariaDescribedby}
    name={name}
    type={type}
    placeholder={placeholder}
  />
);

export default Input;
