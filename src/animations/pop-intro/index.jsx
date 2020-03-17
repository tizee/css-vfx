import React, { useState, useRef, useCallback, useEffect } from 'react';
import { animated, useTransition } from 'react-spring';
import './index.scss';

// bug in react-spring@next transition
const PopIntro = ({ txts, replacer }) => {
    const [items, setItems] = useState(txts);
    const ref = useRef([]);
    const transitions = useTransition(items, null, {
        from: {
            opacity: 0,
            height: 0,
            innerHeight: 0,
            transform: 'perspective(600px) rotateX(0deg)',
            color: '#8fa5b6',
        },
        enter: [
            { opacity: 1, height: 80, innerHeight: 80 },
            {
                transform: 'perspective(600px) rotateX(180deg)',
                color: '#28d79f',
            },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [
            { color: '#c23369' },
            { innerHeight: 0 },
            { opacity: 0, height: 0 },
        ],
        update: { color: '#28b4d7' },
    });
    const reset = useCallback(() => {
        ref.current.map(clearTimeout);
        ref.current = [];
        setItems([]);
        ref.current.push(setTimeout(() => setItems(() => txts), 2000));
        ref.current.push(
            setTimeout(
                () =>
                    setItems((items) => {
                        let mid = Math.floor(items.length / 2);
                        return [
                            ...items.slice(0, mid),
                            ...items.slice(mid + 1, items.length),
                        ];
                    }),
                5000,
            ),
        );
        ref.current.push(
            setTimeout(
                () =>
                    setItems((items) => {
                        let mid = Math.floor(items.length / 2);
                        return [
                            ...items.slice(0, mid),
                            ...replacer,
                            ...items.slice(mid, items.length),
                        ];
                    }),
                8000,
            ),
        );
    }, []);
    useEffect(() => {
        let id = setInterval(() => reset(), 10000);
        return () => clearInterval(id);
    }, []);
    return transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div className='transition-item' key={key} style={rest}>
            <animated.div style={{ overflow: 'hidden', height: innerHeight }}>
                {item}
            </animated.div>
        </animated.div>
    ));
};

const Example = () => (
    <div className='transition-wrapper'>
        <PopIntro txts={['Hello', 'React', '🌈']} replacer={['CSS']}></PopIntro>
    </div>
);

export default Example;
