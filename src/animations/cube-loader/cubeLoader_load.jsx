import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

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
    transform: rotateX(90deg) ${(props) => `translateZ(${props.value - 50}px)`};
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
        transform: ${(props) => `scaleY(${(props.value / 100).toFixed(2)})`};
    }
`;
const Back = styled(Plane)`
    transform: rotateY(180deg) translateZ(50px);
    &:after {
        ${LoadCSS}
        transform: ${(props) => `scaleY(${(props.value / 100).toFixed(2)})`};
    }
`;
const Left = styled(Plane)`
    transform: rotateY(-90deg) translateZ(50px);
    &:after {
        ${LoadCSS}
        transform: ${(props) => `scaleY(${(props.value / 100).toFixed(2)})`};
    }
`;
const Right = styled(Plane)`
    transform: rotateY(90deg) translateZ(50px);
    &:after {
        ${LoadCSS}
        transform: ${(props) => `scaleY(${(props.value / 100).toFixed(2)})`};
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
const CubeLoader = ({ value }) => {
    return (
        <Wrapper>
            <Center>
                <Loader>
                    <Top></Top>
                    <Bottom value={value}></Bottom>
                    <Left value={value}></Left>
                    <Right value={value}></Right>
                    <Front value={value}>{value}</Front>
                    <Back value={value}></Back>
                    <MovingPlane value={value}></MovingPlane>
                </Loader>
            </Center>
        </Wrapper>
    );
};

const Example = () => {
    // mock Loading
    const [value, setValue] = useState(0);
    useEffect(() => {
        let id = setInterval(
            () => setValue((val) => (val == 100 ? 0 : val + 1)),
            200,
        );
        return () => clearInterval(id);
    }, []);
    return <CubeLoader value={value}></CubeLoader>;
};

export default Example;
