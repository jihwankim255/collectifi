import React, {useEffect, useState} from 'react';
import Button from '../../components/UI/Button';
import Modal from '../../components/UI/Modal';
import axios from 'axios';
import testImg from '../data/7-1.png';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import Fireworks from '../../components/UI/Particle2';
import ModalAlert from '../../components/UI/ModalAlert';
import Styled from './DrawCard.styled';
import {CardAttributes, PackAttributes} from './types';

const DrawCardPage = () => {
  const [selectedPack, setSelectedPack] = useState<PackAttributes>(0);
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);

  const [card, setCard] = useState<CardAttributes>();
  const handleButtonClick = () => {
    navigate('/');
  };

  useEffect(() => {
    console.log('He');
  }, [card]);

  const handleSubmit = async (e: any) => {
    console.log(e);
    setSelectedPack(e);
    console.log('selected: ', selectedPack);

    if (confirm('정말 구매하시겠습니까?')) {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/drawing`, {card_pack: e}, {withCredentials: true})
        .then((res: any) => {
          setCard(res.data.data.mintedNft);
          toast.success('Successfully Minted your Nft!🎉');
        });

      // 테스트용
      setCard({
        token_id: 1,
        user_id: 1,
        player: 'Test',
        season: '2023',
        team: 'team1',
        card_color: 1,
        price: 5,
        selling_price: 10,
        img_url: '/7-1.png',
        isSell: false,
      });
      console.log('yes');
      toast.success('Successfully minted your NFT card! 🎈');
    } else {
      console.log('no');
    }
  };

  return (
    <>
      {modal && (
        <ModalAlert
          title={'Buy Now'}
          message={'Are you sure you want to buy it?'}
          onConfirm={() => {
            console.log('no!');
            setModal(false);
          }}
          onConfirm2={() => {
            console.log('yes!');
            setModal(false);
            // setCard({
            //   token_id: 1,
            //   user_id: 1,
            //   player: 'Test',
            //   season: '2023',
            //   team: 'team1',
            //   card_color: 1,
            //   price: 5,
            //   selling_price: 10,
            //   img_url: '/7-1.png',
            //   isSell: false,
            // });
            axios
              .post(
                `${process.env.REACT_APP_BASE_URL}/drawing`,
                {card_pack: selectedPack},
                {withCredentials: true},
              )
              .then((res: any) => {
                setCard(res.data.data.mintedNft);
                toast.success('Successfully Minted your Nft!🎉');
                console.log('Success: ', res.data.data.mintedNft);
              })
              .catch(err => {
                console.log('err: ', err);
              });
            console.log('yes');
            // toast.success('Successfully minted your NFT card! 🎈');
          }}
        />
      )}
      {card ? (
        <Styled.CardContainer>
          <Fireworks />
          <Styled.CardComment>Congratulations!!!</Styled.CardComment>
          <Styled.Card src={card.img_url} />

          <button onClick={handleButtonClick}>Check on MyPage</button>
        </Styled.CardContainer>
      ) : (
        <Styled.DrawLayout>
          {/* <Selected>{selectedPack}</Selected> */}
          <Styled.NonOpacity>
            <Styled.Description>Draw your favorite football player Card on NFT!</Styled.Description>
            {
              <Styled.PackLayout>
                <Styled.PackList>
                  <Styled.PackListItem>
                    <Styled.Pack
                      onClick={(e: any) => {
                        // handleSubmit(0);
                        setSelectedPack(0);
                        setModal(true);
                      }}
                    >
                      <Styled.PackImgBox>
                        <Styled.PackImg src={'/bronze-pack.png'} />
                      </Styled.PackImgBox>
                      <Styled.PackLabelBox>
                        <Styled.PackLabel>Normal Class</Styled.PackLabel>
                        <Styled.PackPrice>150 COL</Styled.PackPrice>
                      </Styled.PackLabelBox>
                    </Styled.Pack>
                  </Styled.PackListItem>
                  <Styled.PackListItem>
                    <Styled.Pack
                      onClick={(e: any) => {
                        // handleSubmit(1);
                        setSelectedPack(1);
                        setModal(true);
                      }}
                    >
                      <Styled.PackImgBox>
                        <Styled.PackImg src={'/silver-pack.png'} />
                      </Styled.PackImgBox>
                      <Styled.PackLabelBox>
                        <Styled.PackLabel>High Class</Styled.PackLabel>
                        <Styled.PackPrice>300 COL</Styled.PackPrice>
                      </Styled.PackLabelBox>
                    </Styled.Pack>
                  </Styled.PackListItem>
                  <Styled.PackListItem>
                    <Styled.Pack
                      onClick={(e: any) => {
                        // handleSubmit(2);
                        setSelectedPack(2);
                        setModal(true);
                      }}
                    >
                      <Styled.PackImgBox>
                        <Styled.PackImg src={'/gold-pack.png'} />
                      </Styled.PackImgBox>
                      <Styled.PackLabelBox>
                        <Styled.PackLabel>World Class</Styled.PackLabel>
                        <Styled.PackPrice>500 COL</Styled.PackPrice>
                      </Styled.PackLabelBox>
                    </Styled.Pack>
                  </Styled.PackListItem>
                </Styled.PackList>
              </Styled.PackLayout>
            }
          </Styled.NonOpacity>
        </Styled.DrawLayout>
      )}
    </>
  );
};

export default DrawCardPage;
