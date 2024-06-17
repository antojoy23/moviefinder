import React from 'react';

import { StyledLoadingDots } from './LoadingDots.style';

export default function LoadingDots() {
    return (
        <StyledLoadingDots>
            <div className="loading first"></div>
            <div className="loading second"></div>
            <div className="loading third"></div>
        </StyledLoadingDots>
    )
}
