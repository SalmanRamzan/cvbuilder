import React from 'react'

const Profile = ({profiler}) => {

  let myMessage = 'Experienced and results-driven React.js and MERN Stack developer with a strong foundation in building dynamic web applications. Proficient in leveraging React.js for creating interactive user interfaces, coupled with expertise in MongoDB, Express.js, Node.js, and related technologies. Skilled in crafting efficient and scalable solutions, implementing RESTful APIs, and employing modern development practices. Possessing a proven track record of delivering high-quality projects, adept at collaborating within multidisciplinary teams, and continuously adapting to the evolving technology landscape.'
  return (
     <>
          <h2>Profile</h2>
          <p className=''>{profiler || myMessage}</p>
          <br />
     </>
  )
}

export default Profile
