// import logo from './logo.svg';
import './App.css';
import { MovieList } from './Components/MovieDashboard';
import { MovieDetail } from './Components/MovieDetail';
import { Routes, Route, useNavigate} from "react-router-dom";
import { Home } from './Components/Home';
import { useState,useEffect } from 'react';
import { AddMovie } from './Components/AddMovie';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';


 


function App() {
  const [mode,setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  const [movieList,setMovieList] =  useState([]);
  useEffect(()=>{
    fetch("https://666f1937f1e1da2be521f8a9.mockapi.io/maran/movies")
    .then((data)=>data.json())
      .then ((mvs)=>setMovieList(mvs))
  },[])
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <div className="App">
      <AppBar className='appbar' position="static">
        <Toolbar className='appbar-contents'>
          <div className='appbar-div'>
          <Button onClick={()=>navigate('/')} size='small' color="inherit">Home</Button>
          <Button onClick={()=>navigate('/movie-list')} size='small' color="inherit">MovieList</Button>
          <Button onClick={()=>navigate('/addmovie')} size='small' color="inherit">AddNewMovie</Button>
          </div>
          <div>
            <IconButton onClick={()=>setMode(mode=== 'dark' ? 'light': 'dark')}>
            {mode==='dark' ? <Brightness7Icon /> : <Brightness4Icon /> }
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie-details/:id" element={<MovieDetail movieList={movieList}/>} />
        <Route path="/movie-list" element={<MovieList movieList={movieList} />} />
        <Route path="/addmovie" element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>} />
      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
