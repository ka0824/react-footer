import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }
`

export default GlobalStyle;