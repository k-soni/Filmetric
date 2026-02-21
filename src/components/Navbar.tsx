import { Link } from "react-router-dom";
import MovieLogo from "../assets/movie.svg";

function Navbar() {
    return (
        <div className="flex space-x-4 items-center pl-3 py-4">
            <Link to="/">
                <img className="w-50" src={MovieLogo} alt="logo" />
            </Link>
            <div className="text-blue-500 text-3xl font-bold space-x-8">
                <Link to="/">Movies</Link>
                <Link to="/watchlist">WatchList</Link>
            </div>
            
        </div>
    )
}

export default Navbar;