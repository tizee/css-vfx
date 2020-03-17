import React from 'react';
import styled, { keyframes } from 'styled-components';
import Image from '../../images/React-icon.png';

const Spin = keyframes`
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
`;

/* background: center / contain no-repeat url(${Image}); */
const Wrapper = styled.div`
    animation: ${Spin} 5s ease-in-out infinite alternate;
`;

const Img = styled.img`
    object-fit: cover;
`;

const ImageBox = () => (
    <Wrapper>
        <Img src={Image} width='200' height='200'></Img>
    </Wrapper>
);
export default ImageBox;
