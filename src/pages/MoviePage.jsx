import React from "react";
import SideBar from "../components/movies/SideBar";
import MovieList from "../components/movies/MovieList";

const MoviePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        backgroundImage: `url('https://images.wallpapershq.com/wallpapers/1432/wallpaper_1432_1920x1080.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div style={{ width: "300px", flex: "none" }}>
        <SideBar />
      </div>
      <MovieList />
    </div>
  );
};

export default MoviePage;
