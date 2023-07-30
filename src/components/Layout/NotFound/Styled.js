import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { __concept1 } from '../../../styles/color';

export const NotFoundMain = styled.div`
  width: 100%;
  text-align: center;
`;

export const NotFoundContainer = styled.div`
  margin: 50px auto 0 auto;
  width: 85.714rem;
  height: fit-content;
`;

export const NotFoundImageDiv = styled.div`
  width: 320px;
  margin: 30px auto 50px auto;
  display: block;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const LinkToHome = styled(Link)`
  background-color: ${__concept1};
  color: white;
  width: 240px;
  margin: 0 auto;
  border-radius: 6px;
  border: none;
  box-shadow: none;
  padding: 15px 10px;
  transition: background-color 0.3s ease-out;
  -webkit-appearance: none;
  display: block;
  text-align: center;
  cursor: pointer;
  margin-top: 38px;
  font-size: 18px;
`;
