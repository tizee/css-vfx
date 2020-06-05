import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    flex-flow: column;
`;

const Clock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        let id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return clearInterval(id);
    }, []);
    return (
        <StyledDiv>
            <div>{time.toLocaleDateString()}</div>
            <div>{time.getHours()}</div>
            <div>{time.getMinutes()}</div>
            <div>{time.getSeconds()}</div>
        </StyledDiv>
    );
};

export default Clock;
