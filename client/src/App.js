import { useState } from 'react';

import { searchTitle } from './utils/movieApi';
import TitleListing from './components/TitleListing/TitleListing';
import DetailsPanel from './components/DetailsPanel/DetailsPanel';
import Header from './components/Header/Header';

import { StyledMainContainer } from './App.style';

function App() {
  const [titleList, setTitleList] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState();

  const onTitleSelect = (title) => {
    setSelectedTitle(title);
  }

  const handleTitleSearch = async ({ searchTerm, searchType }) => {
    try {
      const moviesData = await searchTitle({ searchTerm, searchType });
      setTitleList(moviesData["Search"]);
    } catch (ex) {
      console.log(ex);
      alert("Error Fetching Titles : " + ex["Error"]);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <Header onTitleSearch={handleTitleSearch} />
      <StyledMainContainer>
        <TitleListing titles={titleList} onTitleSelect={onTitleSelect} selectedTitle={selectedTitle} />
        <DetailsPanel titleId={selectedTitle} />
      </StyledMainContainer>

    </div>
  );
}

export default App;
