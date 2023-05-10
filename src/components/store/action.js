
import { ADD_MOVIE_TO_FAVORITES, REMOVE_MOVIE_FROM_FAVORITES } from './actionType';

export const addMovieToFavorites = (movie) => ({
  type: ADD_MOVIE_TO_FAVORITES,
  payload: {
    movie,
  },
});

export const removeMovieFromFavorites = (movieId) => ({
  type: REMOVE_MOVIE_FROM_FAVORITES,
  payload: {
    movieId,
  },
});
