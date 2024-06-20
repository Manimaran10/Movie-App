import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import { IconButton } from '@mui/material';


export function MovieDisplay({ poster, name, rating, summary, id,deleteButton }) {
    const [toggle, setToggle] = useState(true);
    const navigate = useNavigate();
    
    const [likeValue, setLikeValue]= useState()
    const[disLikeValue,setDisLikeValue]= useState(false)
    const likedMovie =()=>{
        setLikeValue(true)
        setDisLikeValue(false)
   } 
   
   const dislikedMovie =()=>{
        setLikeValue(false)
        setDisLikeValue(true)
   }
    return (

        <div className='movie-container-box'>
            <Card sx={{ maxWidth: 210}}>
                <CardMedia
                    sx={{ height: 340 }}
                    image={poster}
                    title="poster" />
                <CardContent sx={{ padding : 1 }}>
                    <Typography gutterBottom variant="h6" component="div">
                        <div className='name-rating'>
                            <h6 className='movie-title'>{name}</h6>
                            <InfoRoundedIcon color="primary" fontSize='small' onClick={() => { navigate(`/movie-details/${id}`); }} />
                            <span onClick={() => setToggle(!toggle)}>{toggle ? <ExpandLessRoundedIcon fontSize="small" /> : <ExpandMoreRoundedIcon fontSize="small" />}</span>
                            <h5 className='movie-rate'>⭐{rating}</h5>

                        </div>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <p className='movie-summary-tag'>{toggle ? summary : null}</p>
                    </Typography>

                </CardContent>
                <CardActions sx={{paddingTop : 0.4 }} className='like-dislike'>
                    <IconButton 
                        sx={{fontSize : 'medium'}}
                        onClick={()=>likedMovie()}
                        color={likeValue ? 'primary' : 'null'}
                        
                        >👍</IconButton>
                    <IconButton 
                        sx={{fontSize : 'medium'}}
                        onClick={()=>dislikedMovie()}
                        color={disLikeValue ? 'primary' : 'null'}
                        
                        >👎</IconButton>
                    {deleteButton}
                </CardActions>
            </Card>
        </div>
    );
}
