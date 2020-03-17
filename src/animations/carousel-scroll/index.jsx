import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    height: 30px;
    font-size: 2rem;
    overflow: hidden;
    > div {
        text-align: center;
        will-change: transform;
        transition: transform ease-in 1s;
    }
`;

// Javascript and CSS
// codepen url: https://codepen.io/qtizee/pen/vYOjMVZ
const CarouselScroll = ({ items }) => {
    const [idx, setIdx] = useState(0);
    const [dir, setDir] = useState(true);
    const update = () => {
        if (dir) {
            if (idx == items.length - 1) {
                setIdx((idx) => idx - 1);
                setDir((dir) => !dir);
            } else {
                setIdx((idx) => idx + 1);
                setDir((dir) => dir);
            }
        } else {
            if (idx == 0) {
                setIdx((idx) => idx + 1);
                setDir((dir) => !dir);
            } else {
                setIdx((idx) => idx - 1);
                setDir((dir) => dir);
            }
        }
    };
    useEffect(() => {
        let id = setTimeout(() => {
            update();
        }, 3000);
        return () => clearTimeout(id);
    }, [idx, dir]);

    return (
        <Wrapper>
            {items.map((el) => (
                <div
                    key={el}
                    style={{ transform: `translateY(-${idx * 36}px)` }}
                >
                    {el}
                </div>
            ))}
        </Wrapper>
    );
};

const Example = () => (
    <CarouselScroll items={['Science', 'Love', 'World']}></CarouselScroll>
);

export default Example;
