import React from 'react';
import * as Styled from './Styled';
import SigninForm from '../../Signin/SigninForm';

function SigninContainer() {
  return (
    <Styled.SigninContainer>
      <div>
        <h2>
          방문이 처음이신가요? <br />
          우측 상단에 회원가입 버튼을 눌러 회원가입을 진행해주세요!
        </h2>
      </div>
      <div>
        <SigninForm />
      </div>
    </Styled.SigninContainer>
  );
}

export default SigninContainer;
