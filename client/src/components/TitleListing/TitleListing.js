import React, { useCallback } from 'react'
import TitleCard from './TitleCard/TitleCard'

import { StyledSection } from './TitleListing.style'

export default function TitleListing({ titles, selectedTitle, onTitleSelect }) {

    const handleTitleSelect = useCallback((e) => {
        let title = e.currentTarget.getAttribute("data-id");
        onTitleSelect && onTitleSelect(title);
    }, [onTitleSelect]);

    return (
        <StyledSection>
            {titles.map((title) => {
                return <TitleCard onTitleSelect={handleTitleSelect} isSelected={selectedTitle === title["imdbID"]} key={title["imdbID"]} title={title} />
            })}
        </StyledSection>
    )
}
