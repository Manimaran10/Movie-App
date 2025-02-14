import React, { useEffect, useState } from 'react';
// import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { MovieDisplay } from './MovieDisplay';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API } from '../global';

export function MovieList(){
    const [movieList,setMovieList] =  useState([]);
  
    const getMovie =()=>{
        fetch(`${API}/maran/movies`)
        .then((data)=>data.json())
          .then ((mvs)=>setMovieList(mvs))
    }
    
    useEffect(()=>getMovie(),[])

    const deleteMovie=(id)=>{
        console.log("Delete movie", id);
        // fetch(`${API}/maran/movies/${id}`,{
        //     method : "DELETE"
        // })
        // .then(()=>getMovie());
    }

    const navigate = useNavigate();

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
                editButton={
                    <IconButton 
                    sx={{marginLeft :'auto',
                        fontSize : 'smaller'}}
                        onClick={()=>navigate(`/movie-list/edit/${val.id}`)}
                        color='secondary' >
                        <EditIcon fontSize='small'/>
                    </IconButton>}
                />
                 
            })}
        </div>
    </div> )
}


