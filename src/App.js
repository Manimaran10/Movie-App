// import logo from './logo.svg';
import './App.css';
import { MovieList } from './Components/MovieDashboard';
import { MovieDetail } from './Components/MovieDetail';
import { Routes, Route, useNavigate} from "react-router-dom";
import { Home } from './Components/Home';
import { ErrorPage } from './Components/ErrorPage';
import { useState } from 'react';
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
        <Route path="/movie-details/:id" element={<MovieDetail/>} />
        <Route path="/movie-list" element={<MovieList />} />
        <Route path="/addmovie" element={<AddMovie/>} />
        <Route path="*" element={<ErrorPage/>} />

      </Routes>
    </div>
    </ThemeProvider>
  );
}

export default App;
