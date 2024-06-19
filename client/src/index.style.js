import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    body {
        font-family: Roboto, Arial;
        margin: 0;
    }

    p, h1, h2, h3, h4, h5, h6, input {
        margin: 0;
    }

    // Styling scrollbar
    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar,
    &::-webkit-scrollbar-thumb {
        overflow:visible;
        border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background: rgba(0,0,0,0.6);
    }
`;