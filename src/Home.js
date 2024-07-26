import React from 'react'
import Movies from './Movies';
import MoviesCard from './MoviesCard';
import AddMovie from './AddMovie';
import { useState } from 'react';
import Navbar from './Navbar.js'


const Home = () => {
    const [allmovies , setallmovies]= useState(Movies)
    console.log(allmovies)
    const ajoutermovie=(x)=>{
  return (setallmovies([x,...allmovies]))
  
    }
  
    const [search , setsearch]= useState("")
  const [newrate,setnewrate]=useState(0)
  
  
    const ratingChanged = (y) => {
      return(setnewrate(y));
    };



  return (
    <div>
        <div>
            <Navbar/>
        </div>
      <AddMovie   fnct={ajoutermovie}/>
<input type="text" placeholder='search'   onChange={(e)=>setsearch(e.target.value) } />



    <div className="box-content">
    {allmovies.filter((el)=>el.name.toLowerCase().includes(search.toLowerCase()) && el.rate>=newrate).map((el)=><MoviesCard data={el}/>)}  
    </div>



    </div>
  )
}

export default Home
