import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { __concept1, __concept2 } from '../../../styles/color';

// [ Header Layout ]
export const HeaderWrap = styled.header`
  width: 100%;
  background-color: ${__concept1};
  min-height: 10rem;

  display: flex;
  align-items: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`;

export const HeaderContainerDiv = styled.div`
  width: 102.857rem;
  margin: 0 auto;
  text-align: center;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    display: inline-block;
    font-size: 36px;
    color: #fff;
    text-shadow: 0 1px 3px whitesmoke;
  }

  span {
    font-size: 24px;
    color: #fff;
    margin-left: 48px;
  }
`;

// [ Header Contents ]
export const HeaderAuthDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    &:last-child {
      margin-left: 12px;
    }
  }
`;

export const HeaderAuthLink = styled(Link)`
  position: relative;
  padding: 10px 8px;
  font-size: 18px;
  color: #fff;
  font-weight: 600;

  border: 1px solid ${__concept2};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: ${__concept1};
  }
`;
