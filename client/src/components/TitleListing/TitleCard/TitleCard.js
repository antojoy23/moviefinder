import React, { forwardRef } from 'react'
import { StyledTitleCard } from './TitleCard.style'

import MovieReelIcon from '../../common/icons/MovieReelIcon';

const TitleCard = forwardRef(({ title, onTitleSelect }, ref) => {

    const resolvePoster = () => {
        if (title["Poster"] === "N/A") {
            return <MovieReelIcon />
        } else {
            return <img className='poster-image' src={title["Poster"]} alt={`${title["Title"]} Poster`} />
        }
    }
    return (
        <StyledTitleCard ref={ref} onClick={onTitleSelect} data-id={title["imdbID"]}>
            <div className='poster-image-container'>
                {resolvePoster()}
            </div>
            <section>
                <p className='title'>{title["Title"]}</p>
                <p className='year'>{title["Year"]}</p>
            </section>
        </StyledTitleCard>
    )
});

export default TitleCard;
