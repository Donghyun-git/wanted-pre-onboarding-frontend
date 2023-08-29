export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'GET_TODO': {
      return action.payload;
    }

    case 'CREATE_TODO': {
      return [...state, action.payload];
    }

    case 'UPDATE_TODO':
      return state.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              todo: action.payload.todo,
              isCompleted: action.payload.isCompleted,
            }
          : todo
      );
    case 'DELETE_TODO': {
      return state.filter((todo) => action.payload.id !== todo.id);
    }
    default:
      return state;
  }
};
