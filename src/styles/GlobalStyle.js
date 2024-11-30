// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, sans-serif;
        background-color: #121212;
        color: #fff;
    }

    .app-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
    }

    main {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    @media (max-width: 768px) {
        .wallet-button {
            font-size: 0.9rem;
            padding: 0.4rem 0.8rem;
        }

        .app-container {
            padding: 10px;
        }
    }
`;

export default GlobalStyle;
