import React, { useContext } from 'react';

//Context
import { SearchTermContext, SearchTypeContext, SetSearchTermContext, SetSearchTypeContext } from '../../context/FilterContexts';

//Hooks
import useLazyLoadImage from '../../hooks/useLazyLoadImage';

import { StyledLandingPage, StyledLandingSection } from './LandingPage.style';

import SearchIcon from '../../assets/icons/search.svg';

import { SEARCH_TYPES } from '../../constants/titles';
import TypeSelector from '../common/TypeSelector/TypeSelector';
import Watchlist from '../Watchlist/Watchlist';

//Laoding from public folder for better caching
const LandingPageBg = "/assets/images/landing-page-bg.jpg";

export default function LandingPage({ onTitleSearch, onTypeChange }) {

    const searchTerm = useContext(SearchTermContext);
    const setSearchTerm = useContext(SetSearchTermContext);
    const searchType = useContext(SearchTypeContext);
    const setSearchType = useContext(SetSearchTypeContext);

    const isImageLoaded = useLazyLoadImage(LandingPageBg);

    const handleTitleSearch = async (e) => {
        if (e.which === 13 || e.button === 0) {
            if (searchTerm.length > 0) {
                onTitleSearch();
            } else {
                alert("Enter a valid search");
            }
        }
    }

    const handleTypeChange = (e) => {
        setSearchType(e.target.value);
        onTypeChange(e.target.value);
    }

    return (
        // Passing the props used by styled-components with $ appended else React will throw a warning since the element by default
        // does not have a prop named as such.
        <StyledLandingPage $isImageLoaded={isImageLoaded} $bgImage={LandingPageBg}>
            <StyledLandingSection>
                <div className='main-heading'>
                    Movie Finder
                </div>
                <div className='title-search-bar'>
                    <div className='search-icon-container' onMouseDownCapture={handleTitleSearch}>
                        <img
                            src={SearchIcon}
                            alt='Search Icon'
                        />
                    </div>
                    <input
                        type='text'
                        onKeyDown={handleTitleSearch}
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value); }}
                        placeholder={`Search ${SEARCH_TYPES[searchType]}`}
                    />
                </div>
                <TypeSelector onChange={handleTypeChange} searchType={searchType} showLabel={false} />
            </StyledLandingSection>
            <Watchlist />
        </StyledLandingPage>
    )
}
