import { useState, useCallback } from 'react';
import { emailValidator, passwordValidator } from '../validators/authValidator';

export const useAuthValidation = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleChangeEmail = useCallback((e) => {
    const { value } = e.target;
    setEmailInput(value);
    setIsValidEmail(emailValidator(value));
  }, []);

  const handleChangePassword = useCallback((e) => {
    const { value } = e.target;
    setPasswordInput(value);
    setIsValidPassword(passwordValidator(value));
  }, []);

  return {
    emailInput,
    passwordInput,
    isValidEmail,
    isValidPassword,
    handleChangeEmail,
    handleChangePassword,
  };
};
