import React, { useState } from 'react';
import useLazyLoadImage from '../../hooks/useLazyLoadImage';

import { StyledHome, StyledHomeSection } from './Home.style';

import SearchIcon from '../../assets/icons/search.svg';
import HomeBg from '../../assets/images/home-bg.jpg';
import { SEARCH_TYPES } from '../../constants/titles';

export default function Home({ onTitleSearch, onSearchInput, onTypeChange }) {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchType, setSearchType] = useState("any");

    const isImageLoaded = useLazyLoadImage(HomeBg);

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
        <StyledHome $isImageLoaded={isImageLoaded} $bgImage={HomeBg}>
            <StyledHomeSection>
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
                        onChange={(e) => { setSearchTerm(e.target.value); onSearchInput(e.target.value) }}
                        placeholder={`Search ${SEARCH_TYPES[searchType]}`}
                    />
                </div>
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
            </StyledHomeSection>
        </StyledHome>
    )
}
