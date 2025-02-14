import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { API } from '../global';


export function Home(){
    const[quote,setQuote] = useState([]);
    useEffect(()=>{
        fetch(`${API}/maran/directors`)
            .then((val)=>val.json())
                .then((dir)=>setQuote(dir))
    },[]);
    return ( 
    <div className='home-display'>
        {quote.map((val)=>{
            return <HomeFun director={val.director} image = {val.image} quotes={val.quote}/>
        })}
    </div> )
}

export function HomeFun({director,image,quotes}) {
    // console.log(director);
    return(
    <div className='welcome-homepage' >
        <Card sx={{ maxWidth: 360 }}>
            <CardMedia
            sx={{ height: 260 }}
            image={image}
            title="poster"/>
        <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        <div className='director-name'>
            <h4 className='director'>{director}</h4>
        </div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p className='quotes-tag'>{quotes}</p>
        </Typography>
      </CardContent>
    </Card>
       
    </div>
)}
