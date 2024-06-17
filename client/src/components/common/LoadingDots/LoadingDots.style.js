import styled, { keyframes } from 'styled-components';

const fade = keyframes`
    0%, 100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
`

export const StyledLoadingDots = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    .loading {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #000;
    }

    .first {
        animation: ${fade} 1s infinite;
        animation-delay: 100ms;
    }
    .second {
        animation: ${fade} 1s infinite;
        animation-delay: 300ms;
    }
    .third {
        animation: ${fade} 1s infinite;
        animation-delay: 500ms;
    }


`;