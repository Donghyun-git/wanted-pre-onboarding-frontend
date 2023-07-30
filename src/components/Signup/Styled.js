import styled from 'styled-components';
import { __concept1 } from '../../styles/color';

export const SignupForm = styled.form`
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

export const SignupButtonDiv = styled.div`
  text-align: center;
  margin-top: 5rem;

  button {
    background: ${__concept1};
    border: 0;
    width: 41.714rem;
    height: 4.286rem;
    border-radius: 0.857rem;
    color: #fff;
    transition: all 0.1s ease;

    &:hover {
      background: #979797;
    }
  }

  button[disabled] {
    background-color: #e0e0e0;
    color: #aaaaaa;
    cursor: not-allowed;
  }

  div {
    padding: 8px 4px;
    margin-top: 0.571rem;
  }
`;
