import React from 'react'

const Skills = ({name, exp}) => {

  return (
    <>
      <p className='gry'>{name}</p>
      <div className='bar'>
          <div className='pbar' style={{width: exp * 10 + '%'}} ></div>
      </div>
    </>
  )
}

export default Skills
