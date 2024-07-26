import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import Movies from './Movies'

const Details = () => {
const params=useParams()
console.log("voici id" ,id)
const [find, setfind] = useState({})
const test=Movies.filter((el)=>el.id == params.id);
console.log("this is finded",test)
  return (
    <div>
        <h1>Details</h1>
        
        {test.map( (el) => (
           <div> 
            <img src={el.image} />
            <h3> {el.name}</h3>
            <h2> {el.description}</h2>
            <p> {el.rate}</p>

           </div>


        )

        )}
      
    </div>
  )
}

export default Details
