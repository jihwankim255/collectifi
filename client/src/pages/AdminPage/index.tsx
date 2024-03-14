import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Styled from './Admin.styled';
import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import {faUser, faComment, faEdit, faMessage, faListAlt} from '@fortawesome/free-regular-svg-icons';
import {faList, faTrash, faBan} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import BoardTitleItem from '../../components/UI/BoardTitleItem';

import Pagination from '../../components/UI/Pagination';
import {toast} from 'react-toastify';

interface IUsers {
  address: string;
  id: number;
  nickname: string;
  rank: number;
  referral?: string;
  token_amount: number;
}
interface IPosts {
  content: string;
  created_at: Date;
  dislikes: number;
  id: number;
  likes: number;
  title: string;
  user_id: number;
  views: number;
}
interface IComments {
  content: string;
  created_at: Date;
  dislikes: number;
  id: number;
  likes: number;
  post_id: number;
  user_id: number;
}
interface IBans {
  id: number;
  address: string;
  created_at: Date;
}
interface IWins {
  winDiainage: number;
  loseDiainage: number;
  drawDiainage: number;
  winToken: number;
  loseToken: number;
  drawToken: number;
  totalToken: number;
}

const Admin = () => {
  // 공통
  const [menu, setMenu] = useState(0);
  const boardSize = '0.3fr 3fr 1fr 1fr 0.5fr 0.5fr';

  // Users
  const [users, setUsers] = useState<IUsers[]>([]);
  const [usersLength, setUsersLength] = useState(users.length);
  const [userCurrentPage, setUserCurrentPage] = useState(1);
  const usersPerPage = 10;
  const indexOfLastUsers = userCurrentPage * usersPerPage;
  const indexOfFirstUsers = indexOfLastUsers - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUsers, indexOfLastUsers);
  const userPaginate = (pageNumber: number) => {
    setUserCurrentPage(pageNumber);
  };
  // Posts
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [postsLength, setPostsLength] = useState(posts.length);
  const [postCurrentPage, setPostCurrentPage] = useState(1);
  const postsPerPage = 10;
  const indexOfLastPosts = postCurrentPage * postsPerPage;
  const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPosts, indexOfLastPosts);
  const postPaginate = (pageNumber: number) => {
    setPostCurrentPage(pageNumber);
  };
  const [activePost, setActivePost] = useState(0);
  const showPostDetail = (id: number) => {
    if (activePost !== id) {
      setActivePost(id);
    } else {
      setActivePost(0);
    }
  };

  // Comments
  const [comments, setComments] = useState<IComments[]>([]);
  const [commentsLength, setCommentsLength] = useState(comments.length);
  const [commentCurrentPage, setCommentCurrentPage] = useState(1);
  const commentsPerPage = 20;
  const indexOfLastComments = commentCurrentPage * commentsPerPage;
  const indexOfFirstComments = indexOfLastComments - commentsPerPage;
  const currentComments = comments.slice(indexOfFirstComments, indexOfLastComments);
  const commentPaginate = (pageNumber: number) => {
    setCommentCurrentPage(pageNumber);
  };
  const [activeComment, setActiveComment] = useState(0);
  const showCommentDetail = (id: number) => {
    if (activeComment !== id) {
      console.log('post id: ', id);
      setActiveComment(id);
    } else {
      setActiveComment(0);
    }
  };

  // Bans
  const [bans, setBans] = useState<IBans[]>([]);
  const [bansLength, setBansLength] = useState(bans.length);
  const [banCurrentPage, setBanCurrentPage] = useState(1);
  const bansPerPage = 10;
  const indexOfLastBans = banCurrentPage * bansPerPage;
  const indexOfFirstBans = indexOfLastBans - bansPerPage;
  let currentBans = bans.slice(indexOfFirstBans, indexOfLastBans);
  const banPaginate = (pageNumber: number) => {
    setBanCurrentPage(pageNumber);
  };

  // Win
  const [wins, setWins] = useState<IWins[]>([]);
  const [winsLength, setWinsLength] = useState(wins.length);
  const [winCurrentPage, setWinCurrentPage] = useState(1);
  const winsPerPage = 10;
  const indexOfLastWins = winCurrentPage * winsPerPage;
  const indexOfFirstWins = indexOfLastWins - winsPerPage;
  const currentWins = wins.slice(indexOfFirstWins, indexOfLastWins);
  const winPaginate = (pageNumber: number) => {
    setWinCurrentPage(pageNumber);
  };
  const [activeWin, setActiveWin] = useState(-1);
  const showWinDetail = (idx: number) => {
    if (activeWin !== idx) {
      console.log('win id: ', idx);
      setActiveWin(idx);
    } else {
      setActiveWin(-1);
    }
  };

  useEffect(() => {
    if (menu === 0) {
      if (users.length === 0) {
        axios
          .get(`${process.env.REACT_APP_BASE_URL}/admin/users`, {withCredentials: true})
          .then(res => {
            setUsers(res.data.data.users);
            setUsersLength(res.data.data.users.length);
            setUserCurrentPage(1);
          });
      } else {
        console.log('이미 users 데이터가 존재');
      }
    } else if (menu === 1) {
      if (posts.length === 0) {
        axios
          .get(`${process.env.REACT_APP_BASE_URL}/admin/posts`, {withCredentials: true})
          .then(res => {
            // setPosts(res.data.data.posts);
            setPosts(
              [...res.data.data.posts].map(post => {
                return {
                  ...post,
                  created_at: new Date(post.created_at),
                };
              }),
            );
            setPostsLength(res.data.data.posts.length);
            setPostCurrentPage(1);
          });
      } else {
        console.log('이미 posts 데이터가 존재');
      }
    } else if (menu === 2) {
      if (comments.length === 0) {
        axios
          .get(`${process.env.REACT_APP_BASE_URL}/admin/comments`, {withCredentials: true})
          .then(res => {
            setComments(res.data.data.comments);
            setCommentsLength(res.data.data.comments.length);
            setCommentCurrentPage(1);
            console.log('댓글: ', res.data.data.comments);
          });
      } else {
        console.log('이미 comments 데이터가 존재');
      }
    } else if (menu === 3) {
      if (bans.length === 0) {
        axios
          .get(`${process.env.REACT_APP_BASE_URL}/admin/blacklists`, {withCredentials: true})
          .then(res => {
            setBans(
              [...res.data.data.blacklists].map(black => {
                return {
                  ...black,
                  created_at: new Date(black.created_at),
                };
              }),
            );
            setBansLength(res.data.data.blacklists.length);
            setBanCurrentPage(1);
          });
      } else {
        console.log('이미 blacklists 데이터가 존재');
      }
    } else if (menu === 4) {
      if (wins.length === 0) {
        axios
          .get(`${process.env.REACT_APP_BASE_URL}/admin/win`, {withCredentials: true})
          .then(res => {
            setWins([res.data.data]);
            // setWins(
            //   [...res.data.data.blacklists].map(black => {
            //     return {
            //       ...black,
            //       created_at: new Date(black.created_at),
            //     };
            //   }),
            // );
            setWinsLength(res.data.data.length);
            setWinCurrentPage(1);
            console.log('Win: ', res.data.data);
          });
      } else {
        console.log('이미 wins 데이터가 존재');
      }
    }
  }, [menu]);

  // 유저 블랙
  const banUser = (address: string) => {
    if (confirm('Are you sure you want to ban?')) {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/admin/user`, {address}, {withCredentials: true})
        .then(res => {
          toast.success('Banned user successfully');

          setBans(prev => [...prev, res.data.message]);
          console.log('Banned user successfully', res.data.message);
        })
        .catch(error => {
          toast.error('Failed to ban user', error);
        });
    }
  };

  const unbanUser = (address: string) => {
    if (confirm('Are you sure you want to unban?')) {
      axios
        .delete(`${process.env.REACT_APP_BASE_URL}/admin/blacklist`, {
          data: {address},
          withCredentials: true,
        })
        .then(res => {
          toast.success('Unbanned user successfully');

          setBans(prev => [...prev].filter(a => a.address !== address));
          console.log('Unbanned user successfully', res.data.message);
        })
        .catch(error => {
          toast.error('Failed to unban user', error);
        });
    }
  };

  useEffect(() => {
    currentBans = bans.slice(indexOfFirstBans, indexOfLastBans);
  }, [bans]);

  const deletePost = (id: number) => {
    if (confirm('Are you sure you want to delete post?')) {
      axios
        .delete(`${process.env.REACT_APP_BASE_URL}/admin/post`, {data: {id}, withCredentials: true})
        .then(res => {
          toast.success('Deleted post successfully');

          setPosts(prev => [...prev].filter(a => a.id !== id));
          setComments(prev => [...prev.filter(a => a.post_id !== id)]);
          console.log('Deleted post successfully', res.data.message);
        })
        .catch(error => {
          toast.error('Failed to delete post', error);
        });
    }
  };
  const deleteComment = (id: number) => {
    if (confirm('Are you sure you want to delete comment?')) {
      axios
        .delete(`${process.env.REACT_APP_BASE_URL}/admin/comment`, {
          data: {id},
          withCredentials: true,
        })
        .then(res => {
          toast.success('Deleted comment successfully');

          setComments(prev => [...prev].filter(a => a.id !== id));
        })
        .catch(error => {
          toast.error('Failed to delete comment', error);
        });
    }
  };

  const handleReward = async (e: any) => {
    if (confirm(`Are you sure to give reward to ${e}???`)) {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/admin/win`,
        {e},
        {withCredentials: true},
      );
      if (response.status == 200) {
        alert('Reward to Winner Success!!!');
        toast.success('Reward to Winner Success!!!');
      }
    } else {
      console.log('no');
    }
  };

  return (
    <Styled.Layout>
      <Styled.TopBar>Collectifi Admin</Styled.TopBar>
      <Styled.Container>
        <Sidebar style={{fontSize: 25, fontWeight: 600}}>
          <Menu>
            <SubMenu label="Database">
              <Styled.MenuItemS active={menu === 0} onClick={() => setMenu(0)}>
                <FontAwesomeIcon icon={faUser} style={{marginRight: 10}} />
                Users
              </Styled.MenuItemS>
              <Styled.MenuItemS active={menu === 1} onClick={() => setMenu(1)}>
                <FontAwesomeIcon icon={faList} style={{marginRight: 10}} />
                Posts
              </Styled.MenuItemS>
              <Styled.MenuItemS active={menu === 2} onClick={() => setMenu(2)}>
                <FontAwesomeIcon icon={faMessage} style={{marginRight: 10}} />
                Comments
              </Styled.MenuItemS>
              <Styled.MenuItemS active={menu === 3} onClick={() => setMenu(3)}>
                <FontAwesomeIcon icon={faBan} style={{marginRight: 10}} />
                BlackLists
              </Styled.MenuItemS>
            </SubMenu>
            <Styled.MenuItemS active={menu === 4} onClick={() => setMenu(4)}>
              Win
            </Styled.MenuItemS>
          </Menu>
        </Sidebar>

        {menu === 0 && (
          <Styled.ContentBox>
            <Styled.BoardListAdmin
              title={
                <BoardTitleItem
                  title={[
                    'ID',
                    'NICKNAME',
                    'ADDRESS',
                    'RANK',
                    'REFERRAL',
                    'TOKEN_AMOUNT',
                    'BAN_USER',
                  ]}
                  gridTemplateColumns={'0.3fr 1fr 1fr 1fr 1fr 1fr 0.5fr'}
                />
              }
            >
              {currentUsers &&
                currentUsers.map(user => {
                  const listItemU = [
                    user.id,
                    user.nickname,
                    user.address,
                    user.rank,
                    user.referral || 'None',
                    user.token_amount,
                    <Styled.BanIcon
                      onClick={() => banUser(user.address)}
                      key={user.id}
                      icon={faBan}
                    />,
                  ];
                  return (
                    <Styled.BoardListItemAdmin
                      key={user.id}
                      listItem={listItemU}
                      gridTemplateColumns={'0.3fr 1fr 1fr 1fr 1fr 1fr 0.5fr'}
                      linkTo={''}
                      onClick={() => banUser(user.address)}
                    />
                  );
                })}
            </Styled.BoardListAdmin>
            <Pagination
              dataPerPage={usersPerPage}
              dataLength={usersLength}
              paginate={userPaginate}
              currentPage={userCurrentPage}
              setCurrentPage={setUserCurrentPage}
            />
          </Styled.ContentBox>
        )}

        {menu === 1 && (
          <Styled.ContentBox>
            <Styled.BoardListAdmin
              title={
                <BoardTitleItem
                  title={['ID', 'TITLE', 'USER', 'DATE', 'VIEW', 'LIKES/DISLIKES']}
                  gridTemplateColumns={boardSize}
                />
              }
            >
              {currentPosts &&
                currentPosts.map(post => {
                  const listItemP = [
                    post.id,
                    post.title,
                    post.user_id,
                    post.created_at.toString(),
                    post.views,
                    `${post.likes} / ${post.dislikes}`,
                    // <FontAwesomeIcon key={post.id} icon={faTrash} />,
                  ];
                  return (
                    <>
                      <Styled.BoardListItemAdmin
                        key={post.id}
                        listItem={listItemP}
                        gridTemplateColumns={boardSize}
                        linkTo={''}
                        onClick={() => showPostDetail(post.id)}
                      />
                      <Styled.PostDetail active={activePost === post.id}>
                        <div>{post.content}</div>
                        <Styled.TrashIcon
                          onClick={() => deletePost(post.id)}
                          key={post.id}
                          icon={faTrash}
                        />
                      </Styled.PostDetail>
                    </>
                  );
                })}
            </Styled.BoardListAdmin>
            <Pagination
              dataPerPage={postsPerPage}
              dataLength={postsLength}
              paginate={postPaginate}
              currentPage={postCurrentPage}
              setCurrentPage={setPostCurrentPage}
            />
          </Styled.ContentBox>
        )}
        {menu === 2 && (
          <Styled.ContentBox>
            <Styled.BoardListAdmin
              title={
                <BoardTitleItem
                  title={['ID', 'CONTENT', 'POST_ID', 'USER_ID', 'DATE', 'LIKES/DISLIKES']}
                  gridTemplateColumns={boardSize}
                />
              }
            >
              {currentComments &&
                currentComments.map(comment => {
                  const listItemC = [
                    comment.id,
                    comment.content,
                    comment.post_id,
                    comment.user_id,
                    comment.created_at.toString(),
                    `${comment.likes} / ${comment.dislikes}`,
                    // <FontAwesomeIcon key={comment.id} icon={faTrash} />,
                  ];
                  return (
                    <>
                      <Styled.BoardListItemAdmin
                        key={comment.id}
                        listItem={listItemC}
                        gridTemplateColumns={boardSize}
                        linkTo={''}
                        onClick={() => showCommentDetail(comment.id)}
                      />
                      <Styled.CommentDetail active={activeComment === comment.id}>
                        <div>{comment.content}</div>
                        <Styled.TrashIcon
                          onClick={() => deleteComment(comment.id)}
                          key={comment.id}
                          icon={faTrash}
                        />
                      </Styled.CommentDetail>
                    </>
                  );
                })}
            </Styled.BoardListAdmin>
            <Pagination
              dataPerPage={commentsPerPage}
              dataLength={commentsLength}
              paginate={commentPaginate}
              currentPage={commentCurrentPage}
              setCurrentPage={setCommentCurrentPage}
            />
          </Styled.ContentBox>
        )}

        {menu === 3 && (
          <Styled.ContentBox>
            <Styled.BoardListAdmin
              title={
                <BoardTitleItem
                  title={['ID', 'ADDRESS', 'DATE']}
                  gridTemplateColumns={'0.5fr 0.5fr 1fr 0.5fr'}
                />
              }
            >
              {currentBans &&
                currentBans.map(ban => {
                  const listItemB = [
                    ban.id,
                    ban.address,
                    ban.created_at.toString(),
                    <FontAwesomeIcon
                      onClick={() => banUser(ban.address)}
                      key={ban.id}
                      icon={faBan}
                    />,
                  ];
                  return (
                    <Styled.BoardListItemAdmin
                      key={ban.id}
                      listItem={listItemB}
                      gridTemplateColumns={'0.5fr 0.5fr 1fr 0.5fr'}
                      linkTo={''}
                      onClick={() => unbanUser(ban.address)}
                    />
                  );
                })}
            </Styled.BoardListAdmin>
            <Pagination
              dataPerPage={bansPerPage}
              dataLength={bansLength}
              paginate={banPaginate}
              currentPage={banCurrentPage}
              setCurrentPage={setBanCurrentPage}
            />
          </Styled.ContentBox>
        )}

        {menu === 4 && (
          <Styled.ContentBox>
            <Styled.BoardListAdmin
              title={
                <BoardTitleItem
                  title={[
                    'GAME',
                    'TOTAL TOKEN',
                    'WIN',
                    'DRAW',
                    'LOSE',
                    'WIN DRAIN',
                    'DRAW DRAIN',
                    'LOSE DRAIN',
                    'STATUS',
                  ]}
                  gridTemplateColumns={'1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'}
                />
              }
            >
              {currentWins &&
                currentWins.map((win, idx) => {
                  const listItemW = [
                    'TOT vs MCU',
                    win.totalToken,
                    win.winToken,
                    win.drawToken,
                    win.loseToken,
                    win.winDiainage,
                    win.drawDiainage,
                    win.loseDiainage,
                    'End',
                  ];
                  return (
                    <>
                      <Styled.BoardListItemAdmin
                        key={idx}
                        listItem={listItemW}
                        gridTemplateColumns={'1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'}
                        linkTo={''}
                        onClick={() => showWinDetail(idx)}
                      />
                      <Styled.WinDetail active={activeWin === idx}>
                        <Styled.WinBox onClick={() => handleReward('win')}>WIN</Styled.WinBox>
                        <Styled.WinBox onClick={() => handleReward('draw')}>DRAW</Styled.WinBox>
                        <Styled.WinBox onClick={() => handleReward('lose')}>LOSE</Styled.WinBox>
                      </Styled.WinDetail>
                    </>
                  );
                })}
            </Styled.BoardListAdmin>
            <Pagination
              dataPerPage={winsPerPage}
              dataLength={winsLength}
              paginate={winPaginate}
              currentPage={winCurrentPage}
              setCurrentPage={setWinCurrentPage}
            />
          </Styled.ContentBox>
        )}
      </Styled.Container>
    </Styled.Layout>
  );
};

export default Admin;
