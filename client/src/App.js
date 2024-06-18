import { useState, useRef } from 'react';

import Header from './components/Header/Header';

import { StyledMainContainer } from './App.style';
import LandingPage from './components/LandingPage/LandingPage';

import { DEFAULT_YEAR_RANGE } from './constants/titles';
import EmptySearch from './EmptySearch';
import SearchError from './SearchError';
import SearchLoading from './SearchLoading';
import Home from './components/Home/Home';
import { SearchTermContext, SearchTypeContext, SetSearchTermContext, SetSearchTypeContext } from './context/FilterContexts';
import { SetTitlesListContext, TitlesListContext } from './context/TitlesContext';
import useTitleSearch from './hooks/useTitleSearch';
import { GetTitlesContext } from './context/GetTitlesContext';
import { filterTitles } from './utils/titlesHelper';
import { SelectedTitleContext, SetSelectedTitleContext } from './context/SelectedTitleContext';

function App() {
  const [titlesData, setTitlesData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("any");
  const [selectedTitle, setSelectedTitle] = useState(null);

  const { getTitles, isLoading: searchLoading, error: searchError } = useTitleSearch(setTitlesData);
  const { filteredTitles, currentPage, unfiltredTitles, totalTitles, hasMoreTitles } = titlesData;

  const yearRange = useRef(DEFAULT_YEAR_RANGE);

  const handleSearchTitle = async (term = searchTerm, type = searchType) => {
    setSelectedTitle(null);
    getTitles({ searchTerm: term, searchType: type, page: 0, yearRange: yearRange.current, unfiltredTitles: [], filteredTitles: [] });
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
    if (searchError) {
      if (searchError === "Movie not found!") {
        return (
          <StyledMainContainer>
            <EmptySearch searchTerm={searchTerm} searchType={searchType} />
          </StyledMainContainer>
        )
      }
      return (
        <StyledMainContainer>
          <SearchError />
        </StyledMainContainer>
      )
    }
    if (searchLoading) {
      return (
        <StyledMainContainer>
          <SearchLoading searchType={searchType} />
        </StyledMainContainer>
      )
    }
    if (filteredTitles) {
      return (
        <StyledMainContainer>
          <Home
            pageNumber={currentPage.current}
            titles={filteredTitles}
            titlesCount={totalTitles}
            originalTitleList={unfiltredTitles}
            canLoadMore={hasMoreTitles}
            isLoading={searchLoading}
            yearRange={yearRange.current}
          />
        </StyledMainContainer>
      )
    }
  }

  const resolvePage = () => {
    //Initial page load
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
          {resolveMainComponent()}
        </>
      )
    }
  }

  return (
    <div style={{ height: "100vh" }}>
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
    </div>
  );
}

export default App;
