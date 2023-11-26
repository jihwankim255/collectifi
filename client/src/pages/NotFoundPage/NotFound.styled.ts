import styled from 'styled-components';

const Container = styled.body`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 150px 0 0 -150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div``;

const Text = styled.div`
  margin-top: 20px;
  font-size: 80px;
  font-weight: 700;
`;

export default {
  Container,
  Box,
  Image,
  Text,
};
