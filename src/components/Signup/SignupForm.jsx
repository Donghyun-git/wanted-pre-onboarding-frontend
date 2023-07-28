import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  emailValidator,
  passwordValidator,
} from '../../validators/authValidator';
import { signUp } from '../../lib/apis/authService';
import * as Styled from './Styled';

function SignupForm() {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

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

  const handleSignup = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        await signUp({
          email: emailInput,
          password: passwordInput,
        });

        alert('회원가입 완료');
        navigate('/signin');

        return;
      } catch (error) {
        console.log(error);
        alert(error.message);
      }
    },
    [emailInput, navigate, passwordInput]
  );

  return (
    <>
      <Styled.SignupForm>
        <Styled.InputDiv>
          <label htmlFor="email">E-MAIL</label>
          <input
            type="email"
            id="email"
            data-testid="email-input"
            onChange={(e) => handleChangeEmail(e)}
          />
          {!isValidEmail && <p>이메일에 '@' 가 포함되어 있어야 합니다.</p>}
        </Styled.InputDiv>

        <Styled.InputDiv>
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            data-testid="password-input"
            id="password"
            onChange={(e) => handleChangePassword(e)}
          />
          {!isValidPassword && <p>패스워드는 8자리 이상이여야 합니다.</p>}
        </Styled.InputDiv>
        <Styled.SignupButtonDiv>
          <button data-testid="signup-button" onClick={(e) => handleSignup(e)}>
            회원가입
          </button>
        </Styled.SignupButtonDiv>
      </Styled.SignupForm>
    </>
  );
}

export default SignupForm;
