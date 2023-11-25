import styled from 'styled-components';

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
  width: 600px;
  height: 600px;
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

export default {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  ModalInput,
  ModalAmount,
  ModalBtn,
};
