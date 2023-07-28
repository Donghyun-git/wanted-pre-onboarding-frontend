import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as color from '../../../styles/color';

// [ Header Layout ]
export const HeaderWrap = styled.header`
  width: 100%;
  background-color: ${color.headerWrap};
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
    font-size: 36px;
    color: #fff;
    text-shadow: 0 1px 3px whitesmoke;
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

  border: 1px solid ${color.mainWrap};
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: ${color.headerWrap};
  }
`;
