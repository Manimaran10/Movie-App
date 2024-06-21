import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { IconButton } from '@mui/material';
import { useNavigate} from "react-router-dom";

export function ErrorPage(){
    const navigate = useNavigate();
    return(
        <div className='error-page'>
           <Card sx={{ height :260,
            width : 350,
            display : 'flex',
            flexDirection : 'column',
            }}>
            <CardMedia
            sx={{ height: 210,
                width : 350 ,
                objectFit : 'contain',
             }}
            image="https://www.gavick.com/documentation/wp-content/uploads/2014/02/error404.png"
            title="poster"/>
        <CardContent sx={{}}>
            <IconButton onClick={()=>navigate(-1)} className='error-back-button'>👈</IconButton>
    
        </CardContent>
        </Card>

       
        </div>
    )
}