import styled from 'styled-components';
import {Sidebar, Menu, MenuItem, SubMenu} from 'react-pro-sidebar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import BoardList from '../../components/UI/BoardList';
import BoardListItem from '../../components/UI/BoardListItem';

interface MenuItemSProps {
  active: boolean;
}

const Container = styled.div`
  /* background-color: grey; */
  padding: 50px;
  width: 100%;
  height: 100%;
  display: flex;
`;

const Layout = styled.div`
  /* background-color: #4343f4; */
  padding: 50px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  /* background-color: brown; */
  display: flex;
  width: 100%;
  font-size: 50px;
  font-weight: 600;
`;

const MenuBox = styled.div`
  display: flex;
  background-color: aquamarine;
  width: 300px;
  flex-direction: column;

  align-items: center;
  height: 100%;
`;

const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  width: 100%;
  height: 100%;
  /* background: green; */
`;

const Content = styled.div`
  background-color: red;
  height: 100%;
  width: 100%;
`;

const MenuItemS = styled(MenuItem)<MenuItemSProps>`
  background: ${props => (props.active ? '#bdbdbd' : 'white')};
`;
const PostDetail = styled.div<{active: boolean}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 10px 5px 10px;
  padding: 25px 30px 30px 40px;
  display: ${props => (props.active ? '' : 'none')};
`;
const TrashIcon = styled(FontAwesomeIcon)`
  margin: 15px;
  margin-right: 50px;
  padding: 20px;
  cursor: pointer;
`;
const CommentDetail = styled.div<{active: boolean}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 10px 5px 10px;
  padding: 25px 30px 30px 40px;
  display: ${props => (props.active ? '' : 'none')};
`;
const WinDetail = styled.div<{active: boolean}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 10px 5px 10px;
  padding: 25px 30px 30px 40px;
  display: ${props => (props.active ? '' : 'none')};
`;

const WinBox = styled.div`
  background-color: #fd115c;
  padding: 10px;
  font-size: 30px;
  color: white;
  font-weight: 600;
  margin-right: 20px;
  border-radius: 10px;

  :hover {
    cursor: pointer;
  }
`;

const BanIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const BoardListAdmin = styled(BoardList)`
  width: 100%;
  height: 100%;
  /* background-color: brown; */
`;

const BoardListItemAdmin = styled(BoardListItem)`
  width: 100%;
  height: 100%;
  /* background-color: yellow; */
`;

export default {
  Container,
  Layout,
  TopBar,
  MenuBox,
  ContentBox,
  Content,
  MenuItemS,
  PostDetail,
  TrashIcon,
  CommentDetail,
  WinDetail,
  WinBox,
  BanIcon,
  BoardListAdmin,
  BoardListItemAdmin,
};
