import { useRef, useState } from 'react'
import { searchTitle } from '../utils/movieApi';
import { filterTitles } from '../utils/titlesHelper';
import { DEFAULT_YEAR_RANGE } from '../constants/titles';

export default function useTitleSearch(setTitles) {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const requestController = useRef();


    const getTitles = async ({ searchTerm, searchType, page = 0, yearRange = DEFAULT_YEAR_RANGE, unfiltredTitles = [], filteredTitles = [] }) => {
        try {
            setIsLoading(true);
            try {
                //Abort any previous request
                requestController.current && requestController.current.abort();
            } catch (ex) { }
            let currentPage = page + 1;
            const [searchTitlePromise, controller] = searchTitle({ searchTerm, searchType, page: currentPage });
            requestController.current = controller;
            const titles = await searchTitlePromise;
            let totalTitles, currentTitles, hasMoreTitles;
            // Incase of "episode" type the format of response is different
            if (searchType === "episode") {
                totalTitles = Number(titles["totalSeasons"]);
                currentTitles = titles["Episodes"];
                hasMoreTitles = totalTitles > currentPage;
            } else {
                totalTitles = Number(titles["totalResults"]);
                currentTitles = titles["Search"];
                hasMoreTitles = totalTitles > (unfiltredTitles.length + currentTitles.length);
            }
            let completeTitleList = [...unfiltredTitles, ...currentTitles];
            let [currentFilteredTitles] = filterTitles(currentTitles, searchType, yearRange);
            setTitles({ filteredTitles: [...filteredTitles, ...currentFilteredTitles], unfiltredTitles: completeTitleList, totalTitles, hasMoreTitles, currentPage });
            setIsLoading(false);
        } catch (ex) {
            setError(ex["Error"]);
            setIsLoading(false);
        }
    }

    return { getTitles, isLoading, error, setError };

}
