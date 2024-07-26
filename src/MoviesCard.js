import React from 'react'
import './MoviesCard.css'
import { Link } from 'react-router-dom'


const MoviesCard = ({data}) => {
  return (
    <div className='box-card'>

<img src={data.image }alt='movieimage'/>  

<div className='box-content'>
  
<h1> {data.name}</h1>
<p> {data.description} </p>

<div className='rate-btn'>

  <Link to={`/details/${data.id}`}> <button>show more</button> </Link>

</div>

</div>

    </div>
  )
}

export default MoviesCard
