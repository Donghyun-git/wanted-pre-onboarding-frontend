import { Fragment } from 'react';
import * as Styled from './Styled';
import { getCurrentDate } from '../../../utils/date';
import { useAccessTokenCheck } from '../../../hooks/useAccessTokenCheck';

function HeaderConatiner() {
  const { isAccessToken, handleDeleteAccessToken } = useAccessTokenCheck();

  return (
    <Styled.HeaderContainerDiv>
      <div>
        <h1>My TodoList</h1>
        <span>{getCurrentDate()}</span>
      </div>
      <Styled.HeaderAuthDiv>
        {!isAccessToken ? (
          <Fragment>
            <div>
              <Styled.HeaderAuthLink to="/signin">
                Sign In
              </Styled.HeaderAuthLink>
            </div>
            <div>
              <Styled.HeaderAuthLink to="/signup">
                Sign Up
              </Styled.HeaderAuthLink>
            </div>
          </Fragment>
        ) : (
          <div>
            <Styled.HeaderAuthLink
              to="/signin"
              onClick={handleDeleteAccessToken}
            >
              LogOut
            </Styled.HeaderAuthLink>
          </div>
        )}
      </Styled.HeaderAuthDiv>
    </Styled.HeaderContainerDiv>
  );
}

export default HeaderConatiner;
