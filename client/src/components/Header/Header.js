import React from 'react'
import { StyledHeader } from './Header.style';

import SearchIcon from '../../assets/icons/search.svg';

export default function Header({ onTitleSearch, searchTerm, searchType, onSearchInput, onTypeChange }) {

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
        //Todo :: Duplicate : Remove
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
                    id="title-search"
                    type='text'
                    onKeyDown={handleTitleSearch}
                    value={searchTerm}
                    onChange={(e) => onSearchInput(e.target.value)}
                    placeholder='Search Title'
                />
            </div>
            <div className='filter-container'>
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