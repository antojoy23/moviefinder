import { useState, useRef, useCallback } from 'react';

import { searchTitle } from './utils/movieApi';
import TitleListing from './components/TitleListing/TitleListing';
import DetailsPanel from './components/DetailsPanel/DetailsPanel';
import Header from './components/Header/Header';

import { StyledMainContainer } from './App.style';
import Home from './components/Home/Home';

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
          <>The requested title not found!</>
        )
      }
      return (
        <>Error fetching titles: {titleError}</>
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
          <>Loading Titles</>
        )
      } else {
        return <>Enter a Movie, Series or Episode title</>
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
