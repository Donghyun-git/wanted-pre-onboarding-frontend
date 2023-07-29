import { useRef, useCallback } from 'react';
import { createTodo } from '../../lib/apis/todoService';
import { useTodoContext } from '../../context/todoContext';
import * as Styled from './Styled';

function TodoHeaderSection() {
  const todoInputRef = useRef();
  const { dispatch } = useTodoContext();

  const handleSubmitTodo = useCallback(async () => {
    const { value } = todoInputRef.current;
    try {
      if (!value) throw new Error('내용을 입력해주세요.');

      const { data } = await createTodo(value);

      dispatch({ type: 'CREATE_TODO', payload: data });
      todoInputRef.current.value = '';

      return;
    } catch (error) {
      alert(error);

      return;
    }
  }, [dispatch]);

  return (
    <Styled.TaskHeaderSection>
      <input
        type="text"
        data-testid="new-todo-input"
        id="text"
        ref={todoInputRef}
      />
      <label htmlFor="text">
        <span>오늘의 할일은?</span>
      </label>
      <button data-testid="new-todo-add-button" onClick={handleSubmitTodo}>
        ADD
      </button>
    </Styled.TaskHeaderSection>
  );
}

export default TodoHeaderSection;
