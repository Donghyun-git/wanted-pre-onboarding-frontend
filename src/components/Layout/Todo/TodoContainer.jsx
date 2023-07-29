import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoHeaderSection from '../../Todo/TodoHeaderSection';
import TaskBoardSection from '../../Todo/TaskBoardSection';
import * as Styled from './Styled';
import { getTodo } from '../../../lib/apis/todoService';
import { TodoContext } from '../../../context/todoContext';
import { todoReducer } from '../../../context/todoReducer';

function TodoContainer() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getTodo();

        dispatch({ type: 'GET_TODO', payload: data });
        return;
      } catch (error) {
        if (error.message === '401') {
          localStorage.removeItem('access_token');
          alert('세션이 만료되었습니다! 다시 로그인 해주세요!');
          navigate('/signin');
        }
      }
    })();
  }, [navigate]);

  return (
    <Styled.TodoContainer>
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoHeaderSection />
        <TaskBoardSection />
      </TodoContext.Provider>
    </Styled.TodoContainer>
  );
}

export default TodoContainer;
