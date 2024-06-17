import React from 'react';
import { useParams } from 'react-router-dom';
// import { movieList } from './MovieDashboard';



export function MovieDetail({movieList}) {
    const { id } = useParams();
    console.log(id);
    const mov = movieList[id]
    return (
        <div className='movie-detailpage'>
            <div>
                <img className='movie-detailpage-poster' src={mov.poster} alt='poster' />
            </div>
            <div className='movie-detailpage-details'>
                <h1>{mov.name}</h1>
                <h3>Rating ⭐: {mov.rating}</h3>
                <p>{mov.summary}</p>
            </div>

        </div>
    );
}
