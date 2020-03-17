import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Center = styled(animated.div)`
    text-align: center;
`;

const Number = () => {
    const [number, setNumber] = useState(0);
    const props = useSpring({
        from: { num: number },
        to: { num: number == 0 ? 1 : 0 },
        reset: true,
        config: {
            duration: 1000,
        },
    });
    useEffect(() => {
        let id = setInterval(
            () => setNumber((number) => (number == 0 ? 1 : 0)),
            1500,
        );
        return () => clearInterval(id);
    }, []);
    return (
        <Center style={props}>
            {props.num.interpolate((x) => x.toFixed(2))}
        </Center>
    );
};

export default Number;
