import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Layout} from '../../Styles';
import EventStyled from '../EventPage/Event.styled';
import PageTitle from '../../components/UI/PageTitle';
import Web3 from 'web3';
import Styled from './Donation.styled';
import {Info} from './types';

const Donation = () => {
  const [infos, setInfos] = useState<Info[]>([]);
  const [isModalOpenOne, setIsModalOpenOne] = useState(false);
  const [isModalOpenTwo, setIsModalOpenTwo] = useState(false);
  const [isModalOpenThree, setIsModalOpenThree] = useState(false);
  const [amount, setAmount] = useState<any>();

  const setChange = (e: any) => {
    e.preventDefault();
    setAmount(e.target.value);
  };

  const openModalOne = () => {
    setIsModalOpenOne(true);
  };
  const openModalTwo = () => {
    setIsModalOpenTwo(true);
  };

  const openModalThree = () => {
    setIsModalOpenThree(true);
  };

  const closeModalOne = () => {
    setIsModalOpenOne(false);
  };
  const closeModalTwo = () => {
    setIsModalOpenTwo(false);
  };

  const closeModalThree = () => {
    setIsModalOpenThree(false);
  };
  const handleClick = async (e: any) => {
    e.preventDefault();
    const weiAmount = Web3.utils.toWei(amount.toString(), 'ether');
    const hexAmount = Web3.utils.toHex(weiAmount);
    console.log(hexAmount);
    const params = [
      {
        from: '0x19A49D592c34dCcdA2B11c926609F84621e34480',

        to: '0x9209224bE464Fec24a7C08A78eD87c2Df4335EdD',
        value: hexAmount,
      },
    ];
    if (window.ethereum) {
      window.ethereum
        .request({
          method: 'eth_sendTransaction',
          params,
        })
        .then(txHash => console.log(txHash));
    }
  };

  const handleClickTwo = async (e: any) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/donation`,
      {amount},
      {withCredentials: true},
    );
  };
  const handleClickThree = async (e: any) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/donation/refund`,

      {withCredentials: true},
    );
    console.log(response);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/donation`, {withCredentials: true})
      .then((res: any) => {
        setInfos(res.data.data.donations);
        console.log(res.data.data.donations);
      });

    console.log('hi');
  }, []);
  return (
    <Layout>
      <EventStyled.TopBox>
        <PageTitle title="DONATIONS" />
      </EventStyled.TopBox>
      <EventStyled.MiddleBox>
        {infos ? (
          <Styled.GridContainer>
            <Styled.DonationBox onClick={openModalOne}>
              <Styled.DonationImg bgImage={infos[0]?.img_url} />
              <Styled.BarSegment width={infos[0]?.percent} color="#fd115c" />
              <Styled.DonationTop>
                <Styled.DonationPercent>{infos[0]?.percent}%</Styled.DonationPercent>
                <Styled.DonationTarget>{infos[0]?.raisedEth} ETH /</Styled.DonationTarget>
                <Styled.DonationTarget>{infos[0]?.targetEth} ETH</Styled.DonationTarget>
              </Styled.DonationTop>
              <Styled.DonationBottom>{infos[0]?.title}</Styled.DonationBottom>
            </Styled.DonationBox>
            <Styled.DonationBox onClick={openModalTwo}>
              <Styled.DonationImg bgImage={infos[1]?.img_url} />
              <Styled.BarSegment width={infos[1]?.percent} color="#fd115c" />
              <Styled.DonationTop>
                <Styled.DonationPercent>{infos[1]?.percent}%</Styled.DonationPercent>
                <Styled.DonationTarget>{infos[1]?.raisedAmount} COL /</Styled.DonationTarget>
                <Styled.DonationTarget>{infos[1]?.targetAmount} COL</Styled.DonationTarget>
              </Styled.DonationTop>
              <Styled.DonationBottom>{infos[1]?.title}</Styled.DonationBottom>
            </Styled.DonationBox>
            <Styled.DonationBox onClick={openModalThree}>
              <Styled.DonationImg style={{opacity: 0.4}} bgImage={infos[2]?.img_url} />
              <Styled.BarSegment width={infos[2]?.percent} color="#fd115c" />
              <Styled.DonationTop>
                <Styled.DonationPercent>{infos[2]?.percent}%</Styled.DonationPercent>
                <Styled.DonationTarget>{infos[2]?.raisedEth} ETH /</Styled.DonationTarget>
                <Styled.DonationTarget>{infos[2]?.targetEth} ETH</Styled.DonationTarget>
              </Styled.DonationTop>
              <Styled.BottomBox>
                <Styled.DonationBottom>{infos[2]?.title}</Styled.DonationBottom>
                <Styled.RefundBtn>Refund</Styled.RefundBtn>
              </Styled.BottomBox>
            </Styled.DonationBox>
          </Styled.GridContainer>
        ) : null}
        {isModalOpenOne && (
          <Styled.ModalOverlay onClick={closeModalOne}>
            <form onSubmit={e => handleClick(e)}>
              <Styled.ModalContent onClick={e => e.stopPropagation()}>
                {/* 모달 컨텐츠 */}
                <Styled.ModalTitle>{infos[0]?.title}</Styled.ModalTitle>
                <Styled.ModalInput
                  placeholder="Put ETH to donate"
                  required
                  value={amount}
                  onChange={e => setChange(e)}
                />
                {/* <ModalAmount>{amount}</ModalAmount> */}
                <Styled.ModalBtn type="submit">Donate</Styled.ModalBtn>
              </Styled.ModalContent>
            </form>
          </Styled.ModalOverlay>
        )}
        {isModalOpenTwo && (
          <Styled.ModalOverlay onClick={closeModalTwo}>
            <form onSubmit={e => handleClickTwo(e)}>
              <Styled.ModalContent onClick={e => e.stopPropagation()}>
                {/* 모달 컨텐츠 */}
                <Styled.ModalTitle>{infos[1]?.title}</Styled.ModalTitle>
                <Styled.ModalInput
                  placeholder="Put COL to donate"
                  required
                  value={amount}
                  onChange={e => setChange(e)}
                />
                {/* <ModalAmount>{amount}</ModalAmount> */}
                <Styled.ModalBtn type="submit">Donate</Styled.ModalBtn>
              </Styled.ModalContent>
            </form>
          </Styled.ModalOverlay>
        )}
        {isModalOpenThree && (
          <Styled.ModalOverlay onSubmit={e => handleClickThree(e)}>
            <Styled.ModalContent onClick={e => e.stopPropagation()}>
              {/* 모달 컨텐츠 */}
              <Styled.ModalTitle>Do you want to Refund your donation?</Styled.ModalTitle>

              <Styled.ModalBtn onClick={handleClickThree}>Refund</Styled.ModalBtn>
            </Styled.ModalContent>
          </Styled.ModalOverlay>
        )}
      </EventStyled.MiddleBox>
    </Layout>
  );
};

export default Donation;
