import React, { useRef } from 'react';
import { animated as A, useSprings, interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import TheFool from '../../images/jojo_tarot_cards/JoJo_Tarot_00_-_The_Fool.png';
import TheMagician from '../../images/jojo_tarot_cards/JoJo_Tarot_01_-_The_Magician.png';
import TheHighErophant from '../../images/jojo_tarot_cards/JoJo_Tarot_05_-_The_High_Erophant.png';
import TheHermit from '../../images/jojo_tarot_cards/JoJo_Tarot_09_-_The_Hermit.png';
import TheStar from '../../images/jojo_tarot_cards/JoJo_Tarot_17_-_The_Star.png';
import './card.scss';
const cards = [TheMagician, TheHighErophant, TheHermit, TheFool, TheStar];

// react-spring api helper
// Use browser's Web API Math here
const to = (i) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
});
const from = () => ({ x: 0, scale: 1.5, rot: 0, y: -1000 });

const trans = (r, s) =>
    `perspective(1500px) rotateX(30deg) rotateY(${r /
        10}deg) rotateZ(${r}deg) scale(${s})`;

const CardDeck = ({ items }) => {
    const gone = useRef(new Set());
    const [springs, setSprings] = useSprings(items.length, (i) => ({
        ...to(i),
        from: from(),
    }));
    const bind = useDrag(
        ({
            args: [index],
            down,
            movement: [xDelta],
            direction: [xDir],
            velocity,
        }) => {
            const isFast = velocity > 0.2;
            const dir = xDir < 0 ? -1 : 1;
            if (!down && isFast) {
                // ready to fly out
                gone.current.add(index);
            }
            setSprings((i) => {
                // only update current index spring
                if (i !== index) return;
                const isGone = gone.current.has(index);
                // move left or right
                const x = isGone
                    ? (200 + window.innerWidth) * dir
                    : down
                    ? xDelta
                    : 0;
                // tilt cards
                const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
                const scale = down ? 1.1 : 1;
                return {
                    x,
                    rot,
                    scale,
                    delay: undefined,
                    config: {
                        friction: 50,
                        tension: down ? 800 : isGone ? 200 : 500,
                    },
                };
            });
            if (!down && gone.current.size === items.length) {
                // reset when all cards have been removed.
                setTimeout(
                    () => gone.current.clear() || setSprings((i) => to(i)),
                    600,
                );
            }
        },
    );
    return springs.map(({ x, y, rot, scale }, i) => (
        <A.div
            className='card-wrapper'
            key={i}
            style={{
                transform: interpolate(
                    [x, y],
                    (x, y) => `translate3d(${x}px,${y}px,0)`,
                ),
            }}
        >
            <A.div
                className='card'
                {...bind(i)}
                style={{
                    transform: interpolate([rot, scale], trans),
                    backgroundImage: `url(${items[i]})`,
                }}
            />
        </A.div>
    ));
};

const Example = () => <CardDeck items={cards}></CardDeck>;

export default Example;
