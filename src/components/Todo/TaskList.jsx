import { useState, useCallback, useRef, Fragment } from 'react';
import { SlPencil, SlTrash } from 'react-icons/sl';
import { AiOutlineEnter } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import { updateTodo, deleteTodo } from '../../lib/apis/todoService';
import { useTodoContext } from '../../context/todoContext';
import * as Styled from './Styled';

function TaskList({ todo }) {
  const { id, todo: content, isCompleted } = todo;

  const [isModify, setIsModify] = useState(false);
  const [watchTodo, setWatchTodo] = useState(content);

  const { dispatch } = useTodoContext();

  const checkBoxRef = useRef();

  const handleClickModify = useCallback(() => {
    setIsModify(true);
  }, [setIsModify]);

  const handleClickCancelModify = useCallback(() => {
    setIsModify(false);
    setWatchTodo(content);
  }, [content]);

  const handleChangeTodo = useCallback((e) => {
    setWatchTodo(e.target.value);
  }, []);

  //[ 체크박스 업데이트 ]
  const handleChangeCompleted = useCallback(async () => {
    try {
      dispatch({
        type: 'UPDATE_TODO',
        payload: { id: id, todo: content, isCompleted: !isCompleted },
      });

      await updateTodo(id, content, !isCompleted);

      return;
    } catch (error) {
      console.log(error);
      alert(error);

      return;
    }
  }, [content, dispatch, id, isCompleted]);

  //[ todo 컨텐츠 업데이트 ]
  const handleSubmitUpdateTodo = useCallback(async () => {
    try {
      dispatch({
        type: 'UPDATE_TODO',
        payload: { id: id, todo: watchTodo, isCompleted: isCompleted },
      });

      await updateTodo(id, watchTodo, isCompleted);

      setIsModify(false);

      return;
    } catch (error) {
      console.error(error);

      return;
    }
  }, [dispatch, id, isCompleted, watchTodo]);

  //[todo 삭제]
  const handleSubmitDeleteTodo = useCallback(async () => {
    try {
      dispatch({
        type: 'DELETE_TODO',
        payload: { id: id },
      });

      await deleteTodo(id);

      return;
    } catch (error) {
      console.error(error);

      return;
    }
  }, [dispatch, id]);

  return (
    <Styled.TaskListUl>
      <Styled.TaskLi active={isCompleted.toString()}>
        <div>
          <label>
            <input
              type="checkbox"
              ref={checkBoxRef}
              checked={isCompleted}
              onChange={() => handleChangeCompleted()}
            />
            {isModify ? (
              <Styled.TaskModifyInput
                data-testid="modify-input"
                type="text"
                defaultValue={watchTodo}
                onChange={(e) => handleChangeTodo(e)}
              />
            ) : (
              <span>{watchTodo}</span>
            )}
          </label>
        </div>
        <Styled.TaskButtonDiv>
          {isModify ? (
            <Fragment>
              <Styled.CancelButton
                data-testid="cancel-button"
                onClick={handleClickCancelModify}
              >
                <MdOutlineCancel />
              </Styled.CancelButton>
              <Styled.SubmitButton
                data-testid="submit-button"
                onClick={handleSubmitUpdateTodo}
              >
                <AiOutlineEnter />
              </Styled.SubmitButton>
            </Fragment>
          ) : (
            <Fragment>
              <Styled.ModifyButton
                data-testid="modify-button"
                onClick={handleClickModify}
              >
                <SlPencil />
              </Styled.ModifyButton>
              <Styled.DeleteButton
                data-testid="delete-button"
                onClick={handleSubmitDeleteTodo}
              >
                <SlTrash />
              </Styled.DeleteButton>
            </Fragment>
          )}
        </Styled.TaskButtonDiv>
      </Styled.TaskLi>
    </Styled.TaskListUl>
  );
}

export default TaskList;
