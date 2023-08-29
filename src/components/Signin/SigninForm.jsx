import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn } from '../../lib/apis/authService';
import { useAuthValidation } from '../../hooks/useAuthValidation';
import { useAccessTokenCheck } from '../../hooks/useAccessTokenCheck';
import * as Styled from './Styled';

function SigninForm() {
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

  const handleSignin = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await signIn({
          email: emailInput,
          password: passwordInput,
        });

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
            data-testid="email-input"
            id="email"
            placeholder="example@google.com"
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
            placeholder="8자 이상"
            onChange={(e) => handleChangePassword(e)}
          />
          {passwordInput !== '' && !isValidPassword && <p>패스워드는 8자리 이상이여야 합니다.</p>}
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
