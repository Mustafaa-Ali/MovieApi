import React, { useState, useEffect } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './MovieCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieToFavorites, removeMovieFromFavorites } from '../store/action';

const MovieCard = ({ movie, onViewDetails }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  

  useEffect(() => {
    const movieIds = favorites.map((movie) => movie.id);
    setIsFavorite(movieIds.includes(movie.id));
  }, [favorites, movie]);

  const handleAddToFavorites = () => {
    dispatch(addMovieToFavorites(movie));
    setIsFavorite(true);
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeMovieFromFavorites(movie.id));
    setIsFavorite(false);
  };

  const heartIcon = isFavorite ? (
    <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} onClick={handleRemoveFromFavorites} />
  ) : (
    <FontAwesomeIcon icon={faHeart} onClick={handleAddToFavorites} />
  );

  return (
    <div className="card-container">
      <Card className='m-3'>
        <div className='favorite-icon'>
          {heartIcon}
        </div>
        <Card.Img variant='top' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
        <Badge className='voteAverageBadge'>
          {movie.vote_average}
        </Badge>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <p>Release date: {movie.release_date}</p>
          <Button variant='primary' onClick={() => onViewDetails(movie)}>View Details</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
