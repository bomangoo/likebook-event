import { keyframes } from '@emotion/react';

export const zoomIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0)
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
`;

export const upSlideFadeText = keyframes`
    0% {
        opacity: 0;
        transform: translateY(60%);
    }

    20% {
        opacity: 0;
    }

    100% {
        opacity: 1;
        transform: translateY(0%);
    }
`;
