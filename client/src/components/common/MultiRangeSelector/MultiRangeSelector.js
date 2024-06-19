import React from 'react'
import MultiRangeSlider from 'multi-range-slider-react';

import { StyledMultiRangeSelector } from './MultiRangeSelector.style';

export default function MultiRangeSelector({
    label,
    minInputValue,
    maxInputValue,
    defaultMin,
    defaultMax,
    minValue,
    maxValue,
    onMinInputChange,
    onMinInputBlur,
    onMaxInputChange,
    onMaxInputBlur,
    onRangeChange
}) {
    return (
        <StyledMultiRangeSelector>
            <div className='title-year-slider-label'>
                {label}
            </div>
            <div className='title-year-slider-container'>
                <input
                    className='range-input'
                    type='text'
                    value={minInputValue}
                    onChange={onMinInputChange}
                    onBlur={onMinInputBlur}
                />
                <MultiRangeSlider
                    min={defaultMin}
                    max={defaultMax}
                    minValue={minValue}
                    maxValue={maxValue}
                    ruler={false}
                    label={false}
                    onChange={onRangeChange}
                />
                <input
                    className='range-input'
                    type='text'
                    value={maxInputValue}
                    onBlur={onMaxInputBlur}
                    onChange={onMaxInputChange}
                />
            </div>
        </StyledMultiRangeSelector>
    )
}
