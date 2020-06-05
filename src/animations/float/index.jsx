import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0px);
`;

const StyledWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    @keyframes Updown {
        0% {
            transform: translateY(0px);
        }

        35% {
            transform: translateY(-10px);
        }

        52% {
            transform: translateY(5px);
        }

        69% {
            transform: translateY(0px);
        }

        100% {
            transform: translateY(0px);
        }
    }
`;

const StyledFloatWrapper = styled.div`
    height: 100%;
    animation: 1.5s ease-out
        ${({ index }) => {
            return 0.15 * (index + 1) + 's';
        }}
        infinite normal none running Updown;
`;

const Example = () => {
    const items = 'tizee'.toUpperCase().split('');
    return (
        <Wrapper>
            <StyledWrapper>
                {items.map((el, i) => {
                    return (
                        <StyledFloatWrapper index={i} key={i}>
                            {el}
                        </StyledFloatWrapper>
                    );
                })}
            </StyledWrapper>
        </Wrapper>
    );
};

export default Example;
