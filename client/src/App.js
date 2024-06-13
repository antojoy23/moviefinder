import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movieList, setMovieList] = useState();

  useEffect(() => {
    let controller = new AbortController();
    let signal = controller.signal;

    const fetchMovies = async () => {
      try {
        const result = await fetch('http://localhost:9000/omdb', {
          signal
        });
        const movie = await result.json();
        console.log("Result ", movie.response);
        setMovieList(movie.response);
      } catch (ex) {
        if (ex.name === "AbortError") {
          console.warn("Request aborted");
        } else {
          console.error(ex.name);
        }
      }
    }
    fetchMovies();
    return () => {
      controller && controller.abort();
    }
  }, []);

  const resolveLayout = () => {
    if (movieList) {
      return (
        <>{JSON.stringify(movieList)}</>
      )
    } else {
      return (<>Fetching results ...</>)
    }
  }
  return (
    <div>
      {resolveLayout()}
    </div>
  );
}

export default App;
