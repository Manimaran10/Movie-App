import { useState,useEffect } from "react"
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate,useParams } from "react-router-dom";
import {useFormik} from "formik";
import * as yup from "yup";




export function EditMovie(){
  const { id } = useParams();
  const[detail, setDetail]= useState(null);

  useEffect(()=>{
      fetch(`https://666f1937f1e1da2be521f8a9.mockapi.io/maran/movies/${id}`)
          .then((data)=>data.json())
              .then((mvs)=>setDetail(mvs))
  },[id])
  console.log(detail);
  return detail ? <EditMovieForm detail ={detail}/> : <h3>Loading...</h3>
}

  function EditMovieForm({detail}){ 
    const formValidation = yup.object(
      {name : yup.string().required('Enter the movie name'),
       poster : yup.string().required('Enter the poster link').url('Poster must be a valid URL'),
       rating : yup.number().required('Rate the movie').min(0,'Rating must be 0 to 10').max(10,'Rating must be 0 to 10'),
       summary : yup.string().required('Enter movie summary').min(20, 'Summary must have atleast 20 letters').max(250)
      }
    )
    
    const {handleBlur,handleChange,handleSubmit,touched,errors,values} = useFormik({
      initialValues : {
        name : detail.name,
        poster : detail.poster,
        rating : detail.rating,
        summary : detail.summary
      },
      validationSchema : formValidation,
      onSubmit :(updatedMovie)=>{
        console.log('Formvalues', updatedMovie);
        updateMovie(updatedMovie)}
    })
   
    const navigate = useNavigate();

    const updateMovie = async (updatedMovie)=>{  
      await fetch(`https://666f1937f1e1da2be521f8a9.mockapi.io/maran/movies/${detail.id}`,{
        method : "PUT",
        body : JSON.stringify(updatedMovie),
        headers:{"Content-Type": "application/json",},
      })
      navigate("/movie-list")
    }
    
    return(
    <form onSubmit={handleSubmit} className="edit-movie-form">
      <TextField id="outlined-basic" sx={{ width: 350}}
      type="text"
      placeholder="Title" 
      value={values.name}
      name="name"
      onChange={handleChange}
      onBlur={handleBlur}
      error = {errors.name && touched.name}
      helperText = {errors.name && touched.name ? errors.name : null}
      />

      <TextField id="outlined-basic" sx={{ width: 350}}
        type="text"
        placeholder="Poster" 
        value={values.poster}
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        error = {errors.poster && touched.poster}
        helperText = {errors.poster && touched.poster ? errors.poster : null}
       />
      
      <TextField id="outlined-basic" sx={{ width: 350}}
        type="text"
        placeholder="Rating" 
        value={values.rating}
        name="rating"
        onChange={handleChange}
        onBlur={handleBlur}
        error = {errors.rating && touched.rating}
        helperText = {errors.rating && touched.rating ? errors.rating : null}
        />
        
      <TextField id="outlined-basic" sx={{ width: 350}}
        type="text"
        placeholder="Summary" 
        value={values.summary}
        name="summary"
        onChange={handleChange}
        onBlur={handleBlur}
        error = {errors.summary && touched.summary}
        helperText = {errors.summary && touched.summary ? errors.summary : null}
       />
      
      <Button type="submit" color="success" variant="contained" >
      SAVE
      </Button>  
            
    </form>
        
    )
}