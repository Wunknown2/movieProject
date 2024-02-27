import React, { useEffect, useState } from "react";
import { useMovies } from "../context/MovieContextProvider";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Box, Pagination } from "@mui/material";
import PaginationControlled from "./PaginationControlled";

const MovieList = () => {
  //! SEARCH
  const { getMovies, movies } = useMovies();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getMovies();
  }, [searchParams]);
  //! PAGINATION
  const [page, setPage] = useState(1);
  const itemPerPage = 8;
  const count = Math.ceil(movies.length / itemPerPage);
  console.log(count);
  const currentData = () => {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;
    return movies.slice(begin, end);
  };
  const handleChange = (e, value) => {
    setPage(value);
  };
  console.log(currentData());
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          height: "auto",
        }}
      >
        {currentData().map((elem) => (
          <MovieCard key={elem.id} elem={elem} />
        ))}
      </Box>
      <PaginationControlled
        count={count}
        page={page}
        handleChange={handleChange}
        style={{ marginTop: "20px" }}
      />
    </div>
  );
};

export default MovieList;
