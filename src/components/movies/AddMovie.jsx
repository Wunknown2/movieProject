import React, { useEffect, useState } from "react";
import { useMovies } from "../context/MovieContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";
import CategorySelect from "./CategorySelect";

const AddMovie = () => {
  const { addMovie, categories, getCategories } = useMovies();
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    image: "",
    video: "",
  });
  useEffect(() => {
    getCategories();
  }, []);
  const handleInput = (e) => {
    console.log(e.target.name);
    if (e.target.name === "price") {
      const obj = {
        ...movie,
        [e.target.name]: Number(e.target.value),
      };
      setMovie(obj);
    } else {
      const obj = { ...movie, [e.target.name]: e.target.value };
      setMovie(obj);
    }
  };
  const handleClick = () => {
    addMovie(movie);
  };
  return (
    <Box
      sx={{
        width: "50vw",
        height: "85vh",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        ADMIN PAGE
      </Typography>
      <TextField
        onChange={handleInput}
        fullWidth
        name="title"
        label="Title"
        variant="outlined"
      />
      <CategorySelect categories={categories} handleInput={handleInput} />
      <TextField
        onChange={handleInput}
        fullWidth
        name="description"
        label="Desciprion"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        fullWidth
        name="price"
        label="Price"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        fullWidth
        name="image"
        label="Image URL"
        variant="outlined"
      />
      <TextField
        onChange={handleInput}
        fullWidth
        name="video"
        label="Video URL"
        variant="outlined"
      />
      <Button fullWidth variant="outlined" onClick={handleClick}>
        ADD MOVIE
      </Button>
    </Box>
  );
};

export default AddMovie;
