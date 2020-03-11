import { createGlobalStyle, css } from 'styled-components';
// normalize.css
import { normalize } from 'styled-normalize';

const BoxModelStyle = css`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    html {
        overflow-x: hidden;
    }
`;

const ColorStyle = css`
    html {
        background: #f8fafc;
        color: #4d4d4d;
    }
`;

const AppRootStyle = css`
    #root {
        display: block;
        position: relative;
        height: 100%;
        width: 100%;
    }
`;

const FontStyle = css`
    html {
        font-size: 16px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
        font-weight: 400;
        text-size-adjust: 100%;
        cursor: default;
    }
`;

const GlobalStyle = createGlobalStyle`
    ${normalize}
    ${BoxModelStyle}
    ${ColorStyle}
    ${FontStyle}
    ${AppRootStyle}
`;

export default GlobalStyle;
