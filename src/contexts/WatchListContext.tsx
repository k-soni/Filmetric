import { createContext, useEffect, useState } from "react";

export const WatchListContext = createContext(null);

export const WatchListContextWrapper = ({children}) => {

    const  [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        const watchListFromStorage = JSON.parse(localStorage.getItem("watchlist"));
        setWatchlist(watchListFromStorage);
    }, []);

    function handleWatchListAction(movie) {
        console.log("handleWatchListAction called");
        const allMovies = [...watchlist, movie];
        setWatchlist(allMovies);
        localStorage.setItem('watchlist', JSON.stringify(allMovies));
      }
    
      function removeFromWatchList(movie) {
        const filteredMovies = watchlist.filter(m => m.id !== movie.id);
        setWatchlist([...filteredMovies]);
        localStorage.setItem('watchlist', JSON.stringify(filteredMovies));
      } 

    return(
        <WatchListContext.Provider value={{watchlist, setWatchlist, handleWatchListAction, removeFromWatchList}}>
            {children}
        </WatchListContext.Provider>
    )
}