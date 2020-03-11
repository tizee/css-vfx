import React from 'react';
import Btn from './Button.style';
// to-do: add logic

const Button = (props) => {
    <Btn primary={props.primary} onClick={props.handleClick}>
        {props.children}
    </Btn>;
};

export default Button;
