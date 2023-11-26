import React, {useState} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleDown, faPlusSquare} from '@fortawesome/free-regular-svg-icons';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import SwapStyled from '../SwapPage/Swap.styled';

const PoolPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();
  const [ethAmount, setEthAmount] = useState();
  const [colAmount, setColAmount] = useState();
  const navigate = useNavigate();

  const handleCalClick = async () => {
    const response = await axios.post(
      'http://localhost:8000/exchange/liquidityaccount',
      {ethAmount},
      {withCredentials: true},
    );
    console.log(response.data.data);
    setColAmount(response.data.data.outputToken);
  };

  const handleSwap = async () => {
    if (confirm('Do you want to Swap ETH to COL?')) {
      const response = await axios.post(
        'http://localhost:8000/exchange/liquidity',
        {ethAmount, tokenAmount: colAmount},
        {withCredentials: true},
      );
      if (response.status == 200) {
        toast.success('Swap is Successfully finished!!!');
      }
    } else {
      console.log('hi');
    }
  };

  return (
    <SwapStyled.Layout>
      <SwapStyled.ParticleS />
      <SwapStyled.Container>
        <SwapStyled.TabBox>
          <SwapStyled.Tab onClick={() => navigate('/swap')}>SWAP</SwapStyled.Tab>
          <SwapStyled.Tab style={{backgroundColor: '#fc466b'}}>POOL</SwapStyled.Tab>
        </SwapStyled.TabBox>
        <SwapStyled.InputBox>
          <SwapStyled.InputTitle>Input : ETH</SwapStyled.InputTitle>
          <SwapStyled.Input
            placeholder="ETH"
            value={ethAmount}
            onChange={(e: any) => setEthAmount(e.target.value)}
          />
        </SwapStyled.InputBox>
        <SwapStyled.CalBox onClick={handleCalClick}>
          <FontAwesomeIcon icon={faPlusSquare} />
        </SwapStyled.CalBox>
        <SwapStyled.InputBox>
          <SwapStyled.InputTitle>Input : COL</SwapStyled.InputTitle>
          <SwapStyled.Input placeholder="COL" value={colAmount} />
        </SwapStyled.InputBox>

        <SwapStyled.BtnBox onClick={handleSwap}>ADD!</SwapStyled.BtnBox>
      </SwapStyled.Container>
    </SwapStyled.Layout>
  );
};

export default PoolPage;
