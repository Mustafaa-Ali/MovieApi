
// import {movieReducer} from './movieReducer'


// export default function changeMovies(){



//     return (dispatch)=>{

//       return   async function fetchMovies() {
//         try {
//           const apiKey = 'bf86013c066ab4c5f8ff00b2549cde1f';
//           let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=`;
          
//           const response = await fetch(url);
//           if (!response.ok) {
//             throw new Error('Failed to fetch movies');
//           }
//           const data = await response.json();
//         //   setMovies(data.results);
//         //   setPageCount(data.total_pages);
//         dispatch({type:"SET_MOVIES",payload:res.data.movies})
//         } catch (error) {
//           console.error(error);
//         }
//       }

//     }
// }