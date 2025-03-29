import 'normalize.css';
import { css } from '@emotion/react';

export const globalStyles = css`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    @font-face {
        font-family: 'Pretendard Variable';
        font-weight: 45 920;
        font-style: normal;
        font-display: swap;
        src: url('./static/font/PretendardVariable.woff2')
            format('woff2-variations');
    }

    /* Reset CSS */
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body,
    #__next {
        height: 100%;
        width: 100%;
    }

    body {
        font-family: 'Pretendard Variable', 'Montserrat', BlinkMacSystemFont,
            'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.6;
        color: #333;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul,
    ol {
        list-style: none;
    }

    button {
        all: unset;
        cursor: pointer;
    }

    img {
        max-width: 100%;
        display: block;
    }

    .pc-only {
        display: block;

        @media screen and (max-width: 1023px) {
            display: none;
        }
    }
    .mobile-only {
        display: none;

        @media screen and (max-width: 1023px) {
            display: block;
        }
    }
`;
