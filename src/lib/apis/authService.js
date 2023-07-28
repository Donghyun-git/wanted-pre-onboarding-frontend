import { axiosJsonInstance } from '../config/axios';

//[ 로그인 ]
export const signIn = async ({ email, password }) => {
  try {
    const payload = {
      email: email,
      password: password,
    };

    const { data } = await axiosJsonInstance.post('/auth/signin', payload);

    const { access_token } = data;

    localStorage.setItem('access_token', access_token);
    return { data };
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

//[ 회원가입 ]
export const signUp = async ({ email, password }) => {
  try {
    const payload = {
      email,
      password,
    };

    await axiosJsonInstance.post('/auth/signup', payload);

    return;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
