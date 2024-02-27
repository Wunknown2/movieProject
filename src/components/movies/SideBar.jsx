import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useMovies } from "../context/MovieContextProvider";

const SideBar = () => {
  const { categories, getCategories, fetchByParams } = useMovies();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [showCategories, setShowCategories] = useState(false); // Состояние для отображения/скрытия категорий

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getCategories();
  }, []);

  const handleToggleCategories = () => {
    setShowCategories(!showCategories); // Изменение состояния при клике на кнопку
  };

  return (
    <Paper sx={{ p: 2 }}>
      <TextField
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
        variant="standard"
        label="Поиск фильма"
      />
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">
          Категории фильмов
        </FormLabel>
        {showCategories ? ( // Показывать категории, если showCategories равно true
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("category", e.target.value)}
          >
            <FormControlLabel control={<Radio />} value={"all"} label={"All"} />
            {categories.map((elem) => (
              <FormControlLabel
                key={elem.id}
                value={elem.name}
                label={elem.name}
                control={<Radio />}
              />
            ))}
          </RadioGroup>
        ) : null}
      </FormControl>
      <Button onClick={handleToggleCategories}>
        {showCategories ? "Закрыть категории" : "Посмотреть категории"}{" "}
      </Button>
    </Paper>
  );
};

export default SideBar;
