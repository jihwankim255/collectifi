import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState, useRecoilRefresher_UNSTABLE } from 'recoil';
import { currentUserId, getUserQuery, getCardListQuery, getPostListQuery } from '../../modules/mypage/atom';
import { userNickname } from '../../modules/atom';

import { nft, post } from '../../modules/type';
import PageTitle from '../UI/PageTitle';
import Tab from '../UI/Tab';
import CardList from '../market/CardList';
import PlayerCard, { Glow } from '../UI/PlayerCard';
import CardListItem from '../market/CardListItem';
import BoardList from '../UI/BoardList';
import BoardTitleItem from '../UI/BoardTitleItem';
import BoardListItem from '../UI/BoardListItem';
import BoardListItemInfo from '../UI/BoardListItemInfo';
import EditNickname from './EditNickname';


const MyPage = () => {
  const { id } = useParams();
  //refresh
  const userRefresh = useRecoilRefresher_UNSTABLE(getUserQuery); 
  const cardRefresh = useRecoilRefresher_UNSTABLE(getCardListQuery);
  const postRefresh = useRecoilRefresher_UNSTABLE(getPostListQuery);
  //recoil
  const nickname = useRecoilValue(userNickname);
  const setCurrId = useSetRecoilState(currentUserId);
  const userInfo = useRecoilValue(getUserQuery);
  const cardList = useRecoilValue(getCardListQuery);
  const postList = useRecoilValue(getPostListQuery);  

  useEffect(() => {
    if(id) setCurrId(parseInt(id));
    userRefresh();
    cardRefresh();
    postRefresh();
  }, [id]);

  if(!userInfo || !cardList || !postList) return <></>
  console.log(userInfo, cardList, postList);
  const cardWidth = '250px';  

  const infoTitle = ["ADDRESS", "TOKEN AMOUNT", "NICKNAME"];
  const infoData = [userInfo.user.address.slice(0, 10), 
    userInfo.user.token_amount, 
    userInfo.isOwner ? nickname : userInfo.user.nickname,
  ];

  return (
    <MyPageLayout>      
      <PageTitle title={userInfo.isOwner ? 'MY Page' : `${userInfo.user.nickname}'s PAGE`} />
      <div className='top'>
        <BoardList>
          {infoData.map((el, i, arr) => {
            if(!el) return <></>;
            const listItem = [infoTitle[i], el];
            return (<BoardListItemInfo key={i} 
              listItem={listItem} 
              gridTemplateColumns='1fr 1fr'
              isLast={arr.length === i + 1}
              />)
          })}
        </BoardList>
        {userInfo.isOwner && <div className='edit-wrap'>
          <EditNickname />
        </div>}
      </div>      
      <Tab title={[userInfo.isOwner ? 'MY CARD' : 'CARD',
        userInfo.isOwner ? 'MY POST' : 'POST',
        userInfo.isOwner && 'GET OFFER']}
      >
        <CardList itemWidth={cardWidth}>
          {cardList.map((el: nft, i: number) => {
            return (
              <CardListItem
                key={i}
                info={el.isSell ? 'FOR SAIL': undefined}
                linkTo={`/market/${el.token_id}`} 
              >
                <PlayerCard
                  imgSrc={el.img_url}
                  //cardWidth={cardWidth}
                  //glow={Glow.orange}
                />
              </CardListItem>
            );
          })}
        </CardList>
        <BoardList
          title={
            <BoardTitleItem
              title={['NO', 'TITLE', 'DATE', 'VIEW', 'LIKE']}
              gridTemplateColumns="1fr 3fr 1fr 1fr 1fr"
            />
          }
        >
          {postList.map((el: post, i: number) => {
            const date = new Date(el.created_at);
            const formattedDate = date.toLocaleDateString();
            const listItem = [el.id, el.title, formattedDate, el.views, el.likes];
            return (
              <BoardListItem
                key={i}
                listItem={listItem}
                gridTemplateColumns="1fr 3fr 1fr 1fr 1fr"
                linkTo={`/community/detail/${el.id}`}
              />
            );
          })}
        </BoardList>
        {userInfo.isOwner && <BoardList
          title={
            <BoardTitleItem
              title={['OFFER1', 'OFFER2', 'OFFER3', 'OFFER4', 'OFFER5']}
              gridTemplateColumns="1fr 2fr 2fr 1fr 1fr"
            />
          }
        >
          {new Array(10).fill(0).map((el, i) => {
            const listItem = ['test1', 'test2', 'test3', 'test4', 'test5'];
            return (
              <BoardListItem
                key={i}
                listItem={listItem}
                gridTemplateColumns="1fr 2fr 2fr 1fr 1fr"
                linkTo={`${i}`}
              />
            );
          })}
        </BoardList>}
      </Tab>
    </MyPageLayout>
  );
};

export default MyPage;

const MyPageLayout = styled.div`
  padding: 20px 20px 10px;
  max-width: 1140px;
  margin: 0 auto;

  & .top {
    margin-bottom: 40px;
    //display: grid;
    //grid-template-columns: minmax(auto, 400px) auto;
    max-width: 400px;    
  }

  // @media only screen and (max-width:560px) {
  //   & .top { 
  //     grid-template-columns: auto;
  //   }    
  // }
`;
