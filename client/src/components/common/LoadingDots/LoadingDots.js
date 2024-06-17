import React from 'react';

import { StyledLoadingDots } from './LoadingDots.style';

export default function LoadingDots() {
    return (
        <StyledLoadingDots>
            <div class="loading first"></div>
            <div class="loading second"></div>
            <div class="loading third"></div>
        </StyledLoadingDots>
    )
}
