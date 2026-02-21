import { useState } from "react";
import Pagination from "./pagination";
import MovieCard from "./MovieCard";

function Movies() {
  const [movies, setMovies] = useState([
    {
      url: "https://img.freepik.com/free-photo/movie-background-collage_23-2149876003.jpg",
      title: "Sky",
    },
    {
      url: "https://img.freepik.com/free-photo/movie-background-collage_23-2149876003.jpg",
      title: "Sky",
    },
    {
      url: "https://img.freepik.com/free-photo/movie-background-collage_23-2149876003.jpg",
      title: "Sky",
    },
    {
      url: "https://img.freepik.com/free-photo/movie-background-collage_23-2149876003.jpg",
      title: "Sky",
    },
    {
      url: "https://img.freepik.com/free-photo/movie-background-collage_23-2149876003.jpg",
      title: "Sky",
    },
    {
      url: "https://img.freepik.com/free-photo/movie-background-collage_23-2149876003.jpg",
      title: "Sky",
    },
  ]);
  const [pageNum, setPageNum] = useState(1);

  function handleNext() {
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
          <MovieCard movie={movie} />
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
