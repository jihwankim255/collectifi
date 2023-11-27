import React, {useState, useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import axios from 'axios';
import PostPage from '../../components/community/Post';
import Pagination from '../../components/UI/Pagination';
import Button from '../../components/UI/Button';
import BoardList from '../../components/UI/BoardList';
import BoardTitleItem from '../../components/UI/BoardTitleItem';
import BoardListItem from '../../components/UI/BoardListItem';
import PageTitle from '../../components/UI/PageTitle';
// created_at 포맷 라이브러리
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import Styled from './Community.styled';
import DetailPage from '../../components/community/DetailPage';

TimeAgo.addDefaultLocale(en);
export interface PostsAttributes {
  id: number;
  user_id: number;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  created_at: Date;
  views: number;
  Post_comments: object[];
  User?: User;
}
interface User {
  nickname: string;
  rank?: number;
}
interface IRank {
  id: number;
  user_id: number;
  post_id: number;
  likes: number;
  ranking: number;
}

const Community = () => {
  const navigate = useNavigate();
  const boardSize = '0.4fr 3fr 0.5fr 0.5fr 1fr 0.5fr 0.5fr';
  const [posts, setPosts] = useState<PostsAttributes[]>([]);
  const [popularPosts, setPopularPosts] = useState<PostsAttributes[]>([]);
  const timeAgo = new TimeAgo('en-US');
  const [tabs, setTabs] = useState('General');
  const params = {
    tabs: tabs,
  };
  useEffect(() => {
    // 모든 게시글을 불러옴

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/community`, {params})
      .then(response => {
        console.log('모든 게시글: ', response);
        setPosts(
          [...response.data.data].map(post => {
            return {
              ...post,
              created_at: new Date(post.created_at),
            };
          }),
        );
        setPostsLength(posts.length);
        setCurrentPage(1);
      })
      .catch(error => {
        console.error(error);
      });
  }, [tabs]);

  // 페이지네이션
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  // const [postsPerPage, setPostsPerPage] = useState(20); // 페이지당 posts 수
  const postsPerPage = 20;
  // 현재 posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
  const currentPopularPost = popularPosts.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const [postsLength, setPostsLength] = useState(posts.length);
  useEffect(() => {
    setPostsLength(posts.length);
    setCurrentPage(1);
  }, [posts, tabs]);

  const clickHandler = (e: string) => {
    setTabs(e);
  };

  // 필터 관련

  const filterSelected = (e: any) => {
    if (e.target.value === 'latest') {
      console.log('this is latest');
      setPosts(prev => [...prev.sort((a, b) => b.created_at.getTime() - a.created_at.getTime())]);
    } else if (e.target.value === 'views') {
      console.log('this is views');
      setPosts(prev => [...prev.sort((a, b) => b.views - a.views)]);
    } else if (e.target.value === 'likes') {
      setPosts(prev => [...prev.sort((a, b) => b.likes - a.likes)]);
      console.log('this is likes', posts);
    } else if (e.target.value === 'comments') {
      console.log('this is most commented');
      setPosts(prev => [...prev.sort((a, b) => b.Post_comments.length - a.Post_comments.length)]);
    }
  };
  // const setRankIcon = (e?: number) => {
  //   if (e === 1) {
  //     console.log('오브젝트는: ', <RankIcon src="/challenger.png" />);
  //     return <RankIcon src="/challenger.png" />;
  //   } else if (e === 2) {
  //     return <RankIcon src="/grandmaster.png" />;
  //   } else if (e === 3) {
  //     return <RankIcon src="/master.png" />;
  //   } else {
  //     return <div></div>;
  //   }
  // };
  // 랭크 가져옴

  const [ranks, setRanks] = useState<IRank[]>([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/rank`, {withCredentials: true})
      .then(response => {
        console.log('모든 랭크: ', response.data.data.ranks);
        setRanks([...response.data.data.ranks]);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Styled.CommunityLayout>
        <PageTitle title="COMMUNITY" />
        <Routes>
          <Route
            path=":id"
            element={<PostPage setCurrentPage={setCurrentPage} setPosts={setPosts} posts={posts} />}
          />
          <Route
            path="/detail/:id"
            element={
              <DetailPage setCurrentPage={setCurrentPage} setPosts={setPosts} posts={posts} />
            }
          />
        </Routes>
        <Styled.PostButtonDiv>
          <Button onClick={() => navigate('/write')}>Post</Button>
        </Styled.PostButtonDiv>
        <Styled.TabUl>
          <Styled.TabLi>
            <Styled.TabButton
              onClick={() => clickHandler('General')}
              selected={tabs === 'General'}
              color={'rgb(123, 123, 123)'}
            >
              General
            </Styled.TabButton>
          </Styled.TabLi>
          <Styled.TabLi>
            <Styled.TabButton
              onClick={() => clickHandler('Popular')}
              selected={tabs === 'Popular'}
              color={'rgb(123, 123, 123)'}
            >
              Popular
            </Styled.TabButton>
          </Styled.TabLi>
        </Styled.TabUl>

        {tabs && (
          <>
            <select onChange={filterSelected}>
              <option value="latest">Latest</option>
              <option value="views">Views</option>
              <option value="likes">Likes</option>
              <option value="comments">most commented</option>
            </select>

            <BoardList
              title={
                <BoardTitleItem
                  title={['POST', 'TITLE', 'USER', 'RANK', 'DATE', 'VIEW', 'LIKES']}
                  gridTemplateColumns={boardSize}
                />
              }
            >
              {currentPost &&
                currentPost.map(item => {
                  // const before = new Date(new Date().getTime() - item.created_at.getTime()).getTime();
                  // if (new Date().getMonth() - item.created_at.getMonth()) {
                  // }
                  const listItem = [
                    item.id,
                    `${item.title} [${item.Post_comments.length.toString()}]`,
                    `${item.User?.nickname}`,
                    // item.User?.rank,
                    <Styled.RankIcon key={item.id} src={`/${item.User?.rank}.png`} alt="/0.png" />,
                    // item.created_ats.getMonth(),
                    // (new Date() - item.created_at).toString(),
                    item.created_at.toDateString(),
                    // item.created_at.getTime(),
                    // new Date(new Date().getTime() - item.created_at.getTime()).toDateString(),
                    // before,
                    item.views,
                    item.likes,
                  ];
                  return (
                    <BoardListItem
                      key={item.id}
                      listItem={listItem}
                      gridTemplateColumns={boardSize}
                      linkTo={item.id.toString()}
                    />
                  );
                })}
            </BoardList>
            <Pagination
              dataPerPage={postsPerPage}
              dataLength={postsLength}
              paginate={paginate}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </Styled.CommunityLayout>
      <Styled.RankContainer>
        <thead>
          <tr>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {ranks.map(rank => (
            <tr key={rank.id}>
              <td>{rank.ranking}</td>
              <td>
                <Styled.RankIcon key={rank.id} src={`/${rank.ranking}.png`} alt="/0.png" />
              </td>
              {/* <span>id:{rank.id} </span> */}
              <td>User{rank.user_id - 1} | </td>
              {/* <span>글번호:{rank.post_id} </span> */}
              <td> {rank.likes}Likes</td>
            </tr>
          ))}
        </tbody>
      </Styled.RankContainer>
    </>
  );
};

export default Community;
// 351
