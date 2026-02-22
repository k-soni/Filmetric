import { useContext, useEffect, useState } from "react";
import genreids, { IMAGE_BASE_URL } from "../constant";
import { WatchListContext } from "../contexts/WatchListContext";

function Watchlist() {
  const [search, setSearch] = useState('');
  const [genreList, setGenresList] = useState(['All Genre', 'Action', 'Suspense','Thriller']);
  const [currentGenre, setCurrentGenre] = useState('All Genre');
  const {watchlist, setWatchlist, removeFromWatchList} = useContext(WatchListContext);

  // useEffect(() => {
  //   const watchListFromStorage = JSON.parse(localStorage.getItem("watchlist"));
  //   setWatchlist(watchListFromStorage);
  // }, []);

  useEffect(() => {
    const watchListFromStorage = JSON.parse(localStorage.getItem("watchlist"));
    let temp = watchListFromStorage.map(listItem => {
      return genreids[listItem.genre_ids[0]];
    })
    temp = new Set(temp);
    setGenresList(['All Genre', ...temp]);
  },[])

  const onSearchAction = (e) => {
    setSearch(e.target.value);
  };

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
        <td className="px-6 py-2 whitespace-nowrap">
         
            <div className="text-sm font-medium text-gray-900 dark:text-white hover:cursor-pointer" onClick={() => removeFromWatchList(movie)}>
              🗑️
            </div>
        </td>
      </tr>
    );
  };

  const sortAscending = () => {
    const watchListAsc = watchlist.sort(
      (a, b) => a.vote_average - b.vote_average
    );
    setWatchlist([...watchListAsc]);
  };

  const sortDesending = () => {
    const watchListDesc = watchlist.sort(
      (a, b) => b.vote_average - a.vote_average
    );
    setWatchlist([...watchListDesc]);
  };

  const onFilterAction = (genre) => {
    setCurrentGenre(genre);
  }

  return (
    <div className="dark:bg-gray-900 p-4">
        <div className="flex justify-between m-4">
          {genreList.map((gl) => {
            const isActive = currentGenre == gl;
            const baseStyles = 'flex justify-center items-center h-[3rem] w-[8rem] rounded-lg text-white font-bold mx-4 text-wrap hover:cursor-pointer';
            const bgColor = isActive ? 'bg-blue-400' : 'bg-gray-400/50'
            return (
              
              <div key={gl} className={`${baseStyles} ${bgColor}`} onClick={() => onFilterAction(gl)}>{gl}</div>
            )
          })}
        </div>
       <div className="relative p-4">
          <input  
            type="text"
            className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
            placeholder="Search"
            value={search}
            onChange={onSearchAction}
          />
        </div>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <th className="px-6 py-6 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider flex justify-evenly">
              <div
                className="hover:cursor-pointer mr-1"
                onClick={sortAscending}
              >
                🔼
              </div>
              Ratings
              <div
                className="hover:cursor-pointer ml-1"
                onClick={sortDesending}
              >
                🔽
              </div>
            </th>
            <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Popularity
            </th>
            <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Genre
            </th>
            <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
              Remove
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {watchlist
            .filter((wl) => {
              if(currentGenre == 'All Genre') {
                return true;
              } else {
                return genreids[wl.genre_ids[0]] == currentGenre;
              }
            })
            .filter((wl) => wl.title.includes(search))
            .map((wl) => (
              <List movie={wl} key={wl.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Watchlist;
