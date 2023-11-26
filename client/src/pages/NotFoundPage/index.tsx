import React from 'react';
import {faFaceFrown} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Styled from './NotFound.styled';

function NotFound() {
  return (
    <Styled.Container>
      <Styled.Box>
        <Styled.Image>
          <FontAwesomeIcon icon={faFaceFrown} color="rgba(0,0,0,1)" fontSize="300px" />
        </Styled.Image>
        <Styled.Text>404</Styled.Text>
        <Styled.Text style={{fontSize: '40px'}}>Page Not Found</Styled.Text>
      </Styled.Box>
    </Styled.Container>
  );
}

export default NotFound;
