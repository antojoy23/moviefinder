import React, { forwardRef } from 'react'

import MovieReelIcon from '../../common/icons/MovieReelIcon';

import { StyledTitleCard } from './TitleCard.style'

const TitleCard = forwardRef(({ title, onTitleSelect, isSelected }, ref) => {

    const resolvePoster = () => {
        // If there is no Poster Image in the title data, show an empty box with Movie reel icon
        if (!title["Poster"] || title["Poster"] === "N/A") {
            return <MovieReelIcon />
        } else {
            return <img className='poster-image' src={title["Poster"]} alt={`${title["Title"]} Poster`} />
        }
    }

    return (
        <StyledTitleCard ref={ref} onClick={onTitleSelect} $isSelected={isSelected} data-id={title["imdbID"]}>
            <div className='poster-image-container'>
                {resolvePoster()}
            </div>
            <section>
                <p className='title'>{title["Title"]}</p>
                <p className='year'>{title["Year"] || title["Released"]}</p>
            </section>
        </StyledTitleCard>
    )
});

export default TitleCard;
