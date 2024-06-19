import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'

import TitleCard from './TitleCard/TitleCard'
import LoadingDots from '../common/LoadingDots/LoadingDots';

//Context
import { SearchTermContext, SearchTypeContext } from '../../context/FilterContexts';
import { SetTitlesListContext, TitlesListContext } from '../../context/TitlesContext';
import { SelectedTitleContext, SetSelectedTitleContext } from '../../context/SelectedTitleContext';

//Hooks
import useTitleSearch from '../../hooks/useTitleSearch';

import { SEARCH_TYPES } from '../../constants/titles';

import { StyledSection } from './TitleListing.style'

export default function TitleListing({ yearRange }) {

    const searchType = useContext(SearchTypeContext);
    const searchTerm = useContext(SearchTermContext);
    const setTitlesData = useContext(SetTitlesListContext);
    const titlesData = useContext(TitlesListContext);
    const selectedTitle = useContext(SelectedTitleContext);
    const setSelectedTitle = useContext(SetSelectedTitleContext);

    const [filteredResultsTotalCount, setFilteredResultsTotalCount] = useState();

    const { getTitles, isLoading } = useTitleSearch(setTitlesData);
    const { filteredTitles, unfiltredTitles, totalTitles, hasMoreTitles, currentPage } = titlesData;

    const observerRef = useRef();
    const intersectionRootRef = useRef();
    const observeElementRef = useRef();
    const loadMoreCalled = useRef(false);

    useEffect(() => {
        let newTotalCount = totalTitles - (unfiltredTitles.length - filteredTitles.length);
        setFilteredResultsTotalCount(newTotalCount);
    }, [filteredTitles, unfiltredTitles, totalTitles])

    useEffect(() => {
        loadMoreCalled.current = false;
    }, [titlesData]);

    useEffect(() => {
        // Case where the filtered list is empty hence no observer can be attached
        if (filteredTitles.length === 0 && hasMoreTitles) {
            if (!loadMoreCalled.current) {
                loadMoreCalled.current = true;
                getTitles({ searchTerm, searchType, page: currentPage, yearRange: yearRange, unfiltredTitles, filteredTitles });
                return;
            }
        }

        const handleIntersectionCallback = ([entry]) => {
            if (entry.isIntersecting && !loadMoreCalled.current) {
                loadMoreCalled.current = true;
                observerRef.current.disconnect();
                getTitles({ searchTerm, searchType, page: currentPage, yearRange: yearRange, unfiltredTitles, filteredTitles });
            }
        }

        if (hasMoreTitles && observeElementRef.current) {
            // Intersection observer for infinite loading experience :: Can be moved to custom hook
            observerRef.current = new IntersectionObserver(handleIntersectionCallback, {
                root: intersectionRootRef.current,
                rootMargin: "100px",
                threshold: 0.1
            });
            observerRef.current.observe(observeElementRef.current);
        }

        return () => {
            observerRef.current && observerRef.current.disconnect();
        }
    }, [titlesData, currentPage, filteredTitles, getTitles, hasMoreTitles, searchTerm, searchType, unfiltredTitles, yearRange]);

    //Prevent unwanted re-renders of the list
    const titleCards = useMemo(() => {

        const handleTitleSelect = (e) => {
            let title = e.currentTarget.getAttribute("data-id");
            setSelectedTitle(title);
        }

        return filteredTitles.map((title, idx) => {
            // Setting the last card to be the observer element of Intersection observer
            if (idx === filteredTitles.length - 1) {
                return <TitleCard
                    ref={observeElementRef}
                    onTitleSelect={handleTitleSelect}
                    isSelected={selectedTitle === title["imdbID"]}
                    key={title["imdbID"]}
                    title={title} />
            }
            return <TitleCard
                onTitleSelect={handleTitleSelect}
                isSelected={selectedTitle === title["imdbID"]}
                key={title["imdbID"]}
                title={title} />
        })
    }, [filteredTitles, selectedTitle, setSelectedTitle])

    const resolveComponent = () => {
        if (filteredTitles.length === 0 && !hasMoreTitles) {
            return (
                <div className='titles-empty'>
                    <h4>No results found!</h4>
                    <p>Try searching with a different search term or search filter &#128522;</p>
                </div>
            )
        } else {
            return (
                <>
                    {titleCards}
                    {isLoading && (
                        <div className='loading-container'>
                            <LoadingDots />
                        </div>
                    )}
                </>
            )
        }
    }

    return (
        <StyledSection ref={intersectionRootRef}>
            <div className='title-results-count'>
                {searchType === "episode" ? "Seasons" : `${SEARCH_TYPES[searchType]}`} : {filteredResultsTotalCount}
            </div>
            <div className='title-list-container'>
                {resolveComponent()}
            </div>
        </StyledSection>
    )
}
