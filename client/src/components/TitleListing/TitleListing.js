import React, { useCallback, useEffect, useRef } from 'react'
import TitleCard from './TitleCard/TitleCard'

import { StyledSection } from './TitleListing.style'
import LoadingDots from '../common/LoadingDots/LoadingDots';
import { SEARCH_TYPES } from '../../constants/titles';

export default function TitleListing({ titles, titlesCount, canLoadMore, selectedTitle, onTitleSelect, onLoadMoreTitles, searchType, isLoading }) {

    const observerRef = useRef();
    const intersectionRootRef = useRef();
    const observeElementRef = useRef();
    const loadMoreCalled = useRef(false);

    // No need to re-render the callback if onTitleSelect does not change
    const handleTitleSelect = useCallback((e) => {
        let title = e.currentTarget.getAttribute("data-id");
        onTitleSelect && onTitleSelect(title);
    }, [onTitleSelect]);

    const handleIntersectionCallback = useCallback(([entry]) => {
        if (entry.isIntersecting && !loadMoreCalled.current) {
            loadMoreCalled.current = true;
            observerRef.current.disconnect();
            onLoadMoreTitles();
        }
    }, [onLoadMoreTitles]);

    useEffect(() => {
        loadMoreCalled.current = false;
    }, [titles]);

    useEffect(() => {
        if (canLoadMore && observeElementRef.current) {
            observerRef.current = new IntersectionObserver(handleIntersectionCallback, {
                root: intersectionRootRef.current,
                rootMargin: "0px",
                threshold: 0.5
            });
            observerRef.current.observe(observeElementRef.current);
            return () => {
                observerRef.current && observerRef.current.disconnect();
            }
        }
    }, [titles, titlesCount, handleIntersectionCallback])

    return (
        <StyledSection ref={intersectionRootRef}>
            <div className='title-results-count'>
                {searchType === "episode" ? "Seasons" : `${SEARCH_TYPES[searchType]}`} : {titlesCount}
            </div>
            <div className='title-list-container'>
                {titles.map((title, idx) => {
                    if (idx === titles.length - 2) {
                        return <TitleCard ref={observeElementRef} onTitleSelect={handleTitleSelect} isSelected={selectedTitle === title["imdbID"]} key={title["imdbID"]} title={title} />
                    }
                    return <TitleCard onTitleSelect={handleTitleSelect} isSelected={selectedTitle === title["imdbID"]} key={title["imdbID"]} title={title} />
                })}
                {isLoading && <div className='loading-container'><LoadingDots /></div>}
            </div>
        </StyledSection>
    )
}
