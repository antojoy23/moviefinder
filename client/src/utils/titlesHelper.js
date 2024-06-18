export const filterTitles = (titleList, searchType, yearRange, selectedTitle) => {
    let isSelectedTitleValid = true;
    let filteredTitles = titleList.filter((title) => {
        let years;
        if (searchType === "episode") {
            years = title["Released"].split("-").map((y) => Number(y));
            years = [years[0]];
        } else {
            // The split character here is of unicode U+2013
            years = title["Year"].split("–").map((y) => Number(y));
        }
        let isValid = false;
        if (years.length > 1) {
            // Empty / Ongoing series or movie
            if (years[1] === 0) {
                isValid = years[0] <= yearRange.end;
            } else {
                isValid = yearRange.start <= years[0] && years[1] <= yearRange.end;
            }
        } else {
            isValid = yearRange.start <= years[0] && years[0] <= yearRange.end;
        }
        if (selectedTitle && selectedTitle === title["imdbID"] && !isValid) isSelectedTitleValid = false;
        return isValid;
    })
    return [filteredTitles, isSelectedTitleValid];
}