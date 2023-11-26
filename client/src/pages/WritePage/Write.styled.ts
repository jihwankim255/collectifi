import styled from 'styled-components';
import {NavLogo} from '../../components/Header';

const Wrapper = styled.div`
  height: 100vh;
  max-width: 90%;
  margin: 0 auto;
  margin-bottom: 100px;
  text-align: center;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    max-width: 93%;
  }
`;
const WriteLogo = styled(NavLogo)`
  padding: 10px;
  margin: 20px;
  font-size: 2rem;
  align-self: flex-start;
`;

const WriteLabel = styled.label`
  text-align: left;
  font-size: 1.5rem;
  display: block;
`;
const Writeh2 = styled.h2`
  font-size: 20px;
  color: ${props => props.theme.mainColor};
  margin-bottom: 30px;
`;
const WriteForm = styled.form`
  /* height: 100px; */
`;
// height: ${props => props.height}px;
const WriteInput = styled.input`
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
`;
const WriteTextarea = styled.textarea`
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
  resize: none;
  height: 600px;
`;
const WriteSelect = styled.select`
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
`;

const WriteNav = styled.div`
  background: #e7e5e5;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 10;
`;

const WriteButton = styled.button`
  background: #f1356d;
  color: #fff;
  white-space: nowrap;
  border: 0;
  padding: 14px 30px;
  border-radius: 12px;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 11px;
  font-weight: bold;
  margin-right: 10px;
  margin-left: 10px;
`;

export default {
  Wrapper,
  WriteLogo,
  WriteLabel,
  Writeh2,
  WriteForm,
  WriteInput,
  WriteTextarea,
  WriteSelect,
  WriteNav,
  WriteButton,
};
