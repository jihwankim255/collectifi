import React from 'react';
import Styled from './Sidebar.styled';

const Sidebar = ({isOpen, toggle}: {isOpen: boolean; toggle: () => void}) => {
  return (
    <Styled.SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Styled.Icon>
        <Styled.CloseIcon />
      </Styled.Icon>
      <Styled.SidebarWrapper>
        <Styled.SidebarMenu>
          <Styled.SidebarLink to="/draw">Pack</Styled.SidebarLink>
          <Styled.SidebarLink to="/upgrade">Upgrade</Styled.SidebarLink>
          <Styled.SidebarLink to="/staking">Staking</Styled.SidebarLink>
          <Styled.SidebarLink to="/swap">Swap</Styled.SidebarLink>
          <Styled.SidebarLink to="/market">Market</Styled.SidebarLink>
          <Styled.SidebarLink to="/win">Win</Styled.SidebarLink>
          <Styled.SidebarLink to="/community">Community</Styled.SidebarLink>
        </Styled.SidebarMenu>
        <Styled.SideBtnWrap>
          <Styled.SidebarRoute>Connect</Styled.SidebarRoute>
        </Styled.SideBtnWrap>
      </Styled.SidebarWrapper>
    </Styled.SidebarContainer>
  );
};

export default Sidebar;
