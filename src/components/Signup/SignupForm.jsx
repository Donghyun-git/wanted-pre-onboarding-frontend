import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../lib/apis/authService';
import * as Styled from './Styled';
import { useAuthValidation } from '../../hooks/useAuthValidation';
import { useAccessTokenCheck } from '../../hooks/useAccessTokenCheck';

function SignupForm() {
  const {
    emailInput,
    passwordInput,
    isValidEmail,
    isValidPassword,
    handleChangeEmail,
    handleChangePassword,
  } = useAuthValidation();

  const { isAccessToken } = useAccessTokenCheck();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAccessToken) {
      navigate('/todo');
      return;
    }
  }, [isAccessToken, navigate]);

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
          {emailInput !== '' && !isValidEmail && <p>이메일에 '@' 가 포함되어 있어야 합니다.</p>}
        </Styled.InputDiv>

        <Styled.InputDiv>
          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            data-testid="password-input"
            id="password"
            onChange={(e) => handleChangePassword(e)}
          />
          {passwordInput !== '' && !isValidPassword && <p>패스워드는 8자리 이상이여야 합니다.</p>}
        </Styled.InputDiv>
        <Styled.SignupButtonDiv>
          <button
            data-testid="signup-button"
            disabled={isValidEmail && isValidPassword ? false : true}
            onClick={(e) => handleSignup(e)}
          >
            회원가입
          </button>
        </Styled.SignupButtonDiv>
      </Styled.SignupForm>
    </>
  );
}

export default SignupForm;
