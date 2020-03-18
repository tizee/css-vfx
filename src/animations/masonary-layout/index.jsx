import React, { useState, useEffect } from 'react';
import { animated, useTransition } from 'react-spring';
import { shuffleNew } from '../utils';
import useMeasure from '../../hooks/useMeasure';
import useMedia from '../../hooks/useMedia';
import styled from 'styled-components';
import exampleData from './data';

// https://css-tricks.com/piecing-together-approaches-for-a-css-masonry-layout/
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    > div {
        position: absolute;
        will-change: transform, width, height, opacity;
        padding: 15px;
        > div {
            position: relative;
            background-size: cover;
            background-position: center center;
            width: 100%;
            height: 100%;
            overflow: hidden;
            border-radius: 4px;
            box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.2);
        }
    }
`;

const ShuffleMasonryGridLayout = ({ data }) => {
    // match media queries
    const columns = useMedia(
        ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)'],
        [5, 4, 3],
        2,
    );
    // measure resize
    const [ref, { width }] = useMeasure();
    const [items, set] = useState(data);
    useEffect(() => {
        let id = setInterval(() => set(shuffleNew), 5000);
        return () => clearInterval(id);
    }, []);
    let heights = new Array(columns).fill(0);
    let gridItems = items.map((item) => {
        // Masonry Grid Layout
        const col = heights.indexOf(Math.min(...heights));
        const xy = [(width / columns) * col, heights[col]];
        heights[col] += item.height / 2;
        return { ...item, xy, width: width / columns, height: item.height / 2 };
    });
    const transitions = useTransition(gridItems, (item) => item.css, {
        from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
        enter: ({ xy, width, height }) => ({ xy, width, height, opacity: 1 }),
        update: ({ xy, width, height }) => ({ xy, width, height }),
        leave: { width: 0, height: 0 },
        config: { mass: 5, tension: 500, friction: 100 },
        trail: 25,
    });
    return (
        <Wrapper {...ref} style={{ height: Math.max(...heights) }}>
            {transitions.map(({ item, props: { xy, ...rest }, key }) => {
                return (
                    <animated.div
                        key={key}
                        style={{
                            transform: xy.interpolate(
                                (x, y) => `translate3d(${x}px,${y}px,0)`,
                            ),
                            ...rest,
                        }}
                    >
                        <div style={{ backgroundImage: item.css }} />
                    </animated.div>
                );
            })}
        </Wrapper>
    );
};

const Example = () => (
    <ShuffleMasonryGridLayout data={exampleData}></ShuffleMasonryGridLayout>
);

export default Example;
