import { axiosJsonInstance } from '../config/axios';

//[ 로그인 ]
export const signIn = async ({ email, password }) => {
  try {
    const payload = {
      email,
      password,
    };
    const { status, data } = await axiosJsonInstance.post(
      '/auth/signin',
      payload
    );

    if (status !== 200) throw new Error(data.message);

    return { status, data };
  } catch (error) {
    throw new Error(error.mewssage);
  }
};

//[ 회원가입 ]
export const signUp = async ({ email, password }) => {
  try {
    const payload = {
      email,
      password,
    };

    const { status, data } = await axiosJsonInstance.post(
      '/auth/signup',
      payload
    );

    if (status !== 201) throw new Error(data.message);

    return { status, data };
  } catch (error) {
    throw new Error(error.message);
  }
};
