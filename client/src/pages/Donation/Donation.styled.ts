import styled from 'styled-components';
import {BarSegmentProps} from './types';

const GridContainer = styled.div`
  //padding: 30px 30px;
  width: 100%;
  /* background-color: blue; */
  height: 800px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
`;

const DonationBox = styled.div`
  height: 300px;
  /* background-color: aqua; */
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  :hover {
    cursor: pointer;
    scale: 1.06;
  }
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.3);
`;

const DonationImg = styled.div<{bgImage: any}>`
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 200px;

  background-image: ${({bgImage}) => `url(${bgImage})`};
`;

const DonationTop = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5px;
`;

const DonationPercent = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-right: 10px;
`;

const DonationTarget = styled.div`
  margin-right: 10px;
  font-size: 15px;
  opacity: 0.8;
`;

const DonationBottom = styled.div`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 600;
  margin-left: 5px;
`;

const BarSegment = styled.div<BarSegmentProps>`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
  font-size: 25px;
  font-weight: 600;
  width: ${props => `${props.width}%`};
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => `${props.color}`};
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  border-radius: 30px;
  width: 75%;
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  background-color: white;
  padding: 16px;
  align-items: center;
  justify-content: center;
`;

const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ModalInput = styled.input`
  width: 75%;
  height: 40px;
  padding: 5px;
`;

const ModalAmount = styled.div`
  height: 10px;
`;

const ModalBtn = styled.button`
  margin-top: 20px;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color: #fd115c;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RefundBtn = styled.div`
  margin-right: 15px;
  background-color: #fd115c;
  color: white;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  font-weight: 600;
`;

export default {
  GridContainer,
  DonationBox,
  DonationImg,
  DonationTop,
  DonationPercent,
  DonationTarget,
  DonationBottom,
  BarSegment,
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalInput,
  ModalAmount,
  ModalBtn,
  BottomBox,
  RefundBtn,
};
