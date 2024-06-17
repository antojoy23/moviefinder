import { useState, useRef, useCallback } from 'react';

import { searchTitle } from './utils/movieApi';
import TitleListing from './components/TitleListing/TitleListing';
import DetailsPanel from './components/DetailsPanel/DetailsPanel';
import Header from './components/Header/Header';

import { StyledEmptySearchContainer, StyledErrorContainer, StyledMainContainer, StyledTitlesLoadingContainer } from './App.style';
import Home from './components/Home/Home';
import LoadingDots from './components/common/LoadingDots/LoadingDots';

import SearchEmptyIcon from './assets/icons/search-empty.svg';
import ErrorIcon from './assets/icons/error.svg';
import { DEFAULT_YEAR_RANGE, SEARCH_TYPES } from './constants/titles';

function App() {
  const [titles, setTitles] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [titleError, setTitleError] = useState();

  const searchTerm = useRef("");
  const searchType = useRef("any");
  const yearRange = useRef(DEFAULT_YEAR_RANGE);
  const totalTitles = useRef(0);
  const currentPage = useRef(1);
  const completeTitleList = useRef();
  const canLoadMoreTitles = useRef(false);

  const onTitleSelect = useCallback((title) => {
    setSelectedTitle(title);
  }, []);

  const filterTitles = (titleList) => {
    return titleList.filter((title) => {
      let years;
      if (searchType.current === "episode") {
        years = title["Released"].split("-").map((y) => Number(y));
        years = [years[0]];
      } else {
        years = title["Year"].split("–").map((y) => Number(y));
      }
      let isValid = false;
      if (years.length > 1) {
        isValid = yearRange.current.start <= years[0] && years[1] <= yearRange.current.end;
      } else {
        isValid = yearRange.current.start <= years[0] && years[0] <= yearRange.current.end;
      }
      if (selectedTitle === title["imdbID"] && !isValid) setSelectedTitle(null);
      return isValid;
    })
  }

  const handleSearchTitle = async () => {
    try {
      currentPage.current = 1;
      setTitles(null);
      setIsLoading(true);
      setSelectedTitle(null);
      setTitleError(null);
      const moviesData = await searchTitle({ searchTerm: searchTerm.current, searchType: searchType.current, page: currentPage.current, year: yearRange.current });
      if (searchType.current === "episode") {
        totalTitles.current = Number(moviesData["totalSeasons"]);
        completeTitleList.current = moviesData["Episodes"];
        canLoadMoreTitles.current = currentPage.current < totalTitles.current;
      } else {
        totalTitles.current = Number(moviesData["totalResults"]);
        completeTitleList.current = moviesData["Search"];
        canLoadMoreTitles.current = moviesData["Search"].length < totalTitles.current;
      }
      let filteredTitles = filterTitles(completeTitleList.current);
      setTitles(filteredTitles);
      setIsLoading(false);
    } catch (ex) {
      setIsLoading(false);
      setTitleError(ex["Error"]);
    }
  };

  const handleLoadMoreTitles = async () => {
    currentPage.current++;
    setIsLoading(true);
    try {
      const titleData = await searchTitle({ searchTerm: searchTerm.current, searchType: searchType.current, page: currentPage.current, year: yearRange.current });
      let titleDataResult = titleData["Search"]
      if (searchType.current === "episode") {
        titleDataResult = titleData["Episodes"];
      }
      completeTitleList.current = [...completeTitleList.current, ...titleDataResult];
      let filteredTitles = filterTitles(titleDataResult);
      if (searchType.current === "episode") {
        canLoadMoreTitles.current = currentPage.current < totalTitles.current;
      } else {
        canLoadMoreTitles.current = completeTitleList.current.length < totalTitles.current;
      }
      setTitles([...titles, ...filteredTitles]);
      setIsLoading(false);
    } catch (ex) {
      setIsLoading(false);
    }
  };

  const handleTypeChange = (val) => {
    searchType.current = val;
    if (searchTerm.current && searchTerm.current.length > 0) {
      handleSearchTitle();
    }
  }

  const handleYearChange = (range) => {
    yearRange.current = range;
    let filteredTitles = filterTitles(completeTitleList.current);
    setTitles(filteredTitles);
  }

  const resolveMainComponent = () => {
    if (titleError) {
      if (titleError === "Movie not found!") {
        return (
          <StyledMainContainer>
            <StyledEmptySearchContainer>
              <img src={SearchEmptyIcon} alt='Empty Search Icon' />
              <h3>No <span>{SEARCH_TYPES[searchType.current]}</span> found with the search term "{searchTerm.current}"</h3>
              <p>Sorry we could not find the {searchType.current}s matching your search. Please try again with a different search term &#128522;</p>
            </StyledEmptySearchContainer>
          </StyledMainContainer>
        )
      }
      return (
        <StyledMainContainer>
          <StyledErrorContainer>
            <img src={ErrorIcon} alt="Error" />
            <h2>Oops!</h2>
            <h3>Well, this is unexpected...</h3>
            <p>We could not process your request at this time &#128533;</p>
            <p>Please try again later</p>
          </StyledErrorContainer>
        </StyledMainContainer>
      )
    }
    if (titles) {
      return (
        <StyledMainContainer>
          <TitleListing
            titles={titles}
            titlesCount={totalTitles.current}
            onLoadMoreTitles={handleLoadMoreTitles}
            onTitleSelect={onTitleSelect}
            selectedTitle={selectedTitle}
            searchType={searchType.current}
            canLoadMore={canLoadMoreTitles.current}
            isLoading={isLoading}
          />
          <DetailsPanel titleId={selectedTitle} />
        </StyledMainContainer>
      )
    } else {
      if (isLoading) {
        return (
          <StyledMainContainer>
            <StyledTitlesLoadingContainer>
              <p>Getting the <span>{SEARCH_TYPES[searchType.current]}</span> for you in a jiffy!</p>
              <LoadingDots />
            </StyledTitlesLoadingContainer>
          </StyledMainContainer>
        )
      }
    }
  }

  const resolvePage = () => {
    //Initial page load
    if (!titleError && !titles && !isLoading) {
      return <Home
        onTitleSearch={handleSearchTitle}
        onTypeChange={handleTypeChange}
        onSearchInput={(val) => searchTerm.current = val}
      />
    } else {
      return (
        <>
          <Header
            onTitleSearch={handleSearchTitle}
            searchTermDefault={searchTerm.current}
            searchTypeDefault={searchType.current}
            onSearchInput={(val) => searchTerm.current = val}
            onTypeChange={handleTypeChange}
            onYearRangeChange={handleYearChange}
          />
          {resolveMainComponent()}
        </>
      )
    }
  }

  return (
    <div style={{ height: "100vh" }}>
      {
        resolvePage()
      }
    </div>
  );
}

export default App;
