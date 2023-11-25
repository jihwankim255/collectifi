import styled, {keyframes} from 'styled-components';
import {TypeAnimation} from 'react-type-animation';
import CountUp from 'react-countup';

const MainLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const MainWrapper = styled.div`
  width: 100%;
  padding: 10px 100px 30px 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const MainImg = styled.img`
  /* left: 30px; */
  width: 100%;
  height: 100%;
  border-radius: 40px;
  /* margin: 10px 10px 10px 10px; */
  position: relative;
  z-index: 1;
`;
const MainBack = styled.div`
  background-size: contain;
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2) 10%,
      rgba(255, 255, 255, 0.3) 20%,
      rgba(255, 255, 255, 0.6) 45%,
      rgba(255, 255, 255, 0.9) 70%,
      rgba(255, 255, 255, 1) 100%
    ),
    url('/bg3.png') no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  top: -70px;
  left: 0;
  z-index: 0;
  opacity: 0.5;
  filter: blur(10px);
`;

const MainButton = styled.div`
  background: ${props => props.theme.mainColor};
  position: absolute;
  border-radius: 15px;
  top: 80%;
  left: 70%;
  z-index: 1;
  font-weight: bold;
  white-space: nowrap;
  padding: 15px 25px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transform: translate(-40%, -50%);
  @media screen and (max-width: 780px) {
    font-size: 10px;
    padding: 10px 20px;
  }
`;
const MainTypeAnimation = styled(TypeAnimation)`
  /* background: white; */
  color: #fff;
  position: absolute;
  border-radius: 5px;
  text-shadow: 4px 0 #525252;
  top: 80%;
  left: 15%;
  z-index: 1;
  font-size: 2.5em;
  @media screen and (max-width: 780px) {
    font-size: 1em;
  }
`;
const Section = styled.div`
  line-height: 0;
  position: relative;
`;
const Section2Image = styled.img`
  /* background-size: cover; */
  width: 100%;
  height: 100%;
  margin: 0 auto;
  z-index: 1;
`;
const Section3Images = styled.div`
  /* position: relative; */
  background-image: url('/upgrade_background.jpg');
`;
const Section3Image = styled.img`
  /* background-size: cover; */
  /* width: 100%;
  height: 100%;
  margin: 0 auto; */
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;
const floatAnimation1 = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;
const floatAnimation2 = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0px);
  }
`;
const floatAnimation3 = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0px);
  }
`;
const FloatingButton = styled.button`
  width: 300px;
  height: 50px;
  position: absolute;
  top: 92%;
  left: 40%;
  background-color: transparent;
  cursor: pointer;
  border: none;
`;

const FloatingDiv1 = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation-name: ${floatAnimation1};
  animation-duration: 4.2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const FloatingDiv2 = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation-name: ${floatAnimation2};
  animation-duration: 3.8s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const FloatingDiv3 = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation-name: ${floatAnimation3};
  animation-duration: 4.5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;
const CountUpS = styled(CountUp)`
  width: 100%;
  position: absolute;
  top: 5%;
  left: 41%;
  color: #f1c164;
  color: #5f4fec;
  font-family: 'Concert One', cursive;
  letter-spacing: 2.5vw;
  /* font-family: 'DynaPuff', cursive; */
  /* text-shadow: 0 0 50px #f1c164, 0 0 70px #f1c164, 0 0 90px #f1c164, 0 0 110px #f1c164,
    0 0 130px #f1c164; */
  text-shadow: -10px 0 #caa357, 0 10px #cfa655, 10px 0 #af8d4a, 0 -10px #be9c59;
  font-size: 12vw;
`;
const UpgradeBack = styled.img`
  width: 100%;
`;
const Balloon1 = styled.img`
  /* background-position: center;
  background-size: cover; */
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* height: 100%; */
  /* height: 1080px; */
`;
const Balloon2 = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export default {
  MainLayout,
  MainWrapper,
  MainImg,
  MainBack,
  MainButton,
  MainTypeAnimation,
  Section,
  Section2Image,
  Section3Images,
  Section3Image,
  floatAnimation1,
  floatAnimation2,
  floatAnimation3,
  FloatingButton,
  FloatingDiv1,
  FloatingDiv2,
  FloatingDiv3,
  CountUpS,
  UpgradeBack,
  Balloon1,
  Balloon2,
};
