import Confetti from '../../components/UI/Confetti';
import CardListItem from '../../components/market/CardListItem';
import {Layout} from '../../Styles';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import {toast} from 'react-toastify';
import Button from '../../components/UI/Button';
import {userId} from '../../atom';
import {useRecoilValue} from 'recoil';
import Styled from './UpgradeCard.styled';
import {CardProps} from './types';

const UpgradeCardPage = () => {
  const [myCards, setMyCards] = useState<CardProps[]>([]);
  const [myTokens, setMyTokens] = useState('');
  const [target, setTarget] = useState<CardProps | null>();
  const [upgradeCard, setUpgradeCard] = useState<CardProps>();
  const totalCards = myCards.length - 1;
  const currId = useRecoilValue(userId);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/upgrade`, {withCredentials: true})
      .then((res: any) => {
        setMyCards(res.data.data.nfts);
        setMyTokens(res.data.data.token_amount);
        console.log('get upgrade: ', res.data.data);
      });

    console.log('hi');
  }, []);

  const handleUpgrade = async (e: Event) => {
    e.preventDefault();
    if (confirm('정말 강화 하시겠습니까?')) {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/upgrade`, {nft: target}, {withCredentials: true})
        .then((res: any) => {
          if (res.data.message === '성공했습니다.') {
            console.log('upgrade res: ', res);
            setUpgradeCard(res.data.data.mintedNft);
            toast.success('You have successfully upgraded your card!');
          } else {
            toast.info('You failed to upgrade your card. 🛠');
          }
        })
        .catch(err => {
          console.log('upgrade error: ', err);
        });

      console.log('yes');
    } else {
      console.log('no');
    }
  };

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`/user/${currId}`);
  };

  const [index, setIndex] = useState(0);
  const neonTypeColors = [
    {
      shadow: '0 0 10px #ff1be6, 0 0 20px #ff1be6, 0 0 30px #ff1be6',
      border: '#ff1be6',
      text: '#ff1be6',
    },
    {
      shadow: '0 0 10px #1bcaff, 0 0 20px #1bcaff, 0 0 30px #1bcaff',
      border: '#1bcaff',
      text: '#1bcaff',
    },
    {
      shadow: '0 0 10px #fffc00, 0 0 20px #fffc00, 0 0 30px #fffc00',
      border: '#fffc00',
      text: '#fffc00',
    },
    {
      shadow: '0 0 10px #1bcaff, 0 0 20px #ff1be6, 0 0 30px #fffc00',
      border: '#ff1be6',
      text: '#fffc00',
    },
  ];

  useEffect(() => {
    const loop = setInterval(() => {
      if (index >= 3) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 2000);
    return () => {
      clearInterval(loop);
    };
  }, [index]);

  const {shadow, text, border} = neonTypeColors[index];

  return (
    <>
      {upgradeCard ? (
        <Styled.CardContainer>
          <Styled.CardComment>Congratulations!!!</Styled.CardComment>
          <Styled.Card bgImage={upgradeCard.img_url} />
          <Button onClick={handleButtonClick}>Check on MyPage</Button>
          {/* <button>Check on MyPage</button> */}
        </Styled.CardContainer>
      ) : (
        <div>
          <Layout>
            <Styled.Title>Upgrade Your Card</Styled.Title>

            <Styled.TargetCard shadow={shadow} border={border}>
              <CardListItem>
                <Styled.FloatingDiv>
                  <Styled.Card bgImage={target ? target.img_url : ''}></Styled.Card>
                </Styled.FloatingDiv>
              </CardListItem>
              <Styled.CardInfo>
                <Styled.UpgradeText>
                  강화 비용:{' '}
                  {target && target.card_color == 0
                    ? '150 '
                    : target && target.card_color == 1
                    ? '300 '
                    : '????'}
                  COL
                </Styled.UpgradeText>
                <Styled.UpgradeText>보유 COL: {myTokens}</Styled.UpgradeText>

                <Button
                  onClick={(e: any) => {
                    handleUpgrade(e);
                  }}
                >
                  강화하기
                </Button>
                {/* <Confetti innerText={'성공'} /> */}
              </Styled.CardInfo>
            </Styled.TargetCard>
          </Layout>

          <Styled.MyCardsText>My Cards</Styled.MyCardsText>
          <Styled.MyCardsContainer>
            {myCards
              ? myCards.map(card => (
                  <React.Fragment key={card.token_id}>
                    <Styled.Card
                      onClick={() => setTarget(card)}
                      bgImage={card.img_url}
                    ></Styled.Card>
                  </React.Fragment>
                ))
              : null}
          </Styled.MyCardsContainer>
        </div>
      )}
    </>
  );
};

export default UpgradeCardPage;
