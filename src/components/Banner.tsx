import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from "../constant";
import { endPoints } from "../end-points";

function Banner() {
  const [banner, setBanner] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios.get(`${BASE_URL}${endPoints['trending-movies']}&api_key=${API_KEY}`).then(res => {
      const firstMovies = res.data.results[0];
      const firstMoviePoster = firstMovies.backdrop_path;
      setBanner(`${IMAGE_BASE_URL}${firstMoviePoster}`);
      setTitle(firstMovies.title);
    })
  },[]);
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover flex items-end"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
        <div className="text-white w-full text-center text-2xl">
        {title}
        </div>
    </div>
    
  );
}

export default Banner;
