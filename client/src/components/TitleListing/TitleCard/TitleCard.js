import React, { forwardRef } from 'react'
import { StyledTitleCard } from './TitleCard.style'

const TitleCard = forwardRef(({ title, onTitleSelect }, ref) => {
    return (
        <StyledTitleCard ref={ref} onClick={onTitleSelect} data-id={title["imdbID"]}>
            <img src={title["Poster"]} alt={`${title["Title"]} Poster`} />
            <section>
                <p className='title'>{title["Title"]}</p>
                <p className='year'>{title["Year"]}</p>
            </section>
        </StyledTitleCard>
    )
});

export default TitleCard;
