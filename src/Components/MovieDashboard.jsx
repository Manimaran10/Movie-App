import React, { useState } from 'react';
const movieList = [
    {   title : "Godzilla x Kong: The New Empire",
        image : "https://m.media-amazon.com/images/M/MV5BY2QwOGE2NGQtMWQwNi00M2IzLThlNWItYWMzNGQ5YWNiZDA4XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_.jpg",
        rating : "7.5",
        summary : "Godzilla and the almighty Kong face a colossal threat hidden deep within the planet, challenging their very existence and the survival of the human race."
    },
    {
        title :'Jersey',
        image :'https://cinemachaat.com/wp-content/uploads/2020/02/jersey-poster.jpeg',
        rating : '9.1',
        summary :"Arjun, a talented but failed cricketer, decides to return to cricket in his late thirties, driven by the desire to represent the Indian cricket team and fulfil his son's wish for a jersey as a gift."
    },
    
    {
        title :'12th Fail',
        image :'https://m.media-amazon.com/images/M/MV5BZDI4OTM1ZjMtOWQxMC00OTY5LTg3NjQtMjlhMWVjODFlYTY4XkEyXkFqcGdeQXVyMTYzMTU3Njgx._V1_.jpg',
        rating : '8.9',
        summary :"IPS officer Manoj Kumar Sharma fearlessly embraces the idea of restarting his academic journey and reclaiming his destiny at a place where millions of students attempt the world's toughest competitive exam: UPSC."
    },
    
    {
        title :'Premalu',
        image :'https://assetscdn1.paytm.com/images/cinema/Premalu--705x750%20(1)-8f9226f0-e0fa-11ee-a3c7-f5f87f3f5d73.jpg',
        rating : '7.9',
        summary :'Premalu is a 2024 Indian Malayalam-language romantic comedy film directed by Girish A. D. and produced by Bhavana Studios, in the company of Fahadh Faasil and Friends and Working Class Hero.'
    },
    
    {
        title :'Leo',
        image :'https://filmfare.wwmindia.com/content/2023/sep/leovijay11695026272.jpg',
        rating : '7.2',
        summary :'Parthiban is a mild-mannered cafe owner in Kashmir, who fends off a gang of murderous thugs and gains attention from a drug cartel claiming he was once a part of them.'
    },
    
    {
        title :'Jailer',
        image :'https://static.toiimg.com/photo/92282228.cms',
        rating : '7.1',
        summary :'Muthuvel Pandian, a stern yet compassionate jailer, sets out to stop a gang when they try to flee their leader from prison.'
    },
    
    {
        title :'Mission: Impossible - Dead Reckoning Part One',
        image :'https://m.media-amazon.com/images/M/MV5BYzFiZjc1YzctMDY3Zi00NGE5LTlmNWEtN2Q3OWFjYjY1NGM2XkEyXkFqcGdeQXVyMTUyMTUzNjQ0._V1_FMjpg_UX1000_.jpg',
        rating : '7.7',
        summary :'Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. '
    },
    
    {
        title :'John Wick: Chapter 4',
        image :'https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
        rating : '7.7',
        summary :'With the price on his head ever increasing, legendary hit man John Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Japan to Berlin.'
    },
    
    {
        title :'Viduthalai Part 1',
        image :'https://www.gv.com.sg/media/imagesresize/img8254.jpg',
        rating : '8.3',
        summary :'A policeman is conflicted between duty and morality when his department begins a brutal campaign to capture a local activist.'
    },
    
    {
        title :'Thiruchitrambalam',
        image :'https://m.media-amazon.com/images/S/pv-target-images/e880e50809586f041ddccd34f74cdb1e3ef144c5feeb2752a894bf68058d1427.jpg',
        rating : '7.9',
        summary :'Thiruchitrambalam lives with his father and grandfather. He blames the former for the loss of his mother and sister and is not on good terms with the latter. Meanwhile, his love life is not so successful.'
    }
]

export function MovieList(){


    return (
    <div>
        <div className='movie-display-container'>
            {movieList.map((val)=>{
                console.log(val);
                return <MovieDisplay poster = {val.image} name ={val.title} rating={val.rating} summary = {val.summary} />
            })}
        </div>
    </div> )
}

export function MovieDisplay({poster,name,rating,summary}){
    const[toggle, setToggle]= useState (true);
    
    return(
        <div className='movie-container-box'>
            <img className='movie-poster' src={poster} alt='poster'/>
            <div className='name-rating'>
                <h4 className='movie-title'>{name}</h4>
                <button>i</button>
                <button onClick={()=>setToggle(!toggle)}>{toggle ? "^" : 'v'}</button>
                <h5 className='movie-rate'>⭐{rating}</h5>
            </div>
            <p className='movie-summary-tag'>{toggle ? summary : null}</p>
        </div>
    )
}

export function MovieDetail(){
    return(
        <div className='movie-detailpage'>
            <div>
            <img className='movie-detailpage-poster' src={movieList[0].image} alt='poster'/>
            </div>
            <div className='movie-detailpage-details'>
                <h1>{movieList[0].title}</h1>
                <h3>Rating ⭐: {movieList[0].rating}</h3>
                <p>{movieList[0].summary}</p>
            </div>
           
        </div>
    )
}