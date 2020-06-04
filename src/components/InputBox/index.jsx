import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { lessImportant } from '../../Colors';

const FloatAnimationStyle = css`
    transition: all ease-in 200ms;
    touch-action: manipulation;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    margin: 1rem 0;
    padding: 1rem 2rem;
    border-radius: 18px;
    background: #fff;
    height: 80px;
    box-shadow: 1px 2px 7px 4px rgba(198, 198, 198, 0.5);
    width: 100%;
`;

const Label = styled.label`
    ${FloatAnimationStyle}
    text-transform: uppercase;
    color: ${lessImportant};
    position: absolute;
    top: 0.5rem;
    left: 2rem;
`;

const Input = styled.input`
    ${FloatAnimationStyle}
    margin-top: 1rem;
    font-size: 1.2rem;
    border: 0;
    appearance: none;
    background: transparent;
    border-radius: 0;
    height: 40px;
    text-overflow: ellipsis;
    cursor: text;
    &:focus {
        outline: 0;
    }

    &:placeholder-shown + label {
        cursor: text;
        font-weight: 400;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transform-origin: left bottom;
        transform: translate(0, 2rem) scale(1.5);
    }

    &::placeholder {
        opacity: 0;
        transition: inherit;
    }

    &:focus::placeholder {
        opacity: 1;
        color: ${lessImportant};
    }
    &:not(:placeholder-shown) + label,
    &:focus + label {
        transform-origin: left bottom;
        transform: translate(0, 0) scale(0.7);
        cursor: default;
    }
`;

const InputField = (props) => {
    const inputRef = useRef(null);
    return (
        <Wrapper>
            <Input
                ref={inputRef}
                type={props.type}
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                onChange={props.handleInput}
                value={props.value}
            />
            <Label
                htmlFor={props.name}
                onClick={() => {
                    inputRef.current.focus();
                }}
            >
                {props.labelName}
            </Label>
        </Wrapper>
    );
};

export default InputField;
