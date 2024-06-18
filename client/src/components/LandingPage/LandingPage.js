import React, { useContext } from 'react';

//Context
import { SearchTermContext, SearchTypeContext, SetSearchTermContext, SetSearchTypeContext } from '../../context/FilterContexts';

//Hooks
import useLazyLoadImage from '../../hooks/useLazyLoadImage';

import { StyledLandingPage, StyledLandingSection } from './LandingPage.style';

import SearchIcon from '../../assets/icons/search.svg';
import LandingPageBg from '../../assets/images/landing-page-bg.jpg';

import { SEARCH_TYPES } from '../../constants/titles';

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
                {/* Can be moved to a radio group component and resued in Header component along with the search input */}
                <div className='title-type-group'>
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
            </StyledLandingSection>
        </StyledLandingPage>
    )
}
