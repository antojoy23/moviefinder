import React, { useRef } from 'react'

import { SEARCH_TYPES } from './constants/titles'

import SearchEmptyIcon from './assets/icons/search-empty.svg';

import { StyledEmptySearch } from './EmptySearch.style'


export default function EmptySearch({ searchType, searchTerm }) {

    const searchTermRef = useRef(searchTerm);
    const searchTypeRef = useRef(searchType);

    return (
        <StyledEmptySearch>
            <img src={SearchEmptyIcon} alt='Empty Search' />
            <h3>No <span>{SEARCH_TYPES[searchTypeRef.current]}</span> found with the search term "{searchTermRef.current}"</h3>
            <p>Sorry we could not find the {searchTypeRef.current}s matching your search. Please try again with a different search term &#128522;</p>
        </StyledEmptySearch>
    )
}
