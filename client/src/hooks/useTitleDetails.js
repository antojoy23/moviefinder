import { useState, useEffect, useRef } from 'react';

import { searchById } from '../utils/movieApi';

const formatTitleDetails = (details) => {
    // Ratings format
    // Sometimes the ratings provided by API will not have a value in which case we will need to populate with defaults
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

    const requestController = useRef();

    useEffect(() => {
        if (!titleId) {
            setTitleDetails(null);
            return;
        }
        setIsLoading(true);
        setError(false);
        const getTitleDetails = async () => {
            try {
                try {
                    //Abort any previous request
                    requestController.current && requestController.current.abort();
                } catch (ex) { }
                const [titleDetailsPromise, controller] = searchById({ id: titleId });
                requestController.current = controller;
                let details = await titleDetailsPromise;
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