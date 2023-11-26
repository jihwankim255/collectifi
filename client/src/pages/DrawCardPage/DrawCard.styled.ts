import styled, {keyframes} from 'styled-components';
import {Layout} from '../../Styles';

const DrawLayout = styled(Layout)`
  height: 100%;
  max-width: 100%;
  /* width: 100%; */

  background: url('/stadium.jpg');
  background-size: cover;
`;
const NonOpacity = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Selected = styled.div`
  background: grey;
  font-size: 70px;
  padding: 15px;
  margin: 15px;
  width: 300px;
  height: 300px;
  justify-content: center;
`;

const Description = styled.div`
  margin: 15px;
  color: white;
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 60px;
`;

const Amount = styled.div`
  width: 300px;
`;
const PackLayout = styled.div`
  margin-bottom: 20px;
`;
const PackList = styled.div`
  display: flex;
  gap: 30px;
`;
const PackListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  perspective: 600px;
`;

const PackLabel = styled.div`
  font-size: 25px;
  margin: 5px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 15px;
`;

const PackPrice = styled.div`
  font-size: 25px;
  font-weight: 600;
`;
const rotate = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;
interface Src {
  src: string;
}

const Pack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background: rgba(255, 255, 255, 0.6);
  width: 260px;
  height: 370px;
  border-radius: 7%;
  border: 1px solid white;
  color: black;
  text-align: center;
  box-shadow: 5px 5px 5px grey;
  margin-bottom: 20px;
  /* transform: rotateY(130deg); */
  /* transform: rotateZ(90deg); */
  /* transform-origin: left; */
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    transition: transform 0.5s ease;
    /* animation: ${rotate} 3s linear infinite;*/
  }
`;
const PackImgBox = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 7px;
  padding: 10px;
`;
const PackImg = styled.div<Src>`
  background-size: cover;
  background-image: ${({src}) => `url(${src})`};
  width: 100px;
  height: 170px;
  margin: 20px;
`;
const PackLabelBox = styled.div`
  padding: 10px;
  margin: 10px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
`;

export const CardContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardComment = styled.div`
  margin-top: 50px;
  font-size: 60px;
  font-weight: 600;
  opacity: 1;
`;

const Card = styled.img`
  width: 500px;
  height: 700px;
  z-index: 1;
  opacity: 1;
`;

export default {
  DrawLayout,
  NonOpacity,
  Selected,
  Description,
  Amount,
  PackLayout,
  PackList,
  PackListItem,
  PackLabel,
  PackPrice,
  rotate,
  Pack,
  PackImgBox,
  PackImg,
  PackLabelBox,
  CardContainer,
  CardComment,
  Card,
};
