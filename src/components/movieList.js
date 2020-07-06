import React,{useContext} from 'react'
import {MainContext} from './movieContext' 

const MovieList = () => {  

 const [movies,setmovies]= useContext(MainContext) 

 return(
        <React.Fragment>
         <h1>{
             movies.map(movies=>(
                 <h1>{movies.name}</h1>
             ))
           }</h1>
        </React.Fragment>
    )
}

export default MovieList