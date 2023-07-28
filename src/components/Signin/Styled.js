import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as color from '../../styles/color';

export const SigninForm = styled.form`
  margin-top: 5rem;
`;

export const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;

  label {
    font-size: 1.343rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
  }

  input {
    width: 40.714rem;
    height: 4.286rem;
    border-radius: 0.857rem;
  }

  p {
    margin-top: 0.5rem;
    color: red;
  }
`;

export const LoginButtonDiv = styled.div`
  text-align: center;
  margin-top: 5rem;

  button {
    background: ${color.headerWrap};
    border: 0;
    width: 41.714rem;
    height: 4.286rem;
    border-radius: 0.857rem;
    color: #fff;
    transition: all 0.1 ease;

    &:hover {
      background: #979797;
    }
  }

  div {
    padding: 8px 4px;
    margin-top: 0.571rem;
  }
`;

export const SignupLink = styled(Link)`
  text-decoration: underline;
  color: #003c74;
`;