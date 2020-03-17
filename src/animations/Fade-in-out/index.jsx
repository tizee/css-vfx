import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const FadeInOutDiv = styled(animated.div)`
    position: absolute;
    font-size: 1.5rem;
    text-align: center;
    padding: 1rem;
    will-change: opacity;
`;

const FadeInOut = ({ items }) => {
    // use state to decide which index should fade in/out
    const [Elems] = useState(items.map((el, i) => ({ item: el, id: i })));
    const [state, setState] = useState(0);
    const transitions = useTransition(Elems[state], (item) => item.id, {
        from: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
        },
        leave: {
            opacity: 0,
        },
        config: {
            duration: 500,
            friction: 80,
        },
    });
    // set interval for looping
    useEffect(() => {
        let id = setInterval(() => {
            setState((state) => (state + 1) % items.length);
        }, 2000);
        return () => {
            clearInterval(id);
        };
    }, []);
    return (
        <Wrapper>
            {transitions.map(({ item, props, key }) => (
                <FadeInOutDiv key={key} style={{ ...props }}>
                    {item.item}
                </FadeInOutDiv>
            ))}
        </Wrapper>
    );
};

const Example = () => (
    <FadeInOut items={['Hello', '你好', 'こんにちわ']}></FadeInOut>
);

export default Example;
