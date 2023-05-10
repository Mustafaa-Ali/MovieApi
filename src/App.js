
import './App.css';
import LoginForm from './components/login/login';
import Navbar from './components/navbar/header';
import RegisterForm from './components/register/register';
import TodoList from './components/todo/todo';
// import LoginForm from '../src/Components/LoginForm/loginForm'
// import RegisterForm from './Components/register/register';
// import NavBar from './Components/navBar/navBar';
import { Route, Routes } from 'react-router-dom';
import Movies from './components/movies/movies';
import NotFound from './components/not-found/notFound';
import Favorite from './components/favorite/favorite'
// import Favorite from './components/favorite/favorite';
import MovieDetails from './components/moviedetails/moviedetails';
import { useSelector } from 'react-redux';
import { LanguageProvider } from './context/context';
import { useState } from 'react';


function App() {

  const [Language, setLanguage] = useState('ar')
  return (
    <div className="App" >
      {/* <LoginForm/>
      <hr
         style={{
          background: 'blue',
          height: '20px',
        }}/>
        
      <RegisterForm/>
      <hr
         style={{
          background: 'blue',
          height: '20px',
        }}/>
      <TodoList/> */}
      
      <LanguageProvider value={{Language, setLanguage}}>
        <Navbar/>
        <Routes>
        
            <Route  path="/" element={<Movies/>} />
            <Route  path="/movies" element={<Movies/>} />
            <Route path="/favorite" element={<Favorite/>} />
            <Route path="/login" element={<LoginForm/>} />
            <Route path="/register" element={<RegisterForm/>} />
            <Route path="/todo" element={<TodoList/>} />
            <Route path="*" element={<NotFound/>} />
            <Route path="moviedetails/:id" element={<MovieDetails/>} />
        
        
        
            </Routes>
      </LanguageProvider>

    </div>
  );
}

export default App;
