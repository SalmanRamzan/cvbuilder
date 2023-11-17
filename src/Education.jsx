import React from 'react'

const Education = ({degree, univ, duration, location}) => {

  return (
    <>
          <h2>Education</h2>
          <p>{degree} <br /> {univ} - {location}</p>
          <p className='eml'>{duration}</p>
          <br />
    </>
  )
}

export default Education