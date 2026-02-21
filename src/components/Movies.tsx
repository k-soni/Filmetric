import { useEffect, useState } from "react";
import Pagination from "./pagination";
import MovieCard from "./MovieCard";
import axios from "axios";
import { BASE_URL, API_KEY } from "../constant";
import { endPoints } from "../end-points";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [watchlist, setWatchlist] = useState([]);

  //get and set movies
  useEffect(() => {
    console.log("use effect called");
    axios
      .get(`${BASE_URL}${endPoints["trending-movies"]}&api_key=${API_KEY}&page=${pageNum}`)
      .then((res) => {
        console.log(res.data.results);
          console.log("setMovies calling");
          setMovies(res.data.results);
      });
  },[pageNum]);

  function handleNext() {
    console.log("handleNext setPageNum");
    setPageNum(pageNum + 1);
  }

  function handlePrev() {
    if (pageNum === 1) {
      setPageNum(1);
    } else {
      setPageNum(pageNum - 1);
    }
  }

  function handleWatchListAction(movie) {
    console.log("handleWatchListAction called");
    const allMovies = [...watchlist, movie];
    setWatchlist(allMovies);
  }

  function removeFromWatchList(movie) {
    const filteredMovies = watchlist.filter(m => m.id !== movie.id);
    setWatchlist([...filteredMovies]);
  } 

  return (
    <div>
      <div className="text-2xl font-bold text-center m-5">Trending Movies</div>
      <div className="flex justify-evenly flex-wrap gap-8">
        {movies.map((movie) => (
          <MovieCard movie={movie} handleWatchListAction={handleWatchListAction} watchlist={watchlist} removeFromWatchList={removeFromWatchList} />
        ))}
      </div>
      <Pagination
        pageNum={pageNum}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default Movies;
