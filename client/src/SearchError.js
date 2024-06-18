import React from 'react'

import { StyledSearchError } from './SearchError.style';

import ErrorIcon from './assets/icons/error.svg';

export default function SearchError() {
    return (
        <StyledSearchError>
            <img src={ErrorIcon} alt="Error" />
            <h2>Oops!</h2>
            <h3>Well, this is unexpected...</h3>
            <p>We could not process your request at this time &#128533;</p>
            <p>Please try again later</p>
        </StyledSearchError>
    )
}
