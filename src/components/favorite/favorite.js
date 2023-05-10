import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieCard from "../moviescard/moviescard";
import { removeMovieFromFavorites } from "../store/action";


function Favorite({onViewDetails}) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  // const count = useSelector((state)=>state.count);

  const handleRemoveFavorite = (movie) => {
    dispatch(removeMovieFromFavorites(movie.id));
  };

  return (
    
    <div className="container">
      <div className="row">
        {favorites.map((movie) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={movie.id}>
            <MovieCard
              movie={movie}
              // onRemoveFavorite={handleRemoveFavorite}
              // buttonText="View Details"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorite;
