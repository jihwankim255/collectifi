import axiosInstace from './core';

export const checkLogin = async () => {
  try {
    const data = await axiosInstace('/checklogin');
    return data;
  } catch (err) {
    console.log('checkLogin err: ', err);
    return null;
  }
};

export const logout = async () => {
  try {
    const data = await axiosInstace.post('/logout');
    return data;
  } catch (err) {
    console.log('logout err: ', err);
    return null;
  }
};
