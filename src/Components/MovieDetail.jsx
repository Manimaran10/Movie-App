import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { movieList } from './MovieDashboard';



export function MovieDetail() {
    const { id } = useParams();
    const[detail, setDetail]= useState({});

    useEffect(()=>{
        fetch(`https://666f1937f1e1da2be521f8a9.mockapi.io/maran/movies/${id}`)
            .then((data)=>data.json())
                .then((mvs)=>setDetail(mvs))
    },[id])
    
    // const mov = movieList[id]
    return (
        <div className='movie-detailpage'>
            <div>
                <img className='movie-detailpage-poster' src={detail.poster} alt='poster' />
            </div>
            <div className='movie-detailpage-details'>
                <h1>{detail.name}</h1>
                <h3>Rating ⭐: {detail.rating}</h3>
                <p>{detail.summary}</p>
            </div>

        </div>
    );
}
