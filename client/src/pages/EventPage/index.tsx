import React, {useState} from 'react';
import {Layout} from '../../Styles';
import PageTitle from '../../components/UI/PageTitle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Styled from './Event.styled';

const Event = () => {
  const [tab, setTab] = useState(0);

  return (
    <Layout>
      <Styled.TopBox>
        {/* <TopTitle>Events</TopTitle> */}
        <PageTitle title="EVENTS" />
        <Styled.TopSearchBar>
          <div>Total : 4 </div>
          <Styled.Input placeholder="Search..." />
          <Styled.SearchBtn>
            <div>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </Styled.SearchBtn>
        </Styled.TopSearchBar>
      </Styled.TopBox>
      <Styled.MiddleBox>
        <Styled.TabBox>
          <Styled.Tab>Event</Styled.Tab>
          <Styled.Tab>Announce</Styled.Tab>
        </Styled.TabBox>
        <Styled.EventBox>
          <Styled.EventImg
            bgImage={'https://i.ytimg.com/vi/Owohimf9Dk4/maxresdefault.jpg'}
          ></Styled.EventImg>
          <Styled.EventInfo>
            <Styled.EventText>
              <Styled.EventTitle>Dubai Al-Haim Stadium Opening Events</Styled.EventTitle>
              <Styled.EventDate>2023-04-19 ~ 2023-04-30</Styled.EventDate>
            </Styled.EventText>
            <Styled.EventState>Going</Styled.EventState>
          </Styled.EventInfo>
        </Styled.EventBox>
        <Styled.EventBox>
          <Styled.EventImg
            bgImage={
              'https://phantom-marca.unidadeditorial.es/74091d9666ebf6332446a5f67ff14295/resize/1320/f/jpg/assets/multimedia/imagenes/2021/08/06/16282527979871.jpg'
            }
          ></Styled.EventImg>
          <Styled.EventInfo>
            <Styled.EventText>
              <Styled.EventTitle>Support PSG and draw the Free tickets! </Styled.EventTitle>
              <Styled.EventDate>2023-04-17 ~ 2023-05-16</Styled.EventDate>
            </Styled.EventText>
            <Styled.EventState>Going</Styled.EventState>
          </Styled.EventInfo>
        </Styled.EventBox>
        <Styled.EventBox>
          <Styled.EventImg
            bgImage={
              'https://cdnuploads.aa.com.tr/uploads/Contents/2022/09/12/thumbs_b_c_f81ad7c34d2aa803757476cf1bee7477.jpg?v=152534'
            }
          ></Styled.EventImg>
          <Styled.EventInfo>
            <Styled.EventText>
              <Styled.EventTitle>Who will be the Top scorer this Month?</Styled.EventTitle>
              <Styled.EventDate>2023-03-12 ~ 2023-04-27</Styled.EventDate>
            </Styled.EventText>
            <Styled.EventState>Going</Styled.EventState>
          </Styled.EventInfo>
        </Styled.EventBox>
        <Styled.EventBox>
          <Styled.EventImg
            bgImage={
              'https://e0.365dm.com/22/10/1600x900/skysports-real-madrid-barcelona_5929388.jpg?20221013114052'
            }
          ></Styled.EventImg>
          <Styled.EventInfo>
            <Styled.EventText>
              <Styled.EventTitle>Pick the Player of the Month in La Liga</Styled.EventTitle>
              <Styled.EventDate>2023-02-19 ~ 2023-05-10</Styled.EventDate>
            </Styled.EventText>
            <Styled.EventState>Going</Styled.EventState>
          </Styled.EventInfo>
        </Styled.EventBox>
      </Styled.MiddleBox>
    </Layout>
  );
};

export default Event;
