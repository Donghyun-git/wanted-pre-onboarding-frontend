import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  emailValidator,
  passwordValidator,
} from '../../validators/authValidator';
import { signIn } from '../../lib/apis/authService';
import * as Styled from './Styled';

function SigninForm() {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [isAccessTokenValid, setIsAccessTokenValid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsAccessTokenValid(true);
    }
  }, []);

  useEffect(() => {
    if (isAccessTokenValid) {
      alert('이미 로그인이 되어 있습니다.');
      navigate('/todo');
      return;
    }
  }, [isAccessTokenValid, navigate]);

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

  const handleSignin = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const { data } = await signIn({
          email: emailInput,
          password: passwordInput,
        });

        console.log(data);

        alert('로그인 성공');

        navigate('/todo');
      } catch (error) {
        alert('이메일과 비밀번호를 다시 한 번 확인해주세요!');
      }
    },
    [emailInput, navigate, passwordInput]
  );

  return (
    <>
      <Styled.SigninForm>
        <Styled.InputDiv>
          <label htmlFor="email">E-MAIL</label>
          <input
            type="email"
            id="email"
            data-testid="email-input"
            onChange={(e) => handleChangeEmail(e)}
          />
          {emailInput !== '' && !isValidEmail && (
            <p>이메일에 '@' 가 포함되어 있어야 합니다.</p>
          )}
        </Styled.InputDiv>

        <Styled.InputDiv>
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            data-testid="password-input"
            id="password"
            onChange={(e) => handleChangePassword(e)}
          />
          {passwordInput !== '' && !isValidPassword && (
            <p>패스워드는 8자리 이상이여야 합니다.</p>
          )}
        </Styled.InputDiv>
        <Styled.LoginButtonDiv>
          <button
            data-testid="signin-button"
            disabled={isValidEmail && isValidPassword ? false : true}
            onClick={(e) => handleSignin(e)}
          >
            로그인
          </button>
          <div>
            <Styled.SignupLink to="/signup">회원가입</Styled.SignupLink>
          </div>
        </Styled.LoginButtonDiv>
      </Styled.SigninForm>
    </>
  );
}

export default SigninForm;
