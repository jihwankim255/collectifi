import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import FloatingButton from './UI/FloatingButton';
import styled from 'styled-components';

const StyledOutlet = styled.div`
  min-height: 100vh; /* 높이를 화면 높이의 100%로 설정합니다. */
`;

export interface PageLayoutProps {
  toggle: () => void;
}

const PageLayout = ({toggle}: PageLayoutProps) => (
  <>
    <Header toggle={toggle} />
    <StyledOutlet>
      <Outlet />
    </StyledOutlet>
    <FloatingButton />
    <Footer />
  </>
);

export default PageLayout;
