import React from 'react';
import { useDrag } from 'react-use-gesture';
import { animated, useSpring, interpolate } from 'react-spring';
import styled from 'styled-components';

const Box = styled(animated.div)`
    height: 50px;
    width: 50px;
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
    cursor: pointer;
    border-radius: 50px;
    font-size: 1rem;
    line-height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function OffsetExample() {
    const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));
    const bind = useDrag(({ down, movement: [mx, my] }) =>
        set({ x: down ? mx : 0, y: down ? my : 0 }),
    );
    return (
        <Box
            {...bind()}
            style={{
                transform: interpolate(
                    [x, y],
                    (x, y) => `translate3d(${x}px,${y}px,0)`,
                ),
            }}
        >
            Drag
        </Box>
    );
}

export default OffsetExample;
