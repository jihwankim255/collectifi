import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const PostLayout = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  width: 100%;
  margin-top: 5px;
  border-top: 1px solid #d4d4d4;
  border-bottom: 1px solid #d4d4d4;
  align-self: flex-start;
  font-size: 18px;
  font-weight: 600;
  padding: 15px;
`;
const WriterDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d4d4d4;
  padding: 4px;
  margin-bottom: 15px;
`;
const WriteContent = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  line-height: 1.2;
  text-align: center;
`;
const Writer = styled.span`
  padding: 10px;
  display: flex;
  align-items: center;
`;
const DateS = styled.span`
  display: flex;
  padding: 10px;
  gap: 30px;
`;
const PostForm = styled.form`
  width: 100%;
`;
const PostLikeDiv = styled.div`
  margin-bottom: 12px;
`;
const LikeCount = styled.span`
  color: ${props => props.theme.mainColor};
  margin-right: 5px;
`;
const DisLikeCount = styled.span`
  margin-left: 5px;
`;

const IsOwner = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 10px;
`;
const OwnersBtn = styled.div`
  /* background: #f1356d; */
  color: black;
  white-space: nowrap;
  padding: 10px 20px;
  border-radius: 12px;
  border: 1px solid #cacaca;
  cursor: pointer;
  font-size: 11px;
  font-weight: bold;
  margin-right: 7px;
  margin-left: 7px;
`;

// 댓글 컴포넌트
const CommentContainer = styled.div`
  width: 100%;
  /* background: #dcdcdc; */
  padding: 10px;
`;
const Comment = styled.div`
  padding: 7px;
  /* height: 200px; */
  margin: 10px 10px 10px 10px;
  border: 1px solid #b5b5b5;
  border-radius: 10px;
  /* background: green; */
`;
const CommentUser = styled.div`
  padding: 5px;
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;
const NickRank = styled.div`
  display: flex;
  align-items: center;
`;
const CrownIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  color: #e9e900;
`;
const EditButton = styled(FontAwesomeIcon)`
  margin-right: 7px;
  cursor: pointer;
`;
const DeleteButton = styled(FontAwesomeIcon)`
  margin-left: 10px;
  margin-right: 20px;
  cursor: pointer;
`;
const CheckButton = styled(FontAwesomeIcon)`
  margin-left: 10px;
  margin-right: 20px;
  cursor: pointer;
`;
const CloseButton = styled(FontAwesomeIcon)`
  margin-left: 10px;
  margin-right: 20px;
  cursor: pointer;
`;

const Cancel = styled.span`
  margin-right: 7px;
  cursor: pointer;

  color: black;
  white-space: nowrap;
  padding: 5px 15px;
  border-radius: 12px;
  border: 1px solid #cacaca;
  font-size: 12px;
  font-weight: bold;
`;
const Save = styled.span`
  margin-left: 10px;
  margin-right: 20px;
  cursor: pointer;
  color: black;
  white-space: nowrap;
  padding: 5px 15px;
  border-radius: 12px;
  border: 1px solid #cacaca;
  font-size: 12px;
  font-weight: bold;
`;

const CommentContent = styled.div`
  padding: 5px;
  margin: 5px;
`;
const CommentInput = styled.textarea`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 8px 14px 10px;
  /* resize: none; */
  border: 1px solid ${props => props.theme.lineColor};
  &:focus-visible {
    background-color: #fff;
    border: 1px solid grey;
  }
`;

const LieksContainer = styled.div`
  /* background: green; */
  text-align: end;
  margin-right: 30px;
  margin: 5px;
  padding: 5px;
`;
const Comment_likes = styled.span`
  margin-right: 5px;
`;

const PostTextarea = styled.textarea`
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
  resize: none;
  height: 15vh;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Thumbs = styled.span`
  cursor: pointer;
  margin-right: 5px;
`;

export default {
  PostLayout,
  Title,
  WriterDate,
  WriteContent,
  Writer,
  DateS,
  PostForm,
  PostLikeDiv,
  LikeCount,
  DisLikeCount,
  IsOwner,
  OwnersBtn,
  CommentContainer,
  Comment,
  CommentUser,
  NickRank,
  CrownIcon,
  EditButton,
  DeleteButton,
  CheckButton,
  CloseButton,
  Cancel,
  Save,
  CommentContent,
  CommentInput,
  LieksContainer,
  Comment_likes,
  PostTextarea,
  ButtonContainer,
  Thumbs,
};
