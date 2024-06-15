import { useState, useRef } from 'react';

import { searchTitle } from './utils/movieApi';
import TitleListing from './components/TitleListing/TitleListing';
import DetailsPanel from './components/DetailsPanel/DetailsPanel';
import Header from './components/Header/Header';

import { StyledMainContainer } from './App.style';

function App() {
  const [titles, setTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("any");
  const [isLoading, setIsLoading] = useState(false);

  const totalTitles = useRef(0);
  const currentPage = useRef(1);

  const onTitleSelect = (title) => {
    setSelectedTitle(title);
  }

  const handleSearchTitle = async () => {
    try {
      const moviesData = await searchTitle({ searchTerm, searchType, page: currentPage.current });
      totalTitles.current = Number(moviesData["totalResults"]);
      setTitles([...titles, ...moviesData["Search"]]);
      setIsLoading(false);
    } catch (ex) {
      alert("Error Fetching Titles : " + ex["Error"]);
    }
  };

  const handleFilterSearch = () => {
    currentPage.current = 1;
    handleSearchTitle();
  }

  const handleLoadMoreTitles = () => {
    currentPage.current++;
    setIsLoading(true);
    handleSearchTitle();
  };

  return (
    <div style={{ height: "100vh" }}>
      <Header
        onTitleSearch={handleFilterSearch}
        onSearchInput={(val) => setSearchTerm(val)}
        onTypeChange={(val) => setSearchType(val)}
        searchTerm={searchTerm}
        searchType={searchType}
      />
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

    </div>
  );
}

export default App;
