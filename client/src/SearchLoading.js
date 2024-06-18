import React from 'react'

import LoadingDots from './components/common/LoadingDots/LoadingDots'

import { SEARCH_TYPES } from './constants/titles'

import { StyledSearchLoading } from './SearchLoading.style'

export default function SearchLoading({ searchType }) {
    return (
        <StyledSearchLoading>
            <p>Getting the <span>{SEARCH_TYPES[searchType]}</span> for you in a jiffy!</p>
            <LoadingDots />
        </StyledSearchLoading>
    )
}
