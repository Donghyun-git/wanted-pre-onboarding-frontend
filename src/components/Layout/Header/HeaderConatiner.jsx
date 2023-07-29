import React from 'react';
import * as Styled from './Styled';
import { getCurrentDate } from '../../../utils/date';

function HeaderConatiner() {
  return (
    <Styled.HeaderContainerDiv>
      <div>
        <h1>My TodoList</h1>
        <span>{getCurrentDate()}</span>
      </div>
      <Styled.HeaderAuthDiv>
        <div>
          <Styled.HeaderAuthLink to="/signin">Sign In</Styled.HeaderAuthLink>
        </div>
        <div>
          <Styled.HeaderAuthLink to="/signup">Sign Up</Styled.HeaderAuthLink>
        </div>
      </Styled.HeaderAuthDiv>
    </Styled.HeaderContainerDiv>
  );
}

export default HeaderConatiner;
