// import { useState } from "react"
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import {useFormik} from "formik";
import * as yup from "yup";
import { API } from '../global';

// import { setMovieList } from "../App";



export function AddMovie(){
   
    const formValidation = yup.object(
      {name : yup.string().required('Enter the movie name'),
       poster : yup.string().required('Enter the poster link').url('Poster must be a valid URL'),
       rating : yup.number().required('Rate the movie').min(0,'Rating must be 0 to 10').max(10,'Rating must be 0 to 10'),
       summary : yup.string().required('Enter movie summary').min(20, 'Summary must have atleast 20 letters').max(250)
      }
    )
    const {handleBlur,handleChange,handleSubmit,touched,errors,values} = useFormik({
      initialValues : {
        name : '',
        poster : '',
        rating : '',
        summary : ''
      },
      validationSchema : formValidation,
      onSubmit :(newMovie)=>{
        console.log('Formvalues', newMovie);
        addingMovie(newMovie)}
    })
   
    const navigate = useNavigate();

    const addingMovie = async (newMovie)=>{  
      await fetch(`${API}/maran/movies`,{
        method : "POST",
        body : JSON.stringify(newMovie),
        headers:{"Content-Type": "application/json",},
      })
      navigate("/movie-list")
    }
    
    return(
    <form onSubmit={handleSubmit} className="addmovie-form">
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
      
      <Button type="submit" variant="contained" >
        Add Movie</Button>  
            
    </form>
        
    )
}