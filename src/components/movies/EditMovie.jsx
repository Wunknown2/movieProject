import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../context/MovieContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";

const EditMovie = () => {
  const { id } = useParams();
  const { getOneMovie, oneMovie, editMovie } = useMovies();
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });
  const handleInput = (e) => {
    if (e.target.name === "price") {
      const obj = { ...movie, [e.target.name]: Number(e.target.value) };
      setMovie(obj);
    } else {
      const obj = { ...movie, [e.target.name]: e.target.value };
      setMovie(obj);
    }
  };
  const handleClick = () => {
    editMovie(id, movie);
  };
  useEffect(() => {
    getOneMovie(id);
  }, []);
  useEffect(() => {
    if (oneMovie) {
      setMovie(oneMovie);
    }
  }, [oneMovie]);
  return (
    <Box
      sx={{
        width: "50vw",
        height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        EDIT MOVIE
      </Typography>
      <TextField
        onChange={handleInput}
        value={movie.title}
        fullWidth
        name="title"
        label="Title"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        fullWidth
        value={movie.description}
        name="description"
        label="Desciprion"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        value={movie.price}
        fullWidth
        name="price"
        label="Price"
        variant="outlined"
      />

      <TextField
        onChange={handleInput}
        fullWidth
        value={movie.image}
        name="image"
        label="Image URL"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        fullWidth
        value={movie.video}
        name="video"
        label="Video URL"
        variant="outlined"
      />
      <Button fullWidth variant="outlined" onClick={handleClick}>
        SAVE
      </Button>
    </Box>
  );
};

export default EditMovie;
