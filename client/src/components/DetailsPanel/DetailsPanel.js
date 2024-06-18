import React, { useContext, useEffect, useState } from 'react'

import LoadingDots from '../common/LoadingDots/LoadingDots';
import MovieReelIcon from '../common/icons/MovieReelIcon';
import BookmarkIcon from '../common/icons/BookmarkIcon';

//Hooks
import { useTitleDetails } from '../../hooks/useTitleDetails';

//Context
import { SelectedTitleContext } from '../../context/SelectedTitleContext';

import { addToWatchlist, isInWatchlist, removeFromWatchlist } from '../../utils/watchlistAPI';

import ErrorIcon from '../../assets/icons/error.svg';

import {
    StyledDetailsPanel,
    StyledDetailsPanelEmpty,
    StyledDetailsLoadingPanel,
    StyledTitleSection,
    StyledPlotSection,
    StyledRatingsSection,
    StyledDetailsErrorPanel
} from './DetailsPanel.style';

export default function DetailsPanel() {


    const selectedTitle = useContext(SelectedTitleContext);

    const [inWatchlist, setInWatchlist] = useState(() => isInWatchlist(selectedTitle));

    const { titleDetails, isLoading, error } = useTitleDetails(selectedTitle);

    const resolvePoster = () => {
        if (titleDetails["Poster"] === "N/A") {
            return <MovieReelIcon />;
        } else {
            return <img src={titleDetails["Poster"]} alt={`${titleDetails["Title"]} Poster`} />
        }
    }

    const handleWatchlistAddRemove = () => {
        if (inWatchlist) {
            removeFromWatchlist(selectedTitle);
            setInWatchlist(false);
        } else {
            addToWatchlist(selectedTitle);
            setInWatchlist(true);
        }
    }

    useEffect(() => {
        selectedTitle && setInWatchlist(isInWatchlist(selectedTitle))
    }, [selectedTitle])

    if (error) {
        return (<StyledDetailsErrorPanel>
            <img src={ErrorIcon} alt="Error" />
            <h2>Oops!</h2>
            <h3>Well, this is unexpected...</h3>
            <p>We could not process your request at this time &#128533;</p>
            <p>Please try again later</p>
        </StyledDetailsErrorPanel>)
    }

    if (isLoading) {
        return (<StyledDetailsLoadingPanel>
            <p>Hang on! This shouldn't take much longer &#128522;</p>
            <LoadingDots />
        </StyledDetailsLoadingPanel>)
    }

    if (titleDetails) {
        return (
            <StyledDetailsPanel>
                <StyledTitleSection $inWatchlist={inWatchlist}>
                    <div className='details-image-container'>
                        {resolvePoster()}
                    </div>
                    <div className='watchlist-container' onClick={handleWatchlistAddRemove}>
                        <BookmarkIcon />
                        <p>{inWatchlist ? "Remove from watchlist" : "Add to watchlist"}</p>
                    </div>
                    <article>
                        <h2>{titleDetails["Title"]}</h2>
                        <div className='title-meta'>
                            <div>{titleDetails["Rated"]}</div>
                            <p>{titleDetails["Year"]}<span>&#x2022;</span>{titleDetails["Genre"]}<span>&#x2022;</span>{titleDetails["Runtime"]}</p>
                        </div>
                        <div className='title-actors'>{titleDetails["Actors"]}</div>
                    </article>
                </StyledTitleSection>
                <StyledPlotSection>
                    <p>{titleDetails["Plot"]}</p>
                </StyledPlotSection>
                <StyledRatingsSection>
                    {
                        titleDetails["Ratings"].map((rating) => {
                            return (
                                <div key={rating["Source"]}>
                                    <p className='title-rating-value'>{rating["Value"]}</p>
                                    <p className='title-rating-source'>{rating["Source"]}</p>
                                </div>
                            );
                        })
                    }
                </StyledRatingsSection>
            </StyledDetailsPanel>
        )
    }

    return (
        <StyledDetailsPanelEmpty>
            <p>Please select a title to view the details.</p>
        </StyledDetailsPanelEmpty>
    )

}
