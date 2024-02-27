import React, { useEffect } from "react";
import { useMovies } from "../components/context/MovieContextProvider";
import MovieCard2 from "../components/movies/MoviCard2";

const FavoritesPage = () => {
  const { getMovies, movies } = useMovies();
  useEffect(() => {
    getMovies();
  }, []);

  // Получение избранных фильмов из localStorage
  const favoriteMoviesIds = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        backgroundImage: `url('https://images.wallpapershq.com/wallpapers/1432/wallpaper_1432_1920x1080.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100vw", // Добавленная ширина
        height: "90vh", // Добавленная высота
      }}
    >
      {movies
        .filter((elem) => favoriteMoviesIds.includes(elem.id)) // Фильтрация по избранным ID
        .map((elem) => (
          <MovieCard2 key={elem.id} elem={elem} />
        ))}
    </div>
  );
};

export default FavoritesPage;
