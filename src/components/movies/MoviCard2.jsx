import React, { useState, useEffect } from "react";
import { useMovies } from "../context/MovieContextProvider";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useAuth } from "../context/AuthContextProvider";

const MovieCard2 = ({ elem }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useAuth();
  const { deleteMovie } = useMovies();

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = favorites.filter((id) => id !== elem.id);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(elem.id));
  }, [elem.id]);

  return (
    <Card
      sx={{
        height: 600,
        boxShadow: "none",
        margin: "2%",
        width: { md: "30vw", lg: "19vw" },
        gridColumn: "span 1",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image={elem.image}
          alt={elem.title}
          sx={{ height: 400, borderRadius: 4 }}
        />
      </CardActionArea>
      <CardContent sx={{ padding: "20px 5px 0px 5px" }}>
        <Button
          color="primary"
          variant="outlined"
          size="medium"
          onClick={addToFavorites}
        >
          Убрать из избранного
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard2;
