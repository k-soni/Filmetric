import { useEffect, useState, useContext } from "react";
import Pagination from "./pagination";
import MovieCard from "./MovieCard";
import axios from "axios";
import { BASE_URL, API_KEY } from "../constant";
import { endPoints } from "../end-points";
import { WatchListContext } from "../contexts/WatchListContext";


function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const {watchlist, setWatchlist, handleWatchListAction, removeFromWatchList} = useContext(WatchListContext);

  //get and set movies
  useEffect(() => {
    axios
      .get(`${BASE_URL}${endPoints["trending-movies"]}&api_key=${API_KEY}&page=${pageNum}`)
      .then((res) => {
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
