import React, { forwardRef } from 'react'

import MovieReelIcon from '../../common/icons/MovieReelIcon';

import { StyledTitleCard } from './TitleCard.style'

const TitleCard = forwardRef(({ titleId, title, onTitleSelect, isSelected, watchlist, onRemove }, ref) => {

    const resolvePoster = () => {
        // If there is no Poster Image in the title data, show an empty box with Movie reel icon
        if (!title["Poster"] || title["Poster"] === "N/A") {
            return <MovieReelIcon />
        } else {
            return <img className='poster-image' src={title["Poster"]} alt={`${title["Title"]} Poster`} />
        }
    }

    return (
        <StyledTitleCard
            ref={ref}
            onClick={onTitleSelect}
            $isSelected={isSelected}
            data-id={title["imdbID"] || titleId}
            $forWatchlist={watchlist}
        >
            <div className='poster-image-container'>
                {resolvePoster()}
            </div>
            <section className='title-meta'>
                <p className='title'>{title["Title"]}</p>
                <p className='year'>{title["Year"] || title["Released"]}</p>
            </section>
            {watchlist && (
                <section className='watchlist-remove' data-id={title["imdbID"] || titleId} onClick={onRemove}>
                    <div>Remove</div>
                </section>
            )}
        </StyledTitleCard>
    )
});

export default TitleCard;
