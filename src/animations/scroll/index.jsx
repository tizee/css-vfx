import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { range } from '../utils';

const ScrollWrapper = styled(animated.div)`
    border-radius: 18px;
    position: relative;
    width: 100%;
    height: 200px;
    overflow: auto;
`;

const Row = styled.div`
    top: 1rem;
    width: 100%;
    height: 50px;
    text-align: center;
`;

const Scroll = () => {
    const [pos, setPos] = useState(0);
    const Items = range(1, 10);
    const props = useSpring({
        from: { scroll: pos },
        to: { scroll: pos == Items.length * 50 ? 0 : Items.length * 50 },
        reset: true,
        config: {
            duration: 1000,
        },
    });
    useEffect(() => {
        let id = setInterval(
            () =>
                setPos((pos) =>
                    pos == Items.length * 50 ? 0 : Items.length * 50,
                ),
            2000,
        );
        return () => clearInterval(id);
    }, []);
    return (
        <ScrollWrapper scrollTop={props.scroll} style={props}>
            {Items.map((el) => (
                <Row key={el}>{el}</Row>
            ))}
        </ScrollWrapper>
    );
};

export default Scroll;
