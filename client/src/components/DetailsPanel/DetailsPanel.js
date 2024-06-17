import React, { useEffect, useState } from 'react'
import { StyledDetailsPanel, StyledDetailsPanelEmpty, StyledDetailsLoadingPanel, StyledTitleSection, StyledPlotSection, StyledRatingsSection, StyledDetailsErrorPanel } from './DetailsPanel.style';
import LoadingDots from '../common/LoadingDots/LoadingDots';

import { searchById } from '../../utils/movieApi';

import MovieReelIcon from '../common/icons/MovieReelIcon';
import BookmarkIcon from '../../assets/icons/bookmark.svg';
import ErrorIcon from '../../assets/icons/error.svg';


export default function DetailsPanel({ titleId }) {

    const [titleDetails, setTitleDetails] = useState();
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const resolvePoster = () => {
        if (titleDetails["Poster"] === "N/A") {
            return <MovieReelIcon />;
        } else {
            return <img src={titleDetails["Poster"]} alt={`${titleDetails["Title"]} Poster`} />
        }
    }

    const formatTitleDetails = (details) => {
        // Ratings format
        let ratingOrg = [{ "Source": "Internet Movie Database", "Value": "N/A" }, { "Source": "Rotten Tomatoes", "Value": "N/A" }, { "Source": "Metacritic", "Value": "N/A" }];
        let ratingsObj = {};
        details["Ratings"].forEach((rating) => {
            ratingsObj[rating["Source"]] = rating["Value"];
        })
        let updatedRatings = ratingOrg.map((rating) => {
            if (Object.hasOwn(ratingsObj, rating["Source"])) {
                rating["Value"] = ratingsObj[rating["Source"]];
                return rating;
            } else {
                return rating;
            }
        })
        details["Ratings"] = updatedRatings;
        return details;
    }

    useEffect(() => {
        if (!titleId) return;
        setLoading(true);
        setIsError(false);
        const getTitleDetails = async () => {
            try {
                let details = await searchById({ id: titleId });
                details = formatTitleDetails(details);
                setTitleDetails(details);
                setLoading(false);
            } catch (ex) {
                setIsError(true);
                setLoading(false);
            }
        }
        getTitleDetails();

    }, [titleId])

    if (isError) {
        return (<StyledDetailsErrorPanel>
            <img src={ErrorIcon} alt="Error Image" />
            <h2>Oops!</h2>
            <h3>Well, this is unexpected...</h3>
            <p>We could not process your request at this time &#128533;</p>
            <p>Please try again later</p>
        </StyledDetailsErrorPanel>)
    }

    if (loading) {
        return (<StyledDetailsLoadingPanel>
            <p>Hang on! This shouldn't take much longer &#128522;</p>
            <LoadingDots />
        </StyledDetailsLoadingPanel>)
    }

    if (titleDetails) {
        return (
            <StyledDetailsPanel>
                <StyledTitleSection>
                    <div className='details-image-container'>
                        {resolvePoster()}

                    </div>
                    <div className='watchlist-container'>
                        <img src={BookmarkIcon} alt='Add to watchlist' />
                        <p>Watchlist</p>
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
