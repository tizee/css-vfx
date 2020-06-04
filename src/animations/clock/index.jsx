import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const styledDiv = styled.div`
    display: flex;
    flex-flow: column;
`;

const Clock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(
        () =>
            setInterval(() => {
                setTime(new Date());
            }, 1000),
        [],
    );
    return (
        <styledDiv>
            <div>{time.toLocaleDateString()}</div>
            <div>{time.getHours()}</div>
            <div>{time.getMinutes()}</div>
            <div>{time.getSeconds()}</div>
        </styledDiv>
    );
};

export default Clock;
