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
import { SEARCH_TYPES } from './constants/titles';

function App() {
  const [titles, setTitles] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [titleError, setTitleError] = useState();

  const searchTerm = useRef("");
  const searchType = useRef("any");
  const yearRange = useRef();
  const totalTitles = useRef(0);
  const currentPage = useRef(1);

  const onTitleSelect = useCallback((title) => {
    setSelectedTitle(title);
  }, []);

  const handleSearchTitle = async () => {
    try {
      currentPage.current = 1;
      setTitles(null);
      setIsLoading(true);
      setSelectedTitle(null);
      setTitleError(null);
      const moviesData = await searchTitle({ searchTerm: searchTerm.current, searchType: searchType.current, year: yearRange });
      totalTitles.current = Number(moviesData["totalResults"]);
      setTitles(moviesData["Search"]);
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
      const moviesData = await searchTitle({ searchTerm: searchTerm.current, searchType: searchType.current, page: currentPage.current, year: yearRange });
      setTitles([...titles, ...moviesData["Search"]]);
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

  const handleYearChange = (yearRange) => {
    yearRange.current = yearRange;
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
            <img src={ErrorIcon} alt="Error Image" />
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
