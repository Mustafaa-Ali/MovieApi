import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Languagecontext } from '../../context/context';


function Header() {
  const count = useSelector((state)=>state.count);
  const {Language,setLanguage  } = useContext(Languagecontext);
  
  return (
    <>
       <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav >
            <Nav.Link as={Link} to="/movies">Movies</Nav.Link>
            <Nav.Link as={Link} to="/favorite">Favourites</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/todo">To-Do</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <span style={{color: 'red', fontSize:'22px'}}>&hearts;</span>&nbsp;
        <span style={{color: 'white'}}>{count}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{color: 'white'}} onClick={()=>setLanguage((Language=='ar')?'en':'ar')}>{Language}</span>
      </Container>
    </Navbar>
      
      </>
  );
}

export default Header;