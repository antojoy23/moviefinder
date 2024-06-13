import { useState } from 'react';
import './App.css';
import { searchTitle } from './utils/movieApi';

function App() {
  const [titleList, setTitleList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("any");

  const checkAndSearchMovie = async (e) => {
    if (e.which === 13) {
      if (searchTerm.length > 0) {
        try {
          const moviesData = await searchTitle({ searchTerm, searchType });
          setTitleList(moviesData["Search"]);
        } catch (ex) {
          console.error("Error searching title: ", ex);
        }
      } else {
        alert("Enter a valid search");
      }
    }
  }

  const handleTypeChange = (e) => {
    setSearchType(e.target.value);
  }

  return (
    <div>
      <input type='search' onKeyDown={checkAndSearchMovie} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <input type="radio" id="any" onChange={handleTypeChange} name="type" value="any" checked={searchType === "any"} />
      <label htmlFor="any">Any</label>
      <input type="radio" id="movie" onChange={handleTypeChange} name="type" value="movie" checked={searchType === "movie"} />
      <label htmlFor="movie">Movies</label>
      <input type="radio" id="series" onChange={handleTypeChange} name="type" value="series" checked={searchType === "series"} />
      <label htmlFor="series">Series</label>
      <input type="radio" id="episodes" onChange={handleTypeChange} name="type" value="episode" checked={searchType === "episode"} />
      <label htmlFor="episodes">Episodes</label>
      <ul>
        {
          titleList.map((title) => {
            return <li key={title["imdbID"]}>{title["Title"]} | {title["Year"]}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
