import React from 'react';
import * as Styled from './Styled';
import SignupForm from '../../Signup/SignupForm';

function SignupContainer() {
  return (
    <Styled.SignupContainer>
      <div>
        <h2>회원가입</h2>
      </div>
      <div>
        <SignupForm />
      </div>
    </Styled.SignupContainer>
  );
}

export default SignupContainer;
