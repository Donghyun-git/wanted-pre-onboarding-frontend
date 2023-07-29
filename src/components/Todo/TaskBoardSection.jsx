import React from 'react';
import TaskList from './TaskList';
import * as Styled from './Styled';
import { useTodoContext } from '../../context/todoContext';

function TaskBoardSection() {
  const { state } = useTodoContext();

  return (
    <Styled.TaskBoardSection>
      <div>
        {state.map((list) => (
          <TaskList key={list.id} todo={list} />
        ))}
      </div>
    </Styled.TaskBoardSection>
  );
}

export default TaskBoardSection;
