import React from 'react';
import styled, { keyframes } from 'styled-components';

const FilterAni = keyframes`
    from{
        filter: grayscale(0%);
    }
    to{
        filter:grayscale(80%);
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    color: #ff7070;
    animation: ${FilterAni} 1s ease-in-out infinite alternate-reverse;
`;

const Example = () => <Wrapper>hello</Wrapper>;

export default Example;
