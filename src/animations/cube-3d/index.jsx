import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

// reference from https://davidwalsh.name/css-cube
const Spin = keyframes`
  from { transform: rotateY(0); }
  to { transform: rotateY(360deg); }
`;

const VerticalSpin = keyframes`
    from {transform: rotateX(0);}
    to { transform: rotateX(360deg); }
`;

const HorizontalCSS = css`
    animation: ${Spin} 10s infinite linear;
`;

const VerticalCSS = css`
    animation: ${VerticalSpin} 10s infinite linear;
    transform-origin: 0 50px;
`;

const Containter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Wrapper = styled.div`
    margin-top: -100px;
    perspective: 800px;
    perspective-origin: 50% 100px;
`;

const Cube = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100px;
    transform-style: preserve-3d;
    ${({ toggle }) => (toggle ? VerticalCSS : HorizontalCSS)}
`;

const Plane = styled.div`
    position: absolute;
    outline: 1px solid #999;
    width: 100px;
    height: 100px;
    box-shadow: inset 0px 0px 15px #555;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Back = styled(Plane)`
    transform: translateZ(-50px) rotateY(180deg);
`;

const Right = styled(Plane)`
    transform: rotateY(-270deg) translateX(50px);
    transform-origin: top right;
`;

const Left = styled(Plane)`
    transform: rotateY(270deg) translateX(-50px);
    transform-origin: center left;
`;

const Top = styled(Plane)`
    transform: rotateX(-270deg) translateY(-50px);
    transform-origin: top center;
`;

const Bottom = styled(Plane)`
    transform: rotateX(-90deg) translateY(50px);
    transform-origin: bottom center;
`;

const Front = styled(Plane)`
    transform: translateZ(50px);
`;

const CubeBox = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <Containter onClick={() => setToggle((toggle) => !toggle)}>
            <Wrapper>
                <Cube toggle={toggle}>
                    <Front>Front</Front>
                    <Back>Back</Back>
                    <Top>Top</Top>
                    <Bottom>Bottom</Bottom>
                    <Left>Left</Left>
                    <Right>Right</Right>
                </Cube>
            </Wrapper>
        </Containter>
    );
};

export default CubeBox;
