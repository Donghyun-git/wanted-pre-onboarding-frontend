import styled from 'styled-components';

//[ TaskHeaderSection ]
export const TaskHeaderSection = styled.section`
  width: 96%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-top: 4.286rem;

  input {
    transition: padding-top 0.2s ease, margin-top 0.2s ease;
    width: 92%;
    height: 25px;
    padding-top: 2px;
    padding-bottom: 3px;
    background-color: #fffaf7;
    border-top-left-radius: 0.286rem;
    border-top-right-radius: 0.286rem;

    &:focus {
      outline: none;
      border-bottom: 3px solid #bdbdbd;
      border-left: none;
      border-right: none;
      border-top: none;
      transition: 0.2s;
      padding-top: 35px;
      background-color: #fffaf7;

      label > span {
        top: 0px;
        color: #333;
      }
    }
  }

  label > span {
    font-weight: 300;
    margin: 0;
    position: absolute;
    color: #8f8f8f;
    font-size: 14px;
    top: 6px;
    left: 10px;
    -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
    transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  }

  button {
    border: none;
    height: 31px;
    padding: 0 8px 0 8px;
    background: #dbdbdb;
    color: #fffaf7;
    border-radius: 0.286rem;
  }

  &:before {
    content: '';
    position: absolute;
    width: 76.897rem;
    height: 3px;
    border: 2px solid #bdbdbd;
    background-color: #bdbdbd;
    bottom: -16px;
    left: 4px;
    filter: drop-shadow(0 0.086rem 0.086rem rgba(0, 0, 0, 0.25));
  }
`;

//[ TaskBoardSection ]

export const TaskBoardSection = styled.section`
  margin-top: 24px;
  width: 96%;
  height: 48.179rem;
  overflow-y: scroll;
`;

//[ TaskList ]
export const TaskListUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`;

export const DateDiv = styled.div`
  width: 18%;
  text-align: center;
`;

export const TaskLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 4px;
  text-align: left;
  width: 100%;

  div:first-child {
    label {
      display: flex;
      align-items: center;
    }
    span {
      text-decoration: ${({ active }) =>
        active === 'true' ? 'line-through' : ''};
      margin-left: 40px;
    }
  }
`;

export const TaskButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 46px;

  button {
    padding: 12px 12px 6px 12px;
    border-radius: 50%;
    border: 0;
    background: 0;
    font-weight: 700;
    transition: all 0.25s ease;
  }
`;

export const TaskModifyInput = styled.input`
  && {
    background-color: #fffaf7;
    margin-left: 40px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 2px solid #ddd;
    &:focus {
      outline: 0;
    }
  }
`;

export const CancelButton = styled.button`
  padding: 12px 12px 6px 12px;
  border-radius: 50%;
  border: 0;
  background: 0;
  font-weight: 700;
  transition: all 0.25s ease;

  && {
    &:hover {
      background-color: #d46a6a;
    }
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 12px 6px 12px;
  border-radius: 50%;
  border: 0;
  background: 0;
  font-weight: 700;
  transition: all 0.25s ease;

  &:hover {
    background-color: #84e92a;
  }
`;

export const DeleteButton = styled.button`
  padding: 12px 12px 6px 12px;
  border-radius: 50%;
  border: 0;
  background: 0;
  font-weight: 700;
  transition: all 0.25s ease;

  &:hover {
    background-color: #d46a6a;
  }
`;

export const ModifyButton = styled.button`
  padding: 12px 12px 6px 12px;
  border-radius: 50%;
  border: 0;
  background: 0;
  font-weight: 700;
  transition: all 0.25s ease;

  &:hover {
    background-color: #84e92a;
  }
`;
