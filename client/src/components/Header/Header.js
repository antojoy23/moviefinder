import React, { useRef, useState } from 'react';

import { DEFAULT_YEAR_RANGE, SEARCH_TYPES } from '../../constants/titles';

import { StyledHeader } from './Header.style';
import TypeSelector, { RADIO_COMPONENT_TYPE } from '../common/TypeSelector/TypeSelector';
import SearchInput, { SEARCH_COMPONENT_TYPE } from '../common/SearchInput/SearchInput';
import MultiRangeSelector from '../common/MultiRangeSelector/MultiRangeSelector';

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

    const handleTitleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearchInput(e.target.value)
    }

    return (
        <StyledHeader>
            <SearchInput
                searchTerm={searchTerm}
                forComponent={SEARCH_COMPONENT_TYPE.HEADER}
                placeholder={`Search ${SEARCH_TYPES[searchType]}`}
                onSearch={handleTitleSearch}
                onChange={handleTitleSearchChange}
                ref={searchInputRef}
            />
            <div className='filter-container'>
                <MultiRangeSelector
                    label={"YEAR"}
                    minInputValue={inputYearRange.start}
                    maxInputValue={inputYearRange.end}
                    onMinInputBlur={() => validateYearRange("start")}
                    onMinInputChange={(e) => handleYearChangeFromInput("start", e.target.value)}
                    onMaxInputBlur={() => validateYearRange("end")}
                    onMaxInputChange={(e) => handleYearChangeFromInput("end", e.target.value)}
                    minValue={yearRange.start}
                    maxValue={yearRange.end}
                    onRangeChange={handleYearChange}
                    defaultMin={DEFAULT_YEAR_RANGE.start}
                    defaultMax={DEFAULT_YEAR_RANGE.end}
                />
                <TypeSelector onChange={handleTypeChange} searchType={searchType} forComponent={RADIO_COMPONENT_TYPE.HEADER} />
            </div>
        </StyledHeader>
    )
}
