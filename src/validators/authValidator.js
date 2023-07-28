export const emailValidator = (email) => {
  const emailRegExp = /@/;

  return emailRegExp.test(email);
};

export const passwordValidator = (password) => {
  const passwordRegExp = /^.{8,}$/;

  return passwordRegExp.test(password);
};
