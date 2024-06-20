import { useState } from "react"
import Button from '@mui/material/Button';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";

// import { setMovieList } from "../App";

export function AddMovie(){
    // const [movieList,setmovieList] = useState(movieList);
    const [name,setName]=useState("");
    const [poster,setPoster]=useState("");
    const [rating,setRating]=useState("");
    const [summary,setSummary]=useState("");
    const navigate = useNavigate();

    const addingMovie = ()=>{
      const newMovie = {
        name : name,
        poster : poster,
        rating : rating,
        summary : summary
    
    }
    
      
    fetch("https://666f1937f1e1da2be521f8a9.mockapi.io/maran/movies",{
        method : "POST",
        body : JSON.stringify(newMovie),
        headers:{"Content-Type": "application/json",},
      })
      .then (navigate("/movie-list"))
    }
    
    return(
    <div className="addmovie-form">
    <Box
      className="addmovie-form-div"
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" type="text" placeholder="Title" onChange={(event)=>setName(event.target.value)} />
      <TextField id="outlined-basic" type="text" placeholder="Poster" onChange={(event)=>setPoster(event.target.value)} />
      <TextField id="outlined-basic" type="number" placeholder="Rating"onChange={(event)=>setRating(event.target.value)} />
      <TextField id="outlined-basic" type="text" placeholder="Summary" onChange={(event)=>setSummary(event.target.value)} />
      <Button onClick={()=>addingMovie()}variant="contained" href="#contained-buttons" >Add Movie</Button>  
    </Box>
            
    </div>
        
    )
}