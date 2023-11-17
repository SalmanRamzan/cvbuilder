import React from 'react'

const JobHistory = ({title, company, duration, location}) => {

  return (
    <>
          <h2>Employment History</h2>
          <p>{title} <br /> {company} - {location}</p>
          <p className='eml'>{duration}</p>
          <br />
    </>
  )
}

export default JobHistory