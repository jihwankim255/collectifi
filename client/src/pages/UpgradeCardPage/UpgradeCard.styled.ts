import styled, {keyframes} from 'styled-components';
import {StyledDivProps} from './types';

const NeonBox = styled.div<{shadow: string; border: string}>`
  border: 5px solid ${({border}) => border};

  box-shadow: ${({shadow}) => shadow};
  transition: all 1s ease-in-out;
`;

const Title = styled.div`
  margin: 25px 0px;
  font-size: 60px;
  font-weight: 600;
`;

const TargetCard = styled(NeonBox)`
  display: flex;
  justify-content: center;
  /* background: yellow; */
  width: 700px;
  margin: 10px;
  padding: 10px;
  gap: 10px;
  box-shadow: 5px 5px 5px 5px gray;
`;
const CardInfo = styled.div`
  padding: 10px;
  margin: 10px;
`;

const MyCardsContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
`;

const Card = styled.div<StyledDivProps>`
  background-image: ${({bgImage}) => `url(${bgImage})`};
  background-position: center;
  background-size: cover;
  width: 320px;
  height: 300px;
  &:hover {
    cursor: pointer;
  }
`;

const MyCardsText = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin: 30px 30px;
`;

const UpgradeText = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const CardContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardComment = styled.div`
  font-size: 60px;
  font-weight: 600;
  opacity: 1;
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const FloatingDiv = styled.div`
  position: relative;
  animation-name: ${floatAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

export default {
  NeonBox,
  Title,
  TargetCard,
  CardInfo,
  MyCardsContainer,
  Card,
  MyCardsText,
  UpgradeText,
  CardContainer,
  CardComment,
  floatAnimation,
  FloatingDiv,
};
