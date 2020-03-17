import React from 'react';
import styled, { keyframes } from 'styled-components';

const Pulse = keyframes`
  0% {
      transform: scale(0.75);
  }
  20% {
      transform: scale(1);
  }
  40% {
      transform: scale(0.75);
  }
  60% {
      transform: scale(1);
  }
  80% {
      transform: scale(0.75);
  }
  100% {
      transform: scale(0.75);
  }
`;
const HeartWrapper = styled.span`
    animation: ${Pulse} 1s infinite alternate;
    &::before {
        content: '♥';
        color: red;
    }
`;

const HeartPulse = () => <HeartWrapper></HeartWrapper>;

export default HeartPulse;
