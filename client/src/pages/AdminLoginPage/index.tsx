import React from 'react';
import {Box, motion} from 'framer-motion';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Styled from './AdminLogin.styled';

const AdminLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  interface AdminData {
    username: string;
    password: string;
  }

  const onSubmit = async (data: any) => {
    const {username, password} = data;
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/admin/login`,
      {username, password},
      {withCredentials: true},
    );
    if (response.status == 200) {
      navigate('/admin');
    }
    return console.log(response);
  };
  return (
    <div>
      <Styled.ModalOverlay>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Styled.ModalContent>
            <Styled.ModalTitle>Admin Login</Styled.ModalTitle>
            <Styled.ModalInput placeholder="username" {...register('username', {required: true})} />
            <Styled.ModalInput
              placeholder="password"
              type="password"
              {...register('password', {required: true})}
            />
            <Styled.ModalBtn type="submit">Login</Styled.ModalBtn>
          </Styled.ModalContent>
        </form>
      </Styled.ModalOverlay>
    </div>
  );
};

export default AdminLogin;
