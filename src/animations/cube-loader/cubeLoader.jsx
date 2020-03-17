import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const Fill = keyframes`
    0%,25%{
        transform: scaleY(0);
    }
    75%,100%{
        transform: scaleY(1);
    }
`;

const TopFill = keyframes`
    0%,25%{
        transform: rotateX(90deg) translateZ(-50px);
    }
    75%,100%{
        transform: rotateX(90deg) translateZ(49px);
    }
`;

const Colors = {
    Fill: 'rgba(46,204,113,0.8)',
    NotFill: 'rgba(0,0,0,.1)',
};

const LoadCSS = css`
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: ${Colors.Fill};
    transform-origin: 50% 100%;
    animation: ${Fill} 4s ease-in-out infinite alternate;
    z-index: -1;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Center = styled.div`
    perspective: 800px;
    margin-top: -100px;
`;

const Plane = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    background: ${Colors.NotFill};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MovingPlane = styled(Plane)`
    background: ${Colors.Fill};
    animation: ${TopFill} 4s ease-in-out infinite alternate;
`;

const Bottom = styled(Plane)`
    transform: rotateX(-90deg) translateZ(50px);
    background: ${Colors.Fill};
    transition: all 500ms ease-in-out;
    box-shadow: -8px -8px 10px 0 rgba(0, 0, 0, 0.4);
`;
const Top = styled(Plane)`
    transform: rotateX(90deg) translateZ(50px);
    opacity: 0.5;
`;
const Front = styled(Plane)`
    transform: rotateY(0deg) translateZ(50px);
    &:after {
        ${LoadCSS}
    }
`;
const Back = styled(Plane)`
    transform: rotateY(180deg) translateZ(50px);
    &:after {
        ${LoadCSS}
    }
`;
const Left = styled(Plane)`
    transform: rotateY(-90deg) translateZ(50px);
    &:after {
        ${LoadCSS}
    }
`;
const Right = styled(Plane)`
    transform: rotateY(90deg) translateZ(50px);
    &:after {
        ${LoadCSS}
    }
`;

const Loader = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100px;
    transform-style: preserve-3d;
    transform: rotateX(-25deg) rotateY(45deg);
    transition: all 500ms ease-in-out;
    cursor: default;
    &:hover {
        transform: rotateX(-25deg) rotateY(45deg) translateY(-15px);
        ${Bottom} {
            box-shadow: -22px -22px 30px 0 rgba(0, 0, 0, 0.4);
        }
    }
`;
const CubeLoader = () => {
    return (
        <Wrapper>
            <Center>
                <Loader>
                    <Top>Top</Top>
                    <Bottom>Bottom</Bottom>
                    <Left>Left</Left>
                    <Right>Right</Right>
                    <Front>Front</Front>
                    <Back>Back</Back>
                    <MovingPlane></MovingPlane>
                </Loader>
            </Center>
        </Wrapper>
    );
};

export default CubeLoader;
