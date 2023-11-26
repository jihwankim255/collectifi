import styled from 'styled-components';

const TopBox = styled.div`
  width: 100%;

  //height: 100px;
  display: flex;
  align-items: start;
  justify-content: space-between;
  //margin-bottom: 25px;
`;

const TopTitle = styled.div`
  font-size: 45px;
  font-weight: 600;
`;

const TopSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const Input = styled.input`
  width: 180px;
  height: 40px;
  margin-left: 20px;
  padding: 10px;
  border: 1px solid black;
`;

const SearchBtn = styled.div`
  :hover {
    cursor: pointer;
  }
  background-color: #333333;

  display: flex;
  color: white;
  font-weight: 400;
  height: 100%;
  font-size: 38px;
`;

const MiddleBox = styled.div`
  width: 100%;
  /* background-color: gray; */
  /* height: 110px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin-bottom: 25px;
`;

const TabBox = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  font-size: 32px;
  border: 1px solid rgba(0, 0, 0, 3);

  :hover {
    cursor: pointer;
  }
`;

const EventBox = styled.div`
  border-radius: 10px;
  display: flex;
  width: 100%;
  /* background-color: blue; */
  margin-top: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const EventImg = styled.div<{bgImage: string}>`
  width: 100%;
  background-size: cover;
  background-position: center;
  height: 200px;
  border: 1px solid black;
  background-image: ${({bgImage}) => `url(${bgImage})`};
`;

const EventInfo = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const EventTitle = styled.div`
  font-size: 22px;
`;

const EventDate = styled.div``;

const EventText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80px;
`;

const EventState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  width: 75px;
  height: 75px;
  border-radius: 75px;
  background-color: #fd115c;

  color: white;
`;
export default {
  TopBox,
  TopTitle,
  TopSearchBar,
  Input,
  SearchBtn,
  MiddleBox,
  TabBox,
  Tab,
  EventBox,
  EventImg,
  EventInfo,
  EventTitle,
  EventDate,
  EventText,
  EventState,
};
