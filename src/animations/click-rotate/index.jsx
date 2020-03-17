import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { Pink } from '../../Colors';

const Wrapper = styled.div`
    position: relative;
`;

const Rectangle = styled(animated.div)`
    background: ${Pink};
    text-align: center;
    font-size: 1rem;
    width: 50px;
    height: 50px;
    cursor: pointer;
`;

const ClickRotate = () => {
    const [toggle, setToggle] = useState(false);
    const props = useSpring({
        to: { transform: toggle ? 'rotate(360deg)' : 'rotate(0deg)' },
        config: {
            duration: 1000,
        },
    });
    return (
        <Wrapper onClick={() => setToggle((toggle) => !toggle)}>
            <Rectangle style={props}>
                {toggle ? 'Rotate on' : 'Rotate off'}
            </Rectangle>
        </Wrapper>
    );
};

export default ClickRotate;
