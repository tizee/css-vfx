import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './global.styled';
import App from './app';

const rootNode = document.getElementById(`root`);
const StyledApp = () => {
    return (
        <React.Fragment>
            <GlobalStyle />
            <App />
        </React.Fragment>
    );
};
ReactDOM.render(<StyledApp />, rootNode);
