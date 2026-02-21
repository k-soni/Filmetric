import { IMAGE_BASE_URL } from "../constant";

function MovieCard({
  movie,
  handleWatchListAction,
  watchlist,
  removeFromWatchList,
}) {
  const existsInWatch = (): boolean => {
    const foundInWatchList = watchlist.find((m) => m.id == movie.id);
    return foundInWatchList ? true : false;
  };

  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col justify-between items-end"
      style={{ backgroundImage: `url(${IMAGE_BASE_URL}${movie.poster_path})` }}
    >
      {!existsInWatch() ? (
        <div
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-red-900 hover:cursor-pointer"
          onClick={() => handleWatchListAction(movie)}
        >
          🥰
        </div>
      ) : (
        <div
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-red-900 hover:cursor-pointer"
          onClick={() => removeFromWatchList(movie)}
        >
          ❌
        </div>
      )}

      <div className="text-white w-full text-center text-2xl p-2 round bg-indigo-950">
        {movie.title}
      </div>
    </div>
  );
}

export default MovieCard;
