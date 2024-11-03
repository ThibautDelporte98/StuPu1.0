import { useState } from 'react';

const usePasswordToggler = () => {
  const [passwordType, setPasswordType] = useState('password');

  const togglePassword = () => {
    setPasswordType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return { passwordType, togglePassword };
};

export default usePasswordToggler;
