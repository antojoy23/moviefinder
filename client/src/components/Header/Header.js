import React, { useRef, useState } from 'react'
import MultiRangeSlider from 'multi-range-slider-react';

import { DEFAULT_YEAR_RANGE } from '../../constants/titles';

import SearchIcon from '../../assets/icons/search.svg';

import { StyledHeader } from './Header.style';
import TypeSelector, { FOR_COMPONENT } from '../common/TypeSelector/TypeSelector';

export default function Header({ onTitleSearch, onSearchInput, onTypeChange, onYearRangeChange, searchTermDefault, searchTypeDefault }) {

    const [searchTerm, setSearchTerm] = useState(searchTermDefault);
    const [searchType, setSearchType] = useState(searchTypeDefault);
    const [yearRange, setYearRange] = useState(DEFAULT_YEAR_RANGE);
    // Maintaining another year range since we will need to validate if the input year is valid before passing on to the multirange input
    const [inputYearRange, setInputYearRange] = useState(DEFAULT_YEAR_RANGE);

    const searchInputRef = useRef();

    const handleTitleSearch = async (e) => {
        if (e.which === 13 || e.button === 0) {
            if (searchTerm.length > 0) {
                onTitleSearch();
                searchInputRef.current && searchInputRef.current.blur();
            } else {
                alert("Enter a valid search");
            }
        }
    }

    const yearChangeCallback = (start, end) => {
        onYearRangeChange({
            start,
            end
        })
    }

    const handleYearChange = (e) => {
        setInputYearRange({
            start: e.minValue,
            end: e.maxValue
        })
        setYearRange({
            start: e.minValue,
            end: e.maxValue
        });
        yearChangeCallback(e.minValue, e.maxValue);
    }

    const validateYearRange = (type) => {
        if (type === "start" && (inputYearRange.start < DEFAULT_YEAR_RANGE.start || inputYearRange.start > inputYearRange.end)) {
            setInputYearRange({
                start: yearRange.start,
                end: inputYearRange.end
            });
            return;
        }
        if (type === "end" && (inputYearRange.end < inputYearRange.start || inputYearRange.end > DEFAULT_YEAR_RANGE.end)) {
            setInputYearRange({
                start: inputYearRange.start,
                end: yearRange.end
            });
            return;
        }

        setYearRange({
            start: inputYearRange.start,
            end: inputYearRange.end
        });
        yearChangeCallback(inputYearRange.start, inputYearRange.end);

    }

    const handleYearChangeFromInput = (type, val) => {
        if (isNaN(val) || isNaN(parseFloat(val))) return;
        let start = yearRange.start;
        let end = yearRange.end;
        if (type === "start") {
            start = Number(val);
        } else {
            end = Number(val);
        }
        setInputYearRange({
            start,
            end
        });
    }

    const handleTypeChange = (e) => {
        setSearchType(e.target.value);
        onTypeChange(e.target.value);
    }

    return (
        <StyledHeader>
            <div className='title-search-bar'>
                <div className='search-icon-container' onMouseDownCapture={handleTitleSearch}>
                    <img
                        src={SearchIcon}
                        alt='Search Icon'
                    />
                </div>
                <input
                    ref={searchInputRef}
                    type='text'
                    onKeyDown={handleTitleSearch}
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); onSearchInput(e.target.value) }}
                    placeholder='Search Title'
                />
            </div>
            <div className='filter-container'>
                <div className='title-year-filter'>
                    <div className='title-year-slider-label'>
                        YEAR
                    </div>
                    <div className='title-year-slider-container'>
                        <input
                            className='range-input'
                            type='text'
                            value={inputYearRange.start}
                            onChange={(e) => { handleYearChangeFromInput("start", e.target.value) }}
                            onBlur={() => validateYearRange("start")}
                        />
                        <MultiRangeSlider
                            min={DEFAULT_YEAR_RANGE.start}
                            max={DEFAULT_YEAR_RANGE.end}
                            minValue={yearRange.start}
                            maxValue={yearRange.end}
                            ruler={false}
                            label={false}
                            onChange={handleYearChange}
                        />
                        <input
                            className='range-input'
                            type='text'
                            value={inputYearRange.end}
                            onBlur={() => validateYearRange("end")}
                            onChange={(e) => { handleYearChangeFromInput("end", e.target.value) }}
                        />
                    </div>
                </div>
                <TypeSelector onChange={handleTypeChange} searchType={searchType} forComponent={FOR_COMPONENT.HEADER} />
            </div>
        </StyledHeader>
    )
}
