import styled, {css} from 'styled-components';
import {darken, lighten} from 'polished';

const CommunityLayout = styled.div`
  padding: 40px 20px 30px;
  max-width: 1140px;
  margin: 0 auto;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
    max-width: 93%;
  }
`;
const TabUl = styled.ul`
  margin-bottom: 40px;
  border-bottom: solid 1px ${props => props.theme.lineColor || 'rgb(0, 0, 0)'};
`;
const TabLi = styled.li`
  display: inline-flex;
  margin-right: 40px;
`;
const TabButton = styled.button<{selected: boolean}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: rgb(100, 109, 117);
  cursor: pointer;
  background: transparent;
  padding: 0px 0px 12px;

  ${props => {
    return css`
      color: ${props.color || 'rgb(0, 0, 0)'};
      &:hover {
        color: ${darken(0.2, props.color || 'rgb(0, 0, 0)')};
      }
      &:active {
        color: ${lighten(0.1, props.color || 'rgb(0, 0, 0)')};
      }
    `;
  }}

  ${props => {
    return (
      props.selected &&
      css`
        color: ${props.theme.mainColor || 'rgb(0, 0, 0)'};
        box-shadow: 0px 1px 0px 0px ${props.theme.mainColor || 'rgb(0, 0, 0)'};
      `
    );
  }}
`;
const PostButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  //margin: 10px;
`;
const RankIcon = styled.img`
  width: 30px;
  height: 30px;
`;
const RankContainer = styled.table`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 14px;
  padding: 10px;
  padding-bottom: 30px;
  width: 180px;
  background: rgba(255, 255, 255, 0.3);

  /* background-color: pink; */
  position: sticky;
  /* width: 13%; */
  top: 50%;
  border-radius: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 10px 20px 40px -6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  /* left: 30%; */
`;

export default {
  CommunityLayout,
  TabUl,
  TabLi,
  TabButton,
  PostButtonDiv,
  RankIcon,
  RankContainer,
};
