import React, { forwardRef } from 'react'

import { StyledSearchInput } from './SearchInput.style';

import SearchIcon from '../../../assets/icons/search.svg';

export const SEARCH_COMPONENT_TYPE = {
    LANDING: 1, //Default
    HEADER: 2
}

const SearchInput = forwardRef(({ searchTerm, forComponent, placeholder, onSearch, onChange }, ref) => {
    return (
        <StyledSearchInput $for={forComponent}>
            <div className='search-icon-container' onMouseDownCapture={onSearch}>
                <img
                    src={SearchIcon}
                    alt='Search Icon'
                />
            </div>
            <input
                ref={ref}
                type='text'
                onKeyDown={onSearch}
                value={searchTerm}
                onChange={onChange}
                placeholder={placeholder}
            />
        </StyledSearchInput>
    )
});


export default SearchInput;