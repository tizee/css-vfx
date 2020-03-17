import React, { useRef } from 'react';
import { animated, useSprings, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { clamp, move } from '../utils/index';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    cursor: default;
`;

const Center = styled.div`
    position: relative;
    width: 320px;
    > div {
        position: absolute;
        width: 320px;
        height: 40px;
        border-radius: 5px;
        text-align: center;
        overflow: visible;
        line-height: 40px;
        font-size: 1.5rem;
        color: white;
        cursor: default;
    }
    & > div:nth-child(1) {
        background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
    }
    & > div:nth-child(2) {
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    }
    & > div:nth-child(3) {
        background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
    }
    & > div:nth-child(4) {
        background: linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%);
    }
    & > div:nth-child(5) {
        background: linear-gradient(135deg, pink 0%, orange 100%);
    }
`;

// setup style for dragged/idle items
// react-spring style config
const fn = (order, down, originalIndex, curIndex, y) => (index) =>
    down && index === originalIndex
        ? {
              y: curIndex * 50 + y,
              scale: 1.1,
              zIndex: '1',
              shadow: 15,
              immediate: (n) => n === 'y' || n === 'zIndex',
          }
        : {
              y: order.indexOf(index) * 50,
              scale: 1,
              zIndex: '0',
              shadow: 1,
              immediate: false,
          };

const DraggableList = ({ items }) => {
    // store original item order as a local ref
    // At initial state, refs.current = items.map((_,index)=>index) as a Array
    const refs = useRef(items.map((_, index) => index));
    // Create springs that each spring correspons to a list item, controlling its animation.
    const [springs, setSprings] = useSprings(items.length, fn(refs.current));
    const bind = useDrag(({ args: [originalIndex], down, movement: [, y] }) => {
        const curIndex = refs.current.indexOf(originalIndex);
        const curRow = clamp(
            Math.round((curIndex * 50 + y) / 50),
            0,
            items.length - 1,
        );
        const newOrder = move(refs.current, curIndex, curRow);
        setSprings(fn(newOrder, down, originalIndex, curIndex, y));
        if (!down) {
            refs.current = newOrder;
        }
    });
    // console.log('spring idx:', idx, zIndex, shadow, y, scale);
    // console.log('bind:', { ...bind(idx) });
    return (
        <Wrapper>
            <Center style={{ height: items.length * 50 }}>
                {springs.map(({ zIndex, shadow, y, scale }, idx) => {
                    return (
                        <animated.div
                            {...bind(idx)}
                            key={idx}
                            style={{
                                zIndex: zIndex,
                                boxShadow: interpolate(
                                    [shadow],
                                    (s) =>
                                        `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 *
                                            s}px 0px`,
                                ),
                                transform: interpolate(
                                    [y, scale],
                                    (y, scale) =>
                                        `translate3d(0,${y}px,0) scale(${scale})`,
                                ),
                            }}
                        >
                            {items[idx]}
                        </animated.div>
                    );
                })}
            </Center>
        </Wrapper>
    );
};

const Example = () => {
    return (
        <DraggableList
            items={'This is a example list'.split(' ')}
        ></DraggableList>
    );
};

export default Example;
