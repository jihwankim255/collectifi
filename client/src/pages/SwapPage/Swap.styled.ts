import styled from 'styled-components';
import Particle from '../../components/UI/Particle';

const Layout = styled.div`
  margin-top: 100px;
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 600px;
  height: 600px;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.3);
  /* background-color: #fd115c; */
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const TabBox = styled.div`
  background-color: #585860;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  display: flex;
  font-size: 35px;
  font-weight: 600;
  color: white;
`;

const Tab = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

const InputBox = styled.div`
  border-radius: 5px;
  margin-top: 10px;
  background-color: #494c68;
  padding: 20px 20px;
  width: 100%;
  font-size: 24px;
  font-weight: 600;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: white;
`;

const Input = styled.input`
  all: none;
  background-color: #66698b;
  border: none;
  height: 70px;
  font-size: 40px;
  padding: 15px;
  color: white;
  font-weight: 600;
`;

const CalBox = styled.div`
  margin-top: 10px;
  /* background-color: pink; */
  font-size: 50px;
  font-weight: 700;
  :hover {
    cursor: pointer;
    scale: 1.15;
  }
`;

const BtnBox = styled.div`
  background-color: rgba(253, 17, 92);
  font-size: 35px;
  color: white;
  font-weight: 600;
  margin-top: 20px;
  padding: 10px;
  border-radius: 20px;
  padding: 15px;

  :hover {
    cursor: pointer;
    scale: 1.05;
  }
`;
const ParticleS = styled(Particle)`
  z-index: 1;
  background: linear-gradient(45deg, #fc466b, #3f5efb);
`;

export default {
  Layout,
  Container,
  TabBox,
  Tab,
  InputBox,
  InputTitle,
  Input,
  CalBox,
  BtnBox,
  ParticleS,
};
