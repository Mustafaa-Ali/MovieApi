// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from '../axios/axios';
// import { Container, Card, Row, Col } from 'react-bootstrap';

// export default function MovieDetails() {
//   const img = 'https://image.tmdb.org/t/p/w500/';

//   const [dataDetails, setDataDetails] = useState({});
//   const { id } = useParams();

//   useEffect(() => {
//     getMovieById();
//   }, [id]); 

//   async function getMovieById() {
//     let data = await axios.get(`/${id}`);
//     setDataDetails(data.data);
//   }

//   return (
//     <>
//       <br />
//       <Container>
//         <Row className="justify-content-center align-items-center">
//           <Col md={6}>
//             <Card>
//               <Card.Body>
//               <Col md={12}>
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src={`${img}/${dataDetails.poster_path}`}
//                 className="img-fluid rounded-end"
//                 style={{ width: '100%', height: '450px' }}
//               />
//             </Card>
//           </Col>
//                 <Card.Title>Title: {dataDetails.original_title}</Card.Title>
//                 <Card.Text>{dataDetails.overview}</Card.Text>
//                 <Card.Text>
//                   <small className="text-muted">
//                     Release date: {dataDetails.release_date}
//                   </small>
//                 </Card.Text>
//                 <Card.Text className='voteAverageBadge'> <h4>
//                   Rating:
//                   {dataDetails.vote_average}
//                 </h4>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
          
//         </Row>
//       </Container>
//     </>
//   );
// }

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const MovieDetails = ({ movie, onClose }) => {
  return (
    <Modal show={true} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{movie.overview}</p>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MovieDetails;