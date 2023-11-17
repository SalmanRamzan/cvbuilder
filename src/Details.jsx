import React from 'react'

const Details = ({email, phone, city, postal, country}) => {

  let myEmail = 'salman.ramzan23@gmail.com', myPhone = '+92 315 6029913', myCity = 'Muzaffargarh', myPostal = '34200', myCountry = 'Pakistan'
  return (
    <>
      <h3 className='gry'>Details</h3>
      <p className='eml'>{city || myCity} ({postal || myPostal}), {country || myCountry}.</p>
      <p className='eml'>{email || myEmail}</p>
      <p className='eml'>{phone || myPhone}</p>
      <br />
    </>
  )
}

export default Details
