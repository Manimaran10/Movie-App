import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
            <img className='movie-poster' src={poster} alt='poster'/>
            <div className='name-rating'>
                <h5 className='movie-title'>{name}</h5>
                <button onClick={()=>{navigate(`/movie-details/:${id}`)} }>i</button>
                <button onClick={()=>setToggle(!toggle)}>{toggle ? "^" : 'v'}</button>
                <h5 className='movie-rate'>⭐{rating}</h5>
            </div>
            <p className='movie-summary-tag'>{toggle ? summary : null}</p>
        </div>
    )
}


export function Home(){
    return <h1>Welcome Home</h1>
}