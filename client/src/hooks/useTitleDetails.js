import { useState, useEffect } from 'react';
import { searchById } from '../utils/movieApi';

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

export const useTitleDetails = (titleId) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [titleDetails, setTitleDetails] = useState();

    useEffect(() => {
        if (!titleId) {
            setTitleDetails(null);
            return;
        }
        setIsLoading(true);
        setError(false);
        const getTitleDetails = async () => {
            try {
                let details = await searchById({ id: titleId });
                details = formatTitleDetails(details);
                setTitleDetails(details);
                setIsLoading(false);
            } catch (ex) {
                setError(true);
                setIsLoading(false);
            }
        }
        getTitleDetails();

    }, [titleId])

    return { titleDetails, isLoading, error }

}