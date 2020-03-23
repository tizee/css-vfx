import React from 'react';
import styled, { keyframes } from 'styled-components';

const RotateWord = keyframes`
    0%{
        opacity: 0;
    }
    2%{
        opacity: 0;
        transform: translateY(-10px);
    }
    5%{
        opacity: 1;
        transform: translateY(0px);
    }
    17%{
        opacity: 1;
        transform: translateY(0px);
    }
    20% {
    opacity: 0;
    transform: translateY(10px);
    }
    100%{
        opacity: 0;
    }
`;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    > span {
        position: absolute;
        opacity: 0;
        overflow: hidden;
        animation: ${RotateWord} ${({ total }) => total * 3 + 's'} linear
            infinite 0s;
    }
`;

const RotateSpan = ({ items }) => {
    return (
        <Wrapper total={items.length}>
            {items.map((el, idx) => (
                <span key={idx} style={{ animationDelay: idx * 3 + 's' }}>
                    {el}
                </span>
            ))}
        </Wrapper>
    );
};

const Example = () => (
    <RotateSpan items={['Hello', 'Tizee', 'Yohooo!']}></RotateSpan>
);

export default Example;
