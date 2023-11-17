import React from 'react'

const Title = ({img, name, job}) => {

  let myImg = 'src/assets/salmanramzan.jpeg', myName = 'Salman Ramzan', myJob = 'Frontend Developer (React)'
  return (
     <>
        <center>
          {<img src={myImg} width='90' height='90' />}
          <h1 className='name'>{name || myName}</h1>
          <hr />
          <p className='job'>{job || myJob}</p>
          </center>
        <br />
     </>
  )
}

export default Title
