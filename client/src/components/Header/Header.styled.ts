import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {darken} from 'polished';

const Nav = styled(motion.div)`
  height: 80px;
  /* margin-top: -70px; */
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  align-items: center;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavbarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr 3fr 1fr;
  max-width: 1140px;
  padding: 0 20px;

  //display: flex;
  //justify-content: space-between;
  //height: 70px;
  z-index: 1;
  //width: 100%;
  //padding: 0 24px;
  //max-width: 1100px;
  //margin-top: 10px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 15fr 1fr;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImgDiv = styled(Link)`
  object-fit: contain;
  border: none;
  border-radius: 10px;
  background-image: url('/logo/2.png');
  background-size: contain;
  width: 35px;
  height: 35px;
`;

const NavLogo = styled(Link)`
  color: black;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;
`;
const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #404040;
  }
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  //margin-right: -22px;
  //margin-top: 5px;
  //padding: 6px;
  justify-self: center;
  align-self: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavItem = styled(Link)`
  /* height: 80px; */
  height: 100%;
  margin: 3px;
  &:hover {
    background: rgb(241, 241, 241);
    border-radius: 20px 20px 20px 20px;
  }
`;
const NavLink = styled.div`
  font-weight: 600;
  //color: #616161;
  color: rgb(123, 123, 123);
  font-size: 14px;
  display: flex;
  gap: 5px;
  align-items: center;
  text-decoration: none;
  padding: 1rem 1rem;
  height: 100%;
`;

// const NavBtn = styled.nav`
//   display: flex;
//   align-items: center;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;
const NavBtnLink = styled.button`
  align-items: center;
  display: flex;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 20px;
  background: ${props => props.theme.mainColor};
  white-space: nowrap;
  padding: 1rem 1rem;
  color: #fff;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    //background: #fff;
    //color: #010606;
    background: ${props => darken(0.1, props.theme.mainColor)};
  }
  &:active {
    background: ${props => darken(0.2, props.theme.mainColor)};
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MyInfoBox = styled.div`
  justify-self: right;
  align-self: center;
  padding-right: 20px;
`;

export default {
  Nav,
  NavbarContainer,
  Logo,
  LogoImgDiv,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  // NavBtn,
  NavBtnLink,
  MyInfoBox,
};
