import styled from 'styled-components';
import {BarSegmentProps} from './types';

const WinLayout = styled.div`
  // margin-top: 150px;
  // max-width: 70%;
  padding: 40px 20px 30px;
  max-width: 1140px;
  margin: 0 auto;
  @media only screen and (max-width: 1024px) {
    max-width: 93%;
  }
  /* background-color: beige; */
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const BigBox = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.3);

  //margin-top: 50px;
  height: 350px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const MatchDate = styled.div`
  /* background-color: bisque; */
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 15px;
`;

const MatchInfo = styled.div`
  font-size: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TeamLogo = styled.div<{bgImage: string}>`
  background-color: white;
  height: 150px;
  width: 150px;
  background-image: ${({bgImage}) => `url(${bgImage})`};
  background-position: center;
  background-size: cover;
`;

const Bar = styled.div`
  /* background-color: brown; */
  padding: 20px 20px;
  width: 70%;
  height: 100%;
  display: flex;
`;

const HomeAway = styled.div`
  font-size: 30px;
  font-weight: 600;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const BetForm = styled.form`
  display: flex;
  width: 50%;
  height: 70px;
  /* background-color: blueviolet; */
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 18px;
  &::placeholder {
    font-size: 18px;
  }
`;

const Button = styled.button`
  width: 80px;
  height: 50px;
`;

const HomeAwayInfo = styled.div``;

const Select = styled.select`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid black;
  height: 50px;
`;

const Option = styled.option``;

const BarSegment = styled.div<BarSegmentProps>`
  color: white;
  font-size: 25px;
  font-weight: 600;
  width: ${props => `${props.width}%`};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => `${props.color}`};
`;

export default {
  WinLayout,
  BigBox,
  MatchDate,
  MatchInfo,
  TeamLogo,
  Bar,
  HomeAway,
  BetForm,
  Input,
  Button,
  HomeAwayInfo,
  Select,
  Option,
  BarSegment,
};
