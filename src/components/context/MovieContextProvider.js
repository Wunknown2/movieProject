import React, { createContext, useContext, useReducer, useState } from "react";
import { ACTIONS, API, API_CATEGORIES } from "../../helpers/const";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const movieContext = createContext();
export const useMovies = () => useContext(movieContext);
const INIT_STATE = {
  movies: [],
  oneMovie: {},
  categories: [],
};
const MovieContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case ACTIONS.GET_MOVIES:
        return { ...state, movies: action.payload };
      case ACTIONS.GET_ONE_MOVIE:
        return { ...state, oneMovie: action.payload };
      case ACTIONS.GET_CATEGORIES:
        return { ...state, categories: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //! CREATE
  const addMovie = async (newMovie) => {
    await axios.post(API, newMovie);
    navigate("/movies");
  };
  //! GET
  const getMovies = async () => {
    const { data } = await axios(`${API}${window.location.search}`);
    console.log(window.location.search);
    dispatch({
      type: ACTIONS.GET_MOVIES,
      payload: data,
    });
  };
  //! DELETE
  const deleteMovie = async (id) => {
    await axios.delete(`${API}/${id}`);
    getMovies();
  };
  //! GET_ONE_MOVIE
  const getOneMovie = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: ACTIONS.GET_ONE_MOVIE,
      payload: data,
    });
  };
  //! EDIT
  const editMovie = async (id, editedMovie) => {
    await axios.patch(`${API}/${id}`, editedMovie);
    navigate("/movies");
  };
  //! GET_CATEGORIES
  const getCategories = async () => {
    const { data } = await axios(API_CATEGORIES);
    dispatch({
      type: ACTIONS.GET_CATEGORIES,
      payload: data,
    });
  };
  //! CREATE CATEGORY
  const createCategory = async (newCategory) => {
    await axios.post(API_CATEGORIES, newCategory);
    getCategories();
  };
  //! FILTER
  const fetchByParams = (query, value) => {
    const search = new URLSearchParams(window.location.search);
    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    console.log(search);
    const url = `${window.location.pathname}?${search}`;
    navigate(url);
  };

  const values = {
    addMovie,
    getMovies,
    movies: state.movies,
    deleteMovie,
    getOneMovie,
    oneMovie: state.oneMovie,
    editMovie,
    getCategories,
    categories: state.categories,
    createCategory,
    fetchByParams,
  };
  return (
    <movieContext.Provider value={values}>{children}</movieContext.Provider>
  );
};

export default MovieContextProvider;
