import React, { useReducer, useRef, useState } from 'react'
import MultiRangeSlider from 'multi-range-slider-react';

import SearchIcon from '../../assets/icons/search.svg';

import { StyledHeader } from './Header.style';

const DEFAULT_YEAR_RANGE = {
    start: 1872,
    end: new Date().getFullYear()
}

export default function Header({ onTitleSearch, onSearchInput, onTypeChange, onYearRangeChange, searchTermDefault, searchTypeDefault }) {

    const [searchTerm, setSearchTerm] = useState(searchTermDefault);
    const [searchType, setSearchType] = useState(searchTypeDefault);
    const [yearRange, setYearRange] = useState(DEFAULT_YEAR_RANGE);

    const [_, forceUpdate] = useReducer((x) => x + 1, 0);

    // Move the ref to state since render is needed (using forceupdate)
    const yearRangeRef = useRef(DEFAULT_YEAR_RANGE);
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
        yearRangeRef.current = {
            start: e.minValue,
            end: e.maxValue
        }
        setYearRange({
            start: e.minValue,
            end: e.maxValue
        });
        yearChangeCallback(e.minValue, e.maxValue);
    }

    const validateYearRange = (type) => {
        if (type === "start" && (yearRangeRef.current.start < DEFAULT_YEAR_RANGE.start || yearRangeRef.current.start > yearRangeRef.current.end)) {
            yearRangeRef.current.start = yearRange.start;
            forceUpdate();
            return;
        }
        if (type === "end" && (yearRangeRef.current.end < yearRangeRef.current.start || yearRangeRef.current.end > DEFAULT_YEAR_RANGE.end)) {
            yearRangeRef.current.end = yearRange.end;
            forceUpdate();
            return;
        }

        setYearRange({
            start: yearRangeRef.current.start,
            end: yearRangeRef.current.end
        });
        yearChangeCallback(yearRangeRef.current.start, yearRangeRef.current.end);

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
        yearRangeRef.current = {
            start,
            end
        }
        forceUpdate();
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
                <div className='title-year-slider-container'>
                    <input
                        className='range-input'
                        type='text'
                        value={yearRangeRef.current.start}
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
                        value={yearRangeRef.current.end}
                        onBlur={() => validateYearRange("end")}
                        onChange={(e) => { handleYearChangeFromInput("end", e.target.value) }}
                    />
                </div>
                <div className='title-type-group'>
                    <div className='title-type-label'>
                        TYPE
                    </div>
                    <div className='title-type-options'>
                        <div>
                            <input type="radio" id="any" onChange={handleTypeChange} name="type" value="any" checked={searchType === "any"} />
                            <label htmlFor="any">Any</label>
                        </div>
                        <div>
                            <input type="radio" id="movie" onChange={handleTypeChange} name="type" value="movie" checked={searchType === "movie"} />
                            <label htmlFor="movie">Movies</label>
                        </div>
                        <div>
                            <input type="radio" id="series" onChange={handleTypeChange} name="type" value="series" checked={searchType === "series"} />
                            <label htmlFor="series">Series</label>
                        </div>
                        <div>
                            <input type="radio" id="episodes" onChange={handleTypeChange} name="type" value="episode" checked={searchType === "episode"} />
                            <label htmlFor="episodes">Episodes</label>
                        </div>
                    </div>
                </div>
            </div>
        </StyledHeader>
    )
}
