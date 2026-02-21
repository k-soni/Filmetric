import { useEffect, useState } from "react";
import genreids, { IMAGE_BASE_URL } from "../constant";

function Watchlist() {
  const [watchList, setWatchlist] = useState([]);
  useEffect(() => {
    const watchListFromStorage = JSON.parse(localStorage.getItem("watchlist"));
    setWatchlist(watchListFromStorage);
  }, []);

  const List = ({ movie }) => {
    return (
      <tr>
        <td className="px-6 py-6 whitespace-nowrap">
          <div className="flex items-center">
            <div className="">
              <img
                className="rounded-full"
                src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
                alt="User avatar"
              />
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
              {movie.title}
              </div>
            </div>
          </div>
        </td>
        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
          {movie.vote_average}
        </td>
        <td className="px-6 py-2 whitespace-nowrap">
            <div className="">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {movie.popularity}
              </div>
            </div>
        </td>
        <td className="px-6 py-2 whitespace-nowrap">
            <div className="">
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                {genreids[movie.genre_ids[0]]}
              </div>
            </div>
        </td>
      </tr>
    );
  };

  const sortAscending = () => {
    const watchListAsc = watchList.sort((a,b) => a.vote_average - b.vote_average);
    setWatchlist([...watchListAsc]);
  }

  const sortDesending = () => {
    const watchListDesc = watchList.sort((a,b) => b.vote_average - a.vote_average);
    setWatchlist([...watchListDesc]);
  }

  return (
    <div className="dark:bg-gray-900 p-4">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider flex justify-evenly">
              <div className="hover:cursor-pointer mr-1" onClick={sortAscending}>🔼</div>
              Ratings
              <div className="hover:cursor-pointer ml-1" onClick={sortDesending}>🔽</div>
            </th>
            <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Popularity
            </th>
            <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Genre
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {watchList?.map((wl) => (
            <List movie={wl} key={wl.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Watchlist;
