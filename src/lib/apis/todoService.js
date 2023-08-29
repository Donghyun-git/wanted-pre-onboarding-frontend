import { axiosJsonInstance } from '../config/axios';

//[ todo 등록 ]
export const createTodo = async (todo) => {
  const access_token = localStorage.getItem('access_token');
  const header = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  const payload = {
    todo: todo,
  };

  try {
    const { status, data } = await axiosJsonInstance.post('/todos', payload, header);

    return { status, data };
  } catch (error) {
    throw new Error(error.message);
  }
};

//[ todo 리스트 조회 ]
export const getTodo = async () => {
  const access_token = localStorage.getItem('access_token');
  const header = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  try {
    const { status, data } = await axiosJsonInstance.get('/todos', header);

    return { status, data };
  } catch (error) {
    const { status, message } = error.response;

    if (status === 401) throw new Error(status);

    throw new Error(message);
  }
};

//[ todo 수정 ]
export const updateTodo = async (id, todo, isCompleted) => {
  const access_token = localStorage.getItem('access_token');
  const header = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  const payload = {
    todo,
    isCompleted,
  };

  try {
    const { status, data } = await axiosJsonInstance.put(`/todos/${id}`, payload, header);

    return { status, data };
  } catch (error) {
    throw new Error(error.message);
  }
};

//[ todo 삭제 ]
export const deleteTodo = async (id) => {
  const access_token = localStorage.getItem('access_token');
  const header = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  try {
    await axiosJsonInstance.delete(`/todos/${id}`, header);

    return;
  } catch (error) {
    throw new Error(error.message);
  }
};
