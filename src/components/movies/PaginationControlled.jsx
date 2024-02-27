import { Pagination, Stack, Typography } from "@mui/material";
import React from "react";

const PaginationControlled = ({ count, page, handleChange }) => {
  return (
    <Stack spacing={2}>
      <Typography>Страница: {page} </Typography>
      <Pagination count={count} color="secondary" onChange={handleChange} />
    </Stack>
  );
};

export default PaginationControlled;
