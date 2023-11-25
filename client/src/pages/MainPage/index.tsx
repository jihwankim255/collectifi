import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAnimation, useScroll} from 'framer-motion';
import Styled from './Main.styled';

const MainPage = () => {
  const navigate = useNavigate();
  const headerAnimation = useAnimation();
  const {scrollY} = useScroll();
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 1350) {
        // headerAnimation.start('scroll');
        // setDarkMode(false);
        setCounterOn(true);
      } else {
        // headerAnimation.start('top');
        // setDarkMode(true);
      }
    });
  }, [scrollY, headerAnimation]);
  const [counterOn, setCounterOn] = useState(false);
  return (
    <Styled.MainLayout>
      <Styled.MainWrapper>
        <Styled.MainImg src="/bg3.png" />
        <Styled.MainBack />
        <Styled.MainButton onClick={() => navigate('/draw')}>Get Player NFT</Styled.MainButton>
        <Styled.MainTypeAnimation
          sequence={[
            'Own your NFT', // Types 'One'
            2000, // Waits 1s
            'Own your Player', // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            'Upgrade your Player', // Types 'Three' without deleting 'Two'
            1800,
            () => {
              console.log('Sequence completed'); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{display: 'inline-block'}}
        />
      </Styled.MainWrapper>

      <Styled.Section>
        <Styled.Section2Image src="/trophy.png" />
        <Styled.FloatingButton onClick={() => navigate('/community')}></Styled.FloatingButton>
      </Styled.Section>

      <Styled.Section>
        <Styled.UpgradeBack src="/upgrade_background.jpg" />
        <Styled.FloatingDiv1>
          <Styled.Balloon1 src="/balloon1.png" />
        </Styled.FloatingDiv1>
        <Styled.FloatingDiv2>
          <Styled.Balloon1 src="/balloon2.png" />
        </Styled.FloatingDiv2>
        <Styled.FloatingDiv3>
          <Styled.Balloon1 src="/balloon3.png" />
        </Styled.FloatingDiv3>

        {counterOn && <Styled.CountUpS start={0} end={25} duration={5} delay={0} />}
      </Styled.Section>
    </Styled.MainLayout>
  );
};

export default MainPage;
