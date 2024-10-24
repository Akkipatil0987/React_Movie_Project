import React from 'react'
import './CommonCard.css'
import { Link } from 'react-router-dom'
function CommonCard({data}) {
  const baseURL = 'https://image.tmdb.org/t/p/w500';
  return (
   <>
   <section className='commoncard_section'>
  <Link to={`/moviedetails/${data?.id}`}><div className='cradimg_div mb-2'>
        {/* <img src={data.image} className='cardimag'/> */}
        <img src={`${baseURL}${data.poster_path}`} alt={data.title} className="cardimag" />
    </div></Link>  
    <p className='text mb-1'>{data?.original_title}</p>
    <p className='text'>Rating: {data?.vote_average}</p>
   </section>
   </>
  )
}

export default CommonCard