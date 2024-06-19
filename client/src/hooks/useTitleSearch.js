import { useState } from 'react'
import { searchTitle } from '../utils/movieApi';
import { filterTitles } from '../utils/titlesHelper';
import { DEFAULT_YEAR_RANGE } from '../constants/titles';

export default function useTitleSearch(setTitles) {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    const getTitles = async ({ searchTerm, searchType, page = 0, yearRange = DEFAULT_YEAR_RANGE, unfiltredTitles = [], filteredTitles = [] }) => {
        try {
            setIsLoading(true);
            let currentPage = page + 1;
            const titles = await searchTitle({ searchTerm, searchType, page: currentPage });
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
            setIsLoading(false);
            setError(ex["Error"]);
        }
    }

    return { getTitles, isLoading, error };

}
