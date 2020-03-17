// reference https://css-tricks.com/snippets/css/typewriter-effect/
import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const BlinkCaret = keyframes`
    from,to{
        border-color: transparent;
    }
    50%{
        border-color: orange;
    }
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TypeLine = styled.span`
    border-right: 0.5em solid;
    will-change: border-color;
    animation: ${BlinkCaret} 1s steps(1) infinite;
`;

class TxtType {
    constructor(el, txts, period) {
        this.txts = txts;
        this.el = el;
        this.period = period || 2000;
        this.idx = 0;
        this.txt = '';
        this.tick();
        this.dir = false;
    }

    tick() {
        let delta = 200 - Math.random() * 100;
        if (this.dir) {
            this.txt = this.txts[this.idx].substring(0, this.txt.length + 1);
        } else {
            this.txt = this.txts[this.idx].substring(0, this.txt.length - 1);
        }
        this.el.innerHTML = this.txt;
        if (!this.dir) {
            delta /= 2;
        }
        if (this.dir && this.txt === this.txts[this.idx]) {
            delta = this.period;
            this.dir = !this.dir;
        } else if (!this.dir && this.txt === '') {
            this.dir = !this.dir;
            this.idx = (this.idx + 1) % this.txts.length;
            delta = 500;
        }
        setTimeout(() => this.tick(), delta);
    }
}

const TypeWriter = (props) => {
    const period = props.period || 2000;
    const txts = props.txts;
    if (!Array.isArray(txts) || txts.length < 1) {
        return <Wrapper></Wrapper>;
    }
    const refType = useRef(null);
    const refSpan = useRef(null);
    // update when txts change
    useEffect(() => {
        refType.current = new TxtType(refSpan.current, txts, period);
    }, []);

    return (
        <Wrapper>
            <TypeLine ref={refSpan}></TypeLine>
        </Wrapper>
    );
};

const Example = () => (
    <TypeWriter txts={[`Don't panic`, `I'm Tizee`]} period={2000}></TypeWriter>
);

export default Example;
