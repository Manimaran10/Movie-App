import React from 'react';
import { useParams } from 'react-router-dom';
// import { movieList } from './MovieDashboard';



export function MovieDetail({movieList}) {
    const { id } = useParams();
    console.log(id);
    const mov = movieList[id]
    // const mov = movieList[id]
    return (
        <div className='movie-detailpage'>
            <div>
                <img className='movie-detailpage-poster' src={mov.image} alt='poster' />
            </div>
            <div className='movie-detailpage-details'>
                <h1>{movieList[0].title}</h1>
                <h3>Rating ⭐: {movieList[0].rating}</h3>
                <p>{movieList[0].summary}</p>
            </div>

        </div>
    );
}
