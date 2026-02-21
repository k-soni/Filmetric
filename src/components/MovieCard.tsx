function MovieCard({movie}) {
    return (
        <div
          className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300"
          style={{ backgroundImage: `url(${movie.url})` }}
        >
          <div className="text-white w-full text-center text-2xl p-2 round bg-indigo-950">
            {movie.title}
          </div>
        </div>
      );
}

export default MovieCard;