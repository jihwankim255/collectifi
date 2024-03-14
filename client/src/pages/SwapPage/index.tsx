import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowAltCircleDown} from '@fortawesome/free-regular-svg-icons';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';
import Styled from './Swap.styled';

const SwapPage = () => {
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
      `${process.env.REACT_APP_BASE_URL}/exchange/swapaccount`,
      {ethAmount},
      {withCredentials: true},
    );
    setColAmount(response.data.data.colAmount);
  };

  const handleSwap = async () => {
    if (confirm('Do you want to Swap ETH to COL?')) {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/exchange/swap`,
        {ethAmount},
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
    <Styled.Layout>
      <Styled.ParticleS />
      <Styled.Container>
        <Styled.TabBox>
          <Styled.Tab style={{backgroundColor: '#fc466b'}}>SWAP</Styled.Tab>
          <Styled.Tab onClick={() => navigate('/pool')}>POOL</Styled.Tab>
        </Styled.TabBox>
        <Styled.InputBox>
          <Styled.InputTitle>Input : ETH</Styled.InputTitle>
          <Styled.Input
            placeholder="ETH"
            value={ethAmount}
            onChange={(e: any) => setEthAmount(e.target.value)}
          />
        </Styled.InputBox>
        <Styled.CalBox onClick={handleCalClick}>
          <FontAwesomeIcon icon={faArrowAltCircleDown} />
        </Styled.CalBox>
        <Styled.InputBox>
          <Styled.InputTitle>Output : COL</Styled.InputTitle>
          <Styled.Input placeholder="COL" value={colAmount} />
        </Styled.InputBox>

        <Styled.BtnBox onClick={handleSwap}>SWAP!</Styled.BtnBox>
      </Styled.Container>
    </Styled.Layout>
  );
};

export default SwapPage;
