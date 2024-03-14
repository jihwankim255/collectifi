import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

import {
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
  useRecoilCallback,
  useRecoilRefresher_UNSTABLE,
} from 'recoil';
import {
  currDetailCardId,
  sellPrice,
  cardByIdQuery,
  txByIdQuery,
  getSellApproveQuery,
  getSellRegiQuery,
  getBuyApproveQuery,
  buyCardQuery,
} from '../../api/market/atom';
import {userAddr, userAmount} from '../../atom';
import {tx} from '../../api/market/type';

import {sendTx} from '../../api/wallet';
import PlayerCard, {Glow} from '../UI/PlayerCard';
import PageTitle from '../UI/PageTitle';
import BoardList from '../UI/BoardList';
import BoardTitleItem from '../UI/BoardTitleItem';
import BoardListItemInfo from '../UI/BoardListItemInfo';
import BoardListItem from '../UI/BoardListItem';
import Button from '../UI/Button';
import Tab from '../UI/Tab';
import ModalAlert from '../UI/ModalAlert';
import Input from '../UI/Input';

const CardDetail = () => {
  const {id} = useParams();
  if (!id) return <></>;

  const priceInputRef = useRef<HTMLInputElement>(null);
  //refresh
  const sellRefresh = useRecoilRefresher_UNSTABLE(getSellRegiQuery);
  const cardInfoRefresh = useRecoilRefresher_UNSTABLE(cardByIdQuery(parseInt(id)));
  const txListRefresh = useRecoilRefresher_UNSTABLE(txByIdQuery(parseInt(id)));
  //modal 변수
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  //recoil state
  const userAddress = useRecoilValue(userAddr); //user addr
  const [userTokenAmount, setUserTokenAmount] = useRecoilState(userAmount); //user 보유 토큰
  const setCardId = useSetRecoilState(currDetailCardId); //토큰 id
  //const [CardId, setCardId] = useRecoilState(currDetailCardId); //토큰 id
  const setInputSellPrice = useSetRecoilState(sellPrice); //구매자가 입력한 가격
  const txList = useRecoilValue(txByIdQuery(parseInt(id))).data.data;
  const cardById = useRecoilValue(cardByIdQuery(parseInt(id))).data.data;
  const cardInfo = cardById.nft;

  const handleSellClick = useRecoilCallback(({snapshot}) => async () => {
    //판매가 유효성 검사
    if (!priceInputRef.current) return;
    if (priceInputRef.current.value.trim() === '') {
      openModal('판매등록 실패', '판매가를 입력해 주세요.');
      return;
    }
    const priceAsNumber = Number(priceInputRef.current.value.trim());
    if (isNaN(priceAsNumber)) {
      openModal('판매등록 실패', '입력한 값이 숫자가 아니예요.');
      return;
    }
    //approve 요청
    const approve = await snapshot.getPromise(getSellApproveQuery);
    const approveResult = await sendTx(userAddress, approve.erc721ca, approve.approve);
    //const approveResult = await sendTx('0xc777aD18732279642E0f806f1aaBA232DF18d345', approve.erc721ca, approve.approve);
    if (!approveResult) {
      openModal('판매등록 실패', 'Approve 요청에 실패 했어요.');
      return;
    }
    //판매등록 요청
    const sellRegi = await snapshot.getPromise(getSellRegiQuery);
    if (!sellRegi) {
      openModal('판매등록 실패', '판매등록에 실패 했어요.');
      return;
    }
    cardInfoRefresh();
    openModal('판매등록 성공', '판매등록에 성공 했어요.');
  });

  const handleBuyClick = useRecoilCallback(({snapshot}) => async () => {
    if (userAddress === '') {
      openModal('구매 실패', '로그인이 필요해요.');
      return;
    }
    if (!cardInfo.selling_price) return;
    const priceAsNumber = Number(cardInfo.selling_price);
    if (isNaN(priceAsNumber)) {
      openModal('구매 실패', '판매가가 없어요.');
      return;
    } else if (Number(userTokenAmount) < priceAsNumber) {
      openModal('구매 실패', '판매가격 보다 높은금액이 필요해요.');
      return;
    }
    //approve 요청
    const approve = await snapshot.getPromise(getBuyApproveQuery(priceAsNumber));
    const approveResult = await sendTx(userAddress, approve.erc20ca, approve.approve);
    //const approveResult = await sendTx('0xc777aD18732279642E0f806f1aaBA232DF18d345', approve.erc20ca, approve.approve);
    //console.log(approve, userTokenAmount);
    if (!approveResult) {
      openModal('구매 실패', 'Approve 요청에 실패 했어요.');
      return;
    }
    //구매 요청
    const buCardResult = await snapshot.getPromise(
      buyCardQuery({price: priceAsNumber, ownerId: cardInfo.user_id}),
    );
    if (!buCardResult) {
      openModal('구매 실패', '구매에 실패 했어요.');
      return;
    }
    setUserTokenAmount(prev => prev - priceAsNumber);
    cardInfoRefresh();
    txListRefresh();
    openModal('구매 성공', '구매에 성공 했어요.');
  });

  const handleInputChange = () => {
    if (!priceInputRef.current) return;
    const priceAsNumber = Number(priceInputRef.current.value);
    if (isNaN(priceAsNumber)) {
      return;
    }
    setInputSellPrice(Number(priceInputRef.current.value));
  };

  const handleModalClick = () => {
    setIsOpen(false);
  };

  const openModal = (title: string, message: string) => {
    setTitle(title);
    setMessage(message);
    setIsOpen(true);
  };

  useEffect(() => {
    if (id) setCardId(parseInt(id));
    return () => {
      cardInfoRefresh();
      txListRefresh();
      sellRefresh();
    };
  }, [id]);

  const isOwner = cardById.isOwner;
  //const isOwner = false;
  const cardWidth = '350px';
  const infoTitle = ['TEAM', 'SEASON', 'AWARD', 'TEAM AWARD', 'OWNER', 'PRICE'];
  const infoData = [
    cardInfo.team,
    cardInfo.season,
    cardInfo.man_record,
    cardInfo.team_record,
    cardInfo.User.nickname,
    cardInfo.isSell && cardInfo.selling_price,
  ];
  console.log(cardInfo, txList, isOwner);
  return (
    <CDLayout width={cardWidth}>
      {isOpen && <ModalAlert title={title} message={message} onConfirm={handleModalClick} />}
      <section className="top">
        <div>
          <CDBox>
            <PlayerCard imgSrc={cardInfo.img_url} cardWidth={cardWidth} glow={Glow.orange} />
          </CDBox>
        </div>
        <div>
          <PageTitle title={cardInfo.player} />
          <BoardList>
            {infoData.map((el, i, arr) => {
              if (!el) return <></>;
              const listItem = [infoTitle[i], el];
              return (
                <BoardListItemInfo
                  key={i}
                  listItem={listItem}
                  gridTemplateColumns="2fr 8fr"
                  isLast={arr.length === i + 1}
                  linkTo={infoTitle[i] === 'OWNER' ? `/user/${cardInfo.user_id}` : undefined}
                />
              );
            })}
          </BoardList>
          <div className="btn-wrapper">
            {cardInfo.isSell && !isOwner && cardInfo.Nft_galleries.length === 0 && (
              <CDButton onClick={handleBuyClick}>BUY</CDButton>
            )}
            {!cardInfo.isSell &&
              isOwner &&
              userAddress !== '' &&
              cardInfo.Nft_galleries.length === 0 && (
                <div>
                  <label htmlFor="price-input" />
                  <Input
                    id="price-input"
                    placeholder="INPUT SELL PRICE"
                    ref={priceInputRef}
                    onChange={handleInputChange}
                  />
                  <CDButton onClick={handleSellClick}>SELL</CDButton>
                </div>
              )}
          </div>
        </div>
      </section>
      <section className="bottom">
        <div>
          <Tab title={['TX HISTORY']}>
            <BoardList
              title={
                <BoardTitleItem
                  title={['FROM', 'TO', 'PRICE', 'DATE']}
                  gridTemplateColumns="2fr 2fr 1fr 1fr"
                />
              }
            >
              {txList.map((el: tx, i: number) => {
                const date = new Date(el.created_at);
                const formattedDate = date.toLocaleDateString();
                const listItem = [el.from_address, el.to_address, el.price, formattedDate];
                return (
                  <BoardListItem
                    key={i}
                    listItem={listItem}
                    gridTemplateColumns="2fr 2fr 1fr 1fr"
                  />
                );
              })}
            </BoardList>
            <BoardList
              title={
                <BoardTitleItem
                  title={['OFFER1', 'OFFER2', 'OFFER3', 'OFFER4', 'OFFER5']}
                  gridTemplateColumns="1fr 2fr 2fr 1fr 1fr"
                />
              }
            >
              {new Array(6).fill(0).map((el, i) => {
                const listItem = ['test1', 'test2', 'test3', 'test4', 'test5'];
                return (
                  <BoardListItem
                    key={i}
                    listItem={listItem}
                    gridTemplateColumns="1fr 2fr 2fr 1fr 1fr"
                  />
                );
              })}
            </BoardList>
          </Tab>
        </div>
      </section>
    </CDLayout>
  );
};

export default CardDetail;

const CDLayout = styled.div<{width: string}>`
  padding: 60px 20px 40px;
  max-width: 1140px; //1290px;
  margin: 0 auto;

  & #price-input {
    width: 30%;
    margin-right: 20px;
  }

  & .top {
    display: grid;
    align-items: center;
    //grid-template-columns: repeat(auto-fit, minmax(200px, auto));
    //grid-template-columns: ${props => props.width} auto;
    grid-template-columns: minmax(auto, ${props => props.width}) minmax(300px, auto);
    gap: 40px;
  }

  & .bottom {
    padding: 60px 0 0;
  }

  @media only screen and (max-width: 768px) {
    padding-top: 20px;
    & .top {
      grid-template-columns: auto;
    }
  }
`;

const CDBox = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: rgba(203, 203, 203, 0.3);
  border-radius: 40px;
  padding: 40px;
  font-weight: 600;
  text-align: center;
`;

const CDButton = styled(Button)`
  margin-top: 20px;
  width: 50%;
`;
