import React, { useCallback, useEffect, useRef } from 'react'
import TitleCard from './TitleCard/TitleCard'

import { StyledSection } from './TitleListing.style'

export default function TitleListing({ titles, titlesCount, selectedTitle, onTitleSelect, onLoadMoreTitles, isLoading }) {

    const observerRef = useRef();
    const intersectionRootRef = useRef();
    const observeElementRef = useRef();

    // No need to re-render the callback if onTitleSelect does not change
    const handleTitleSelect = useCallback((e) => {
        let title = e.currentTarget.getAttribute("data-id");
        onTitleSelect && onTitleSelect(title);
    }, [onTitleSelect]);

    const handleIntersectionCallback = useCallback(([entry]) => {
        if (entry.isIntersecting) {
            observerRef.current.disconnect();
            onLoadMoreTitles();
        }
    }, [onLoadMoreTitles]);

    useEffect(() => {
        if (titles.length < titlesCount && observeElementRef.current) {
            observerRef.current = new IntersectionObserver(handleIntersectionCallback, {
                root: intersectionRootRef.current,
                rootMargin: "0px",
                threshold: 1
            });
            observerRef.current.observe(observeElementRef.current);
            return () => {
                observerRef.current && observerRef.current.disconnect();
            }
        }
    }, [titles, titlesCount, handleIntersectionCallback])

    return (
        <StyledSection ref={intersectionRootRef}>
            {titles.map((title, idx) => {
                if (idx === titles.length - 1) {
                    return <TitleCard ref={observeElementRef} onTitleSelect={handleTitleSelect} isSelected={selectedTitle === title["imdbID"]} key={title["imdbID"]} title={title} />
                }
                return <TitleCard onTitleSelect={handleTitleSelect} isSelected={selectedTitle === title["imdbID"]} key={title["imdbID"]} title={title} />
            })}
            {isLoading && <div>Loading...</div>}
        </StyledSection>
    )
}
