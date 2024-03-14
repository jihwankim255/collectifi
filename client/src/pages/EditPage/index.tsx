import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useLocation, useNavigate, useParams} from 'react-router';
import {toast} from 'react-toastify';
import Styled from './Edit.styled';

const EditPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [id, setid] = useState('');
  const [author, setAuthor] = useState('mario');
  const [tag, setTag] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state.title && location.state.content) {
      setTitle(location.state.title);
      setContent(location.state.content);
      setid(location.state.id);
    }
  }, []);

  const handleSubmit = () => {
    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/community/${id}/edit`,
        {title, content},
        {withCredentials: true},
      )
      .then(res => {
        navigate('/community');
        toast.success('Editted it successfully! 🎈');
      })
      .catch(err => {
        console.log('게시글 수정 err: ', err);
        // alert('Please log in again.');
        toast.error('Please log in again.');

        navigate('/community');
      });
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.WriteLogo to="/" style={{color: 'black'}} className="logo">
          Collectifi
        </Styled.WriteLogo>
        <Styled.Writeh2>Edit Post as.. </Styled.Writeh2>
        <Styled.WriteForm>
          <Styled.WriteLabel>title</Styled.WriteLabel>
          <Styled.WriteInput
            minLength={10}
            maxLength={60}
            placeholder="제목을 입력하세요"
            type="text"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <Styled.WriteLabel>content</Styled.WriteLabel>
          <Styled.WriteTextarea
            minLength={10}
            maxLength={1500}
            required
            value={content}
            onChange={e => setContent(e.target.value)}
          ></Styled.WriteTextarea>
          <Styled.WriteInput
            placeholder="#태그입력"
            type="text"
            required
            value={tag}
            onChange={e => setTag(e.target.value)}
          />
          {/* <WriteLabel>Post author:</WriteLabel>
        <WriteSelect value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </WriteSelect> */}
        </Styled.WriteForm>
      </Styled.Wrapper>
      <Styled.WriteNav>
        <Styled.WriteButton onClick={() => handleSubmit()}>Edit</Styled.WriteButton>
      </Styled.WriteNav>
    </>
  );
};

export default EditPage;
