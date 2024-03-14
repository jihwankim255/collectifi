import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router';
import {toast} from 'react-toastify';
import Styled from './Write.styled';

const WritePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/community/post`,
        {title, content},
        {withCredentials: true},
      )
      .then(res => {
        navigate('/community');
        toast.success('You have successfully written! 🎈');
      })
      .catch(err => {
        // alert('Please log in again.');
        toast.error('Please log in again.' + err);
        navigate('/community');
      });
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.WriteLogo to="/" style={{color: 'black'}} className="logo">
          Collectifi
        </Styled.WriteLogo>
        <Styled.Writeh2>Add a New Post</Styled.Writeh2>
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
        <Styled.WriteButton onClick={() => handleSubmit()}>Post</Styled.WriteButton>
      </Styled.WriteNav>
    </>
  );
};

export default WritePage;
