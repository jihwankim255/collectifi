import axios from './core';
import {ISCONNECT} from '../modules/atom';

export const checkLogin = async () => {
  //if(!ISCONNECT) return userInfoData;
  // const options = {
  //   method: 'GET',
  //   url: `${SERVERURL}/checklogin`,
  //   headers: {accept: 'application/json'},
  //   withCredentials: true,
  // };

  try {
    const data = await axios('/checklogin');
    return data;
  } catch (err) {
    console.log('checkLogin err: ', err);
    return null;
  }
};

export const logout = async () => {
  //if(!ISCONNECT) return sellCardData;
  const options = {
    method: 'POST',
    url: `${process.env.BASE_URL}/logout`,
    headers: {accept: 'application/json'},
    withCredentials: true,
    data: {},
  };

  try {
    const data = await axios(options);
    return data;
  } catch (err) {
    console.log('logout err: ', err);
    return null;
  }
};
