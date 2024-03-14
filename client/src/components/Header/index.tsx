import React, {useEffect, useState} from 'react';
import Styled from './Header.styled';
// import { Link } from 'react-scroll';
import {useAnimation, useScroll} from 'framer-motion';
import {FaBars} from 'react-icons/fa';
import {PageLayoutProps} from '../PageLayout';
// import {f} from '@fortawesome/react-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Dropdown from '../Dropdown';
import axios from 'axios';
import {useRecoilValue, useRecoilCallback, useRecoilRefresher_UNSTABLE} from 'recoil';
import {userAddr, userId, userNickname, userAmount, userReferral, logoutQuery} from '../../atom';
import {getUserQuery} from '../../api/mypage/atom';
import MyInfo from '../MyInfo';
import Cookies from 'js-cookie';
import {toast} from 'react-toastify';
import {menu} from './menu';
declare global {
  interface Window {
    ethereum?: {
      request: (args: any) => Promise<any>;
    };
  }
}
const navVariants = {
  top: {
    backgroundColor: 'rgb(250, 250, 250)', // 'white', '#333333',
    boxShadow: 'none',
  },
  scroll: {
    //backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
};

const Header = ({toggle}: PageLayoutProps) => {
  const [dropdown, setDropdown] = useState('');
  //const [account, setAccount] = useState('');
  const currId = useRecoilValue(userId);
  const logoutRefresh = useRecoilRefresher_UNSTABLE(logoutQuery);
  const userRefresh = useRecoilRefresher_UNSTABLE(getUserQuery);

  const onMouseEnter = (e: string) => {
    if (window.innerWidth < 768) {
      setDropdown(e);
    } else {
      setDropdown(e);
    }
  };

  const onMouseLeave = () => {
    setDropdown('');
  };

  const headerAnimation = useAnimation();
  const {scrollY} = useScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 50) {
        headerAnimation.start('scroll');
        // setDarkMode(false);
      } else {
        headerAnimation.start('top');
        // setDarkMode(true);
      }
    });
  }, [scrollY, headerAnimation]);

  const login = useRecoilCallback(({set}) => async () => {
    if (!window.ethereum) {
      toast.error('Ethereum not detected in browser');
      return;
    }
    await window.ethereum
      .request({
        method: 'eth_requestAccounts',
      })
      .then(res => {
        //setAccount(res[0]);
        // 백엔드로 로그인 요청
        axios
          .post(
            `${process.env.REACT_APP_BASE_URL}/login`,
            {address: res[0]},
            {withCredentials: true},
          )
          .then(res => {
            if (!res.data.data) return;
            set(userAddr, res.data.data.address);
            set(userId, res.data.data.id);
            set(userNickname, res.data.data.nickname);
            set(userAmount, res.data.data.token_amount);
            set(userReferral, res.data.data.referral);
            toast.success('logged in successfully! 🎉');
          });
        // setIsLoggedIn(true);
        // localStorage.setItem('isLoggedIn', res[0]);
      })
      .catch(e => {
        console.log(e);
        toast.error('logged in failed');
      });
  });

  const logout = useRecoilCallback(({snapshot, set}) => async () => {
    const result = await snapshot.getPromise(logoutQuery);
    if (!result) return;
    set(userAddr, '');
    set(userId, 0);
    set(userNickname, '');
    set(userAmount, 0);
    set(userReferral, null);
    logoutRefresh();
    userRefresh();
    toast.success('logged out successfully! 🎉');
    Cookies.remove('connect.sid');
  });

  return (
    <>
      <Styled.Nav variants={navVariants} animate={headerAnimation} initial={'top'}>
        <Styled.NavbarContainer>
          <Styled.Logo>
            <Styled.LogoImgDiv to="/" />
            <Styled.NavLogo to="/">Collectifi</Styled.NavLogo>
          </Styled.Logo>
          <Styled.MobileIcon onClick={toggle}>
            <FaBars />
          </Styled.MobileIcon>
          <Styled.NavMenu>
            {menu.map(item => (
              <Styled.NavItem
                key={item.name}
                to={item.link}
                onMouseEnter={() => onMouseEnter(item.name)}
                onMouseLeave={onMouseLeave}
              >
                <Styled.NavLink>
                  {item.name}
                  {item.submenu && (
                    <>
                      <FontAwesomeIcon icon={faCaretDown} />
                      {dropdown == item.name && (
                        <Dropdown setDropdown={setDropdown} submenu={item.submenu} />
                      )}
                    </>
                  )}
                </Styled.NavLink>
              </Styled.NavItem>
            ))}
          </Styled.NavMenu>
          <Styled.MyInfoBox>{currId !== 0 && <MyInfo />}</Styled.MyInfoBox>
          {/* <Styled.NavBtn> */}
          <Styled.NavBtnLink
            onClick={() => {
              currId === 0 ? login() : logout();
            }}
          >
            {currId === 0 ? 'Connect' : 'Disconnect'}
          </Styled.NavBtnLink>
          {/* </Styled.NavBtn> */}
        </Styled.NavbarContainer>
      </Styled.Nav>
    </>
  );
};

export default Header;
