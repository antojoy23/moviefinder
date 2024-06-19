import { useState, useRef } from 'react';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LandingPage from './components/LandingPage/LandingPage';
import EmptySearch from './EmptySearch';
import SearchError from './SearchError';
import SearchLoading from './SearchLoading';

//Hooks
import useTitleSearch from './hooks/useTitleSearch';

//Context
import { SearchTermContext, SearchTypeContext, SetSearchTermContext, SetSearchTypeContext } from './context/FilterContexts';
import { SetTitlesListContext, TitlesListContext } from './context/TitlesContext';
import { GetTitlesContext } from './context/GetTitlesContext';
import { SelectedTitleContext, SetSelectedTitleContext } from './context/SelectedTitleContext';

import { StyledApp, StyledMainContainer } from './App.style';

import { DEFAULT_YEAR_RANGE } from './constants/titles';

import { filterTitles } from './utils/titlesHelper';

function App() {
  const [titlesData, setTitlesData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("any");
  const [selectedTitle, setSelectedTitle] = useState(null);

  const { getTitles, isLoading: searchLoading, error: searchError, setError } = useTitleSearch(setTitlesData);
  const { filteredTitles, unfiltredTitles } = titlesData;

  const yearRange = useRef(DEFAULT_YEAR_RANGE);
  const previousSearchTerm = useRef(searchTerm);
  const previousSearchType = useRef(searchType);

  const handleSearchTitle = async (term = searchTerm, type = searchType) => {
    // Avoid re-fetch if the search type and search term has not changed
    if (previousSearchTerm.current === term && previousSearchType.current === type) return;
    previousSearchTerm.current = term;
    previousSearchType.current = type;
    // For each new search we will be resetting the values
    setSelectedTitle(null);
    setError(false);
    getTitles({
      searchTerm: term,
      searchType: type,
      page: 0,
      yearRange: yearRange.current,
      unfiltredTitles: [],
      filteredTitles: []
    });
  };

  const handleTypeChange = (val) => {
    setSearchType(val);
    if (searchTerm && searchTerm.length > 0) {
      handleSearchTitle(searchTerm, val);
    }
  }

  const handleYearChange = (range) => {
    yearRange.current = range;
    let [filteredData, isSelectedTitleValid] = filterTitles(unfiltredTitles, searchType, yearRange.current, selectedTitle);
    if (!isSelectedTitleValid) setSelectedTitle(null);
    setTitlesData((data) => Object.assign({}, data, { filteredTitles: filteredData }));
  }

  const resolveMainComponent = () => {
    // Incase of error we will be rendering the error component
    if (searchError) {
      if (searchError.includes("not found")) {
        return <EmptySearch searchTerm={searchTerm} searchType={searchType} />;
      }
      return <SearchError />
    }

    // If the search request is in progress we will be rendering the error component
    if (searchLoading) {
      return <SearchLoading searchType={searchType} />
    }

    // Else it means that the search results have come and we can load the Home component
    if (filteredTitles) {
      return (
        <Home
          yearRange={yearRange.current}
        />
      )
    }
  }

  const resolvePage = () => {
    // Initial page load / First time load of the page
    if (!searchError && !filteredTitles && !searchLoading) {
      return <LandingPage
        onTitleSearch={handleSearchTitle}
        onTypeChange={handleTypeChange}
        onSearchInput={(val) => setSearchTerm(val)}
      />
    } else {
      return (
        <>
          <Header
            onTitleSearch={handleSearchTitle}
            searchTermDefault={searchTerm}
            searchTypeDefault={searchType}
            onSearchInput={(val) => setSearchTerm(val)}
            onTypeChange={handleTypeChange}
            onYearRangeChange={handleYearChange}
          />
          <StyledMainContainer>
            {resolveMainComponent()}
          </StyledMainContainer>
        </>
      )
    }
  }

  return (
    <StyledApp>
      <SearchTermContext.Provider value={searchTerm}>
        <SetSearchTermContext.Provider value={setSearchTerm}>
          <SearchTypeContext.Provider value={searchType}>
            <SetSearchTypeContext.Provider value={setSearchType}>
              <TitlesListContext.Provider value={titlesData}>
                <SetTitlesListContext.Provider value={setTitlesData}>
                  <GetTitlesContext.Provider value={getTitles}>
                    <SelectedTitleContext.Provider value={selectedTitle}>
                      <SetSelectedTitleContext.Provider value={setSelectedTitle}>
                        {
                          resolvePage()
                        }
                      </SetSelectedTitleContext.Provider>
                    </SelectedTitleContext.Provider>
                  </GetTitlesContext.Provider>
                </SetTitlesListContext.Provider>
              </TitlesListContext.Provider>
            </SetSearchTypeContext.Provider>
          </SearchTypeContext.Provider>
        </SetSearchTermContext.Provider>
      </SearchTermContext.Provider>
    </StyledApp>
  );
}

export default App;
