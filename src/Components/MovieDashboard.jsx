import React, { useEffect, useState } from 'react';
// import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { MovieDisplay } from './MovieDisplay';
import { IconButton } from '@mui/material';

export function MovieList(){
    const [movieList,setMovieList] =  useState([]);
  
    const getMovie =()=>{
        fetch("https://666f1937f1e1da2be521f8a9.mockapi.io/maran/movies")
        .then((data)=>data.json())
          .then ((mvs)=>setMovieList(mvs))
    }
    
    useEffect(()=>getMovie(),[])

    const deleteMovie=(id)=>{
        console.log("Delete movie", id);
        fetch(`https://666f1937f1e1da2be521f8a9.mockapi.io/maran/movies/${id}`,{
            method : "DELETE"
        })
        .then(()=>getMovie());
    }
   

    return (
    <div>
        <div className='movie-display-container'>
            {movieList.map((val)=>{
                return <MovieDisplay key={val.id} 
                poster = {val.poster}
                name ={val.name} rating={val.rating}
                summary = {val.summary} id={val.id}
                deleteButton={
                    <IconButton 
                    sx={{marginLeft :'auto',
                    }} color='error' onClick={()=>deleteMovie(val.id)}>
                        <DeleteIcon fontSize='small'/>
                    </IconButton>}
                />
                 
            })}
        </div>
    </div> )
}


