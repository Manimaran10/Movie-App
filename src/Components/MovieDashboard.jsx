import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';

export function MovieList({movieList}){


    return (
    <div>
        <div className='movie-display-container'>
            {movieList.map((val,index)=>{
                return <MovieDisplay key={index} poster = {val.image} name ={val.title} rating={val.rating} summary = {val.summary} id={index}/>
            })}
        </div>
    </div> )
}

export function MovieDisplay({poster,name,rating,summary,id}){
    const[toggle, setToggle]= useState (true);
    const navigate = useNavigate();
    
    return(
        
    <div className='movie-container-box'>
        <Card sx={{ maxWidth: 210 }}>
            <CardMedia
            sx={{ height: 340 }}
            image={poster}
            title="poster"/>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        <div className='name-rating'>
            <h6 className='movie-title'>{name}</h6>
            <InfoRoundedIcon color="primary" fontSize="smaller" onClick={()=>{navigate(`/movie-details/${id}`)}}/>
            <span onClick={()=>setToggle(!toggle)}>{toggle ? <ExpandLessRoundedIcon fontSize="small" /> : <ExpandMoreRoundedIcon fontSize="small"/>}</span>
                <h5 className='movie-rate'>⭐{rating}</h5>
        </div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p className='movie-summary-tag'>{toggle ? summary : null}</p>
        </Typography>
      </CardContent>
    </Card>
            {/* <img className='movie-poster' src={poster} alt='poster'/>
            <div className='name-rating'>
                <h5 className='movie-title'>{name}</h5>
                <button onClick={()=>{navigate(`/movie-details/${id}`)} }>i</button>
                <button onClick={()=>setToggle(!toggle)}>{toggle ? "^" : 'v'}</button>
                <h5 className='movie-rate'>⭐{rating}</h5>
            </div>
            <p className='movie-summary-tag'>{toggle ? summary : null}</p> */}
    </div>
    )
}


export function Home(){
    return <h1>Welcome Home</h1>
}