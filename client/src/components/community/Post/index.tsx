import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Button from '../../UI/Button';
import axios from 'axios';
import axiosInstance from '../../../api/core';
import {data} from '../../../data/data';
import WriteStyled from '../../../pages/WritePage/Write.styled';
import CommunityStyled from '../../../pages/CommunityPage/Community.styled';
import Styled from './Post.styled';
import {faThumbsUp, faThumbsDown, faEdit} from '@fortawesome/free-regular-svg-icons';
import {faCrown, faTrash, faCheck, faClose} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {toast} from 'react-toastify';
import {userId} from '../../../atom';
import {useRecoilValue} from 'recoil';
import {PostProps, Post, Post_comment} from './types';

const PostPage = ({setCurrentPage, setPosts, posts}: PostProps) => {
  const navigate = useNavigate();
  const {id} = useParams<{id: string}>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Post_comment[]>([]);
  const [isOwner, setIsOwner] = useState(false);
  const [user_Id, setUser_Id] = useState(0);
  const recoilUserId = useRecoilValue(userId);
  const params = {
    tabs: 'General',
  };
  useEffect(() => {
    // 포스트 디테일을 불러옴
    axiosInstance(`/community/${id}`).then(res => {
      setPost(res.data.post);
      setComments(res.data.comments);
      setIsOwner(res.data.isOwner);
      setLike(res.data.post.likes);
      setdislike(res.data.post.dislikes);
      setPostTitle(res.data.post.title);
      setPostContent(res.data.post.content);
      setUser_Id(res.data.userId);
      // console.log('res: ', res);
    });
  }, [id]);
  // 게시글 수정 관련
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const handleEdit = () => {
    axiosInstance(`/community/${id}/edit`)
      .then(res => {
        navigate('/edit', {state: {title: postTitle, content: postContent, id: id}});
      })
      .catch(err => console.log('게시글 수정 err: ', err));
  };
  // 게시글 삭제 관련
  const handleDelete = () => {
    if (!confirm('Are you sure you want to delete the post?')) return;
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/community/${id}/delete`, {withCredentials: true})
      .then(res => {
        // 글삭제 성공시 글목록 다시 불러오기
        axiosInstance(`/community`, {params})
          .then(res => {
            setPosts(
              [...res.data].map(post => {
                return {
                  ...post,
                  created_at: new Date(post.created_at),
                };
              }),
            );
          })
          .catch(error => {
            console.error('글 불러오기 실패: ', error);
          });

        // alert('글을 삭제하였습니다.');
        toast.info('Deleted post successfully.');

        navigate('/community', {replace: true});
      })
      .catch(err => {
        console.log('글삭제 실패', err);
      });
  };

  // 게시글 좋아요 관련
  const [like, setLike] = useState(0);
  const [dislike, setdislike] = useState(0);
  const handleLikes = (data: string) => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/community/${id}/like`,
        {data},
        {withCredentials: true},
      )
      .then(res => {
        if (data == 'likes') {
          setLike(prev => prev + 1);
          toast.info('Like it!');
        } else if (data == 'dislikes') {
          setdislike(prev => prev + 1);
          toast.info('Dislike it!');
        }
      })
      .catch(err => {
        console.log('좋아요를 이미 눌렀습니다', err);
        toast.error(err.response.data.message);
        // alert('Recommendations are only available once a day.');
      });
  };

  // 댓글 기능 관련
  const [comment, setCommnet] = useState('');
  const [isInput, setIsInput] = useState('');
  const [editContent, setEditContent] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/community/${id}/comment`,
        {content: comment},
        {withCredentials: true},
      )
      .then(res => {
        setComments(prev => [...prev, res.data.data.result]);
        // 댓글 입력창 공백으로
        setCommnet('');
        toast.success('finished writing comments!');
      })
      .catch(err => {
        console.log('error: ', err);
        toast.error('Failed to write: ', err);
      });
  };

  // 댓글 좋아요 기능 관련
  const [commentLike, setCommentLike] = useState(0);
  const [commentDislike, setCommentDislike] = useState(0);
  const handleCommentLikes = (e: number, like: string) => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/community/${id}/comment/${e}/like`,
        {data: like},
        {withCredentials: true},
      )
      .then(res => {
        if (res.data.data.data == 'likes') {
          const newComments = comments.map(comment => {
            if (comment.id === e) {
              return {...comment, likes: comment.likes + 1};
            } else {
              return comment;
            }
          });
          setComments(newComments);
          toast.info('Like it!');
        } else if (res.data.data.data == 'dislikes') {
          const newComments = comments.map(comment => {
            if (comment.id === e) {
              return {...comment, dislikes: comment.dislikes + 1};
            } else {
              return comment;
            }
          });
          setComments(newComments);
          toast.info('Disike it!');
        } else {
          // alert('Recommendations are only available once a day.');
          toast.warning('Recommendations are only available once a day.');
        }
      })
      .catch(err => {
        console.log('좋아요를 이미 눌렀습니다', err.response.data.message);
        // alert('Recommendations are only available once a day. ' + err);
        toast.error('Failed to like comment. ' + err.response.data.message);
      });
  };
  const editComment = (e: number) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/community/${id}/comment/${e}/edit`, {
        withCredentials: true,
      })
      .then(res => {
        // Input 태그로 바꿔줌
        setIsInput(e.toString());
        // 태그 안에 내용을 입력해줌
        setEditContent(res.data.data);
      })
      .catch(err => {
        console.log('게시글 수정 err: ', err);
        toast.error('Failed to edit comment');
      });
  };
  const deleteComment = (e: number) => {
    if (!confirm('Are you sure you want to delete the comment?')) return;
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/community/${id}/comment/${e}`, {
        withCredentials: true,
      })
      .then(res => {
        toast.info('Deleted comment successfully.');
        // 프론트 변경
        setComments(prev => prev.filter(comment => comment.id !== e));
      })
      .catch(err => {
        console.log('글삭제 실패', err);
        toast.error('Error deleting comment');
      });
  };
  const editCommentCancel = () => {
    setIsInput('');
    setEditContent('');
  };
  const editCommentSave = (e: number) => {
    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/community/${id}/comment/${e}/edit`,
        {content: editContent},
        {withCredentials: true},
      )
      .then(res => {
        toast.success('Editted it successfully! 🎈');
        // 프론트 변경
        setComments(prev =>
          prev.map(comment => {
            return comment.id == e
              ? {
                  ...comment,
                  content: editContent,
                }
              : comment;
          }),
        );

        setIsInput('');
        setEditContent('');
      })
      .catch(err => {
        console.log('댓글 수정 err: ', err);
        toast.error('Failed to edit comment');
      });
  };

  return (
    <Styled.PostLayout>
      {post && (
        <>
          <Styled.Title>{postTitle}</Styled.Title>

          <Styled.WriterDate>
            <Styled.Writer>
              <div>Writer: {post.User?.nickname}</div>
              <CommunityStyled.RankIcon src={`/${post.User?.rank}.png`} alt="/0.png" />
            </Styled.Writer>
            <Styled.DateS>
              <div>View: {post.views}</div>
              <div> {post.created_at.split('T')[0]}</div>
            </Styled.DateS>
          </Styled.WriterDate>
          <Styled.WriteContent>{postContent}</Styled.WriteContent>
          <Styled.PostLikeDiv>
            <Styled.LikeCount>{like}</Styled.LikeCount>
            <WriteStyled.WriteButton onClick={() => handleLikes('likes')}>
              <FontAwesomeIcon icon={faThumbsUp} />
            </WriteStyled.WriteButton>
            <WriteStyled.WriteButton onClick={() => handleLikes('dislikes')}>
              <FontAwesomeIcon icon={faThumbsDown} />
            </WriteStyled.WriteButton>
            <Styled.DisLikeCount>{dislike}</Styled.DisLikeCount>
          </Styled.PostLikeDiv>
          {/* <Button onClick={() => navigate('/community')}>목록</Button> */}

          {recoilUserId !== 0 && isOwner && (
            <Styled.IsOwner>
              <Styled.OwnersBtn onClick={handleEdit}>Edit</Styled.OwnersBtn>
              <Styled.OwnersBtn onClick={handleDelete}>Delete</Styled.OwnersBtn>
            </Styled.IsOwner>
          )}

          <Styled.CommentContainer>
            {/* 댓글 뿌려주는 부분 */}
            {comments &&
              comments?.map(comment => (
                <Styled.Comment key={comment.id}>
                  <Styled.CommentUser>
                    <Styled.NickRank>
                      <div>{comment.User.nickname}</div>
                      {/* <CrownIcon icon={faCrown} /> */}
                      <CommunityStyled.RankIcon src={`/${comment.User?.rank}.png`} alt="/0.png" />
                    </Styled.NickRank>

                    {/* 댓쓴이와  로그인 계정이 동일한가? */}
                    {recoilUserId !== 0 && comment.Post_comment_likeds[0]?.user_id == user_Id ? (
                      <>
                        {/* 수정 버튼을 눌렀는가? */}
                        {recoilUserId !== 0 && parseInt(isInput) !== comment.id ? (
                          <div>
                            <Styled.EditButton
                              onClick={() => editComment(comment.id)}
                              icon={faEdit}
                            />
                            <Styled.DeleteButton
                              onClick={() => deleteComment(comment.id)}
                              icon={faTrash}
                            />
                          </div>
                        ) : (
                          <div>
                            <Styled.CloseButton onClick={editCommentCancel} icon={faClose} />
                            <Styled.CheckButton
                              onClick={() => editCommentSave(comment.id)}
                              icon={faCheck}
                            />
                            {/* <Cancel onClick={editCommentCancel}>Cancel</Cancel>
                        <Save onClick={editCommentSave}>Save</Save> */}
                          </div>
                        )}
                      </>
                    ) : (
                      <div></div>
                    )}
                  </Styled.CommentUser>
                  {parseInt(isInput) == comment.id ? (
                    <Styled.CommentInput
                      minLength={10}
                      maxLength={2500}
                      required
                      value={editContent}
                      onChange={e => setEditContent(e.target.value)}
                      rows={8}
                    />
                  ) : (
                    <Styled.CommentContent>{comment.content}</Styled.CommentContent>
                  )}

                  <Styled.LieksContainer>
                    {parseInt(isInput) !== comment.id ? (
                      <>
                        {' '}
                        <Styled.Comment_likes
                          onClick={() => handleCommentLikes(comment.id, 'likes')}
                        >
                          <Styled.Thumbs>
                            <FontAwesomeIcon icon={faThumbsUp} />
                          </Styled.Thumbs>
                          {comment.likes}
                        </Styled.Comment_likes>
                        <Styled.Comment_likes
                          onClick={() => handleCommentLikes(comment.id, 'dislikes')}
                        >
                          <Styled.Thumbs>
                            <FontAwesomeIcon icon={faThumbsDown} />
                          </Styled.Thumbs>
                          {comment.dislikes}
                        </Styled.Comment_likes>{' '}
                      </>
                    ) : (
                      <div></div>
                    )}
                  </Styled.LieksContainer>
                </Styled.Comment>
              ))}
          </Styled.CommentContainer>
        </>
      )}

      {/* 댓글 작성 태그 */}
      <Styled.PostForm>
        <Styled.PostTextarea
          minLength={5}
          maxLength={1000}
          required
          value={comment}
          onChange={e => setCommnet(e.target.value)}
        ></Styled.PostTextarea>
        <Styled.ButtonContainer>
          <WriteStyled.WriteButton onClick={e => handleSubmit(e)}>
            Add Comment
          </WriteStyled.WriteButton>
        </Styled.ButtonContainer>
      </Styled.PostForm>
    </Styled.PostLayout>
  );
};

export default PostPage;
