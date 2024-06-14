import React from 'react'
import { StyledTitleCard } from './TitleCard.style'

export default function TitleCard({ title, onTitleSelect }) {
    return (
        <StyledTitleCard onClick={onTitleSelect} data-id={title["imdbID"]}>
            <img src={title["Poster"]} alt={`${title["Title"]} Poster`} />
            <section>
                <p className='title'>{title["Title"]}</p>
                <p className='year'>{title["Year"]}</p>
            </section>
        </StyledTitleCard>
    )
}
