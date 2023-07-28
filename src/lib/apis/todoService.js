import { axiosJsonInstance } from '../config/axios';

//[ todo 등록 ]
export const createTodo = async (todo) => {
  const access_token = localStorage.getItem('access_token');
  const header = {
    header: {
      Authorization: `Bearer ${access_token}`,
    },
  };
  const payload = {
    todo,
  };

  try {
    const { status, data } = await axiosJsonInstance.post(
      '/todos',
      header,
      payload
    );

    if (status !== 200) throw new Error(data.message);

    return { status, data };
  } catch (error) {
    throw new Error(error.message);
  }
};

//[ todo 리스트 조회 ]
export const getTodo = async () => {
  const access_token = localStorage.getItem('access_token');
  const header = {
    header: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  try {
    const { status, data } = await axiosJsonInstance.get('/todos', header);

    if (status !== 200) throw new Error(data.message);

    return { status, data };
  } catch (error) {
    throw new Error(error.message);
  }
};

//[ todo 수정 ]
export const updateTodo = async ({ id, todo, isCompleted }) => {
  try {
    const access_token = localStorage.getItem('access_token');
    const header = {
      header: {
        Authorization: `Bearer ${access_token}`,
      },
    };
    const payload = {
      todo,
      isCompleted,
    };

    try {
      const { status, data } = await axiosJsonInstance.put(
        `/todos/${id}`,
        header,
        payload
      );

      if (status !== 201) throw new Error(data.message);

      return { status, data };
    } catch (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

//[ todo 삭제 ]
export const deleteTodo = async (id) => {
  const access_token = localStorage.getItem('access_token');
  const header = {
    header: {
      Authorization: `Bearer ${access_token}`,
    },
  };

  try {
    const { status, data } = await axiosJsonInstance.delete(
      `/todos/${id}`,
      header
    );

    if (status !== 204) throw new Error(data.message);

    return { status, data };
  } catch (error) {
    throw new Error(error.message);
  }
};
