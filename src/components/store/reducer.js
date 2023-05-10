
import { ADD_MOVIE_TO_FAVORITES, REMOVE_MOVIE_FROM_FAVORITES } from './actionType';

const initialState = {
  favorites: [],
  count:0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.payload.movie],
        count:state.count +1
      };
    case REMOVE_MOVIE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((movie) => movie.id !== action.payload.movieId),
        count:state.count -1
      };
    default:
      return state;
  }
};

export default reducer;
