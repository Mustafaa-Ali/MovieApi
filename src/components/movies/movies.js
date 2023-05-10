// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from '../axios/axios';

// const Movie = () => {
//   const img = "https://image.tmdb.org/t/p/w500/";

//   const [page, setPage] = useState(1);
//   const [allMovies, setAllMovies] = useState([]);
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     getMovies();
//   }, [page]);

//   const getMovies = async () => {
//     const response = await axios.get(`/popular?page=${page}`);
//     setAllMovies(response.data.results);
//     setMovies(response.data.results);
//   }

//   const handleNextPage = () => {
//     setPage(page + 1);
//   }

//   const handlePreviousPage = () => {
//     setPage(page - 1);
//   }

//   const handleSearch = (e) => {
//     const searchQuery = e.target.value.toLowerCase();
//     const filteredMovies = allMovies.filter(
//       (movie) => movie.title.toLowerCase().includes(searchQuery)
//     );
//     setMovies(filteredMovies);
//   }
  

//   return (
//     <>
     
//       <div className="container mx-auto">
//         <div className="row my-4">
//           <div className="col-md-4 mx-auto">
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Search movies..."
//                 onChange={handleSearch}
//               />
//             </div>
//           </div>
//         </div><br/>
//         <div className="row justify-content-center">
//           {movies.map((movie) => {
//             return (
//               <div key={movie.id} className="card col-md-2 mb-3 m-1" >
//                 <Link to={`/MovieDetails/${movie.id}`} className="text-decoration-none">
//                   <div style={{ position: 'relative' }}>
//                     <img src={`${img}/${movie.poster_path}`} className="card-img-top" alt="..." />
//                     <span style={{
//                       position: 'absolute', top: '10px', right: '10px', backgroundColor: '#C42D0B',
//                       color: 'white', padding: '5px', borderRadius: '5px'
//                     }}>{movie.vote_average}</span>
//                   </div>
//                   <div className="card-body">
//                     <h5 className="card-title text-black"> {movie.original_title} </h5>
//                     <h6 className="card-text text-black"> release_date: {movie.release_date}</h6>
//                   </div>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
//         <div className="w-25 mx-auto text-center my-5">
//           <nav aria-label="Page navigation example">
//             <ul className="pagination justify-content-center">
//               <li className={`page-item ${page === 1 && 'disabled'}`}>
//                 <button className="page-link" onClick={handlePreviousPage}>Previous</button>
//               </li>
//               <li className="page-item"><p className="page-link">{page}</p></li>
//               <li className="page-item">
//                 <button className="page-link" onClick={handleNextPage}>Next</button>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Movie;

import React, { useState, useEffect } from 'react';
import MovieCard from '../moviescard/moviescard';
import MovieDetails from '../moviedetails/moviedetails';
import Pagination from 'react-paginate';
import './movies.css';
// import Favorites from '../favorite/favorite';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  // const [favorites, setFavorites] = useState([]);
  

  useEffect(() => {
    async function fetchMovies() {
      try {
        const apiKey = 'bf86013c066ab4c5f8ff00b2549cde1f';
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage + 1}`;
        if (searchQuery) {
          url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&page=${currentPage + 1}`;
        }
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch movies');
        }
        const data = await response.json();
        setMovies(data.results);
        setPageCount(data.total_pages);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  },
   [currentPage, searchQuery]);

  const handleViewDetails = (movie) => {
    setSelectedMovie(movie);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(0);
  };
  // const handleAddToFavorites = (movie) => {
  //   setFavorites(prevFavorites => [...prevFavorites, movie]);
  //   onAddToFavorites={handleAddToFavorites}
  // };
  
  return (
    <div className='container'>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-bar"
        />      </div>
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-4 mb-3" key={movie.id}>
            <MovieCard movie={movie} onViewDetails={handleViewDetails}  />

          </div>
        ))}
      </div>
      <Pagination
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"

      /><br/>
      {selectedMovie && <MovieDetails movie={selectedMovie}  onClose={() => setSelectedMovie(null)}  />}

    </div>
  );
};

export default Movies;
