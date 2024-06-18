import React from 'react'

import { SEARCH_TYPES } from './constants/titles'

import SearchEmptyIcon from './assets/icons/search-empty.svg';

import { StyledEmptySearch } from './EmptySearch.style'


export default function EmptySearch({ searchType, searchTerm }) {
    return (
        <StyledEmptySearch>
            <img src={SearchEmptyIcon} alt='Empty Search Icon' />
            <h3>No <span>{SEARCH_TYPES[searchType]}</span> found with the search term "{searchTerm}"</h3>
            <p>Sorry we could not find the {searchType}s matching your search. Please try again with a different search term &#128522;</p>
        </StyledEmptySearch>
    )
}
