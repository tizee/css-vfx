import React from 'react';
import styled from 'styled-components';

const ClipWrapper = styled.div`
    position: relative;
    height: 36px;
    width: 54px;
    overflow: hidden;
`;

const RotateWrapper = styled.div`
    position: relative;
    animation: slider 10s ease-out infinite;
    animation-delay: 4.5s;
    overflow: hidden;
    height: 108px;

    .up,
    .down,
    .center {
        position: absolute;
        left: 0;
        text-align: center;
    }
    .up {
        top: 0px;
    }
    .center {
        top: 36px;
        height: 36px;
    }
    .down {
        top: 72px;
    }

    @keyframes slider {
        0% {
            transform: translateY(0);
        }

        5% {
            transform: translateY(-36px);
        }

        50% {
            transform: translateY(-36px);
        }

        55% {
            transform: translateY(-72px);
        }

        to {
            transform: translateY(-72px);
        }
    }
`;

const Example = () => {
    return (
        <ClipWrapper>
            <RotateWrapper>
                <div className='top'>😃</div>
                <div className='center'>🤣</div>
                <div className='down'>😂</div>
            </RotateWrapper>
        </ClipWrapper>
    );
};

export default Example;
