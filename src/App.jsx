import React, {useState} from 'react'
import './cvstyle.css'
import Title from './Title'
import Details from './Details'
import Profile from './Profile'
import JobHistory from './JobHistory'
import Links from './Links'
import Skills from './Skills'
import Education from './Education'

function App({}) {

  const [imageSrc, setImageSrc] = useState('');
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result);
        };
        reader.readAsDataURL(file);
    }
  };

  const [fullName, setFullName] = useState('');
  const handleFullNameChange = (e) => {
      setFullName(e.target.value);
  };

  const [jobTitle, setJobTitle] = useState('');    
  const handleJobTitleChange = (e) => {
      setJobTitle(e.target.value);
  };

  const [Email, setEmail] = useState('');    
  const handleEmailChange = (e) => {
      setEmail(e.target.value);
  };

  const [Phone, setPhone] = useState('');    
  const phoneChange = (e) => {
      setPhone(e.target.value);
  };

  const [City, setCity] = useState('');    
  const cityChange = (e) => {
      setCity(e.target.value);
  };

  const [Postal, setPostal] = useState('');    
  const postalChange = (e) => {
      setPostal(e.target.value);
  };

  const [Country, setCountry] = useState('');    
  const countryChange = (e) => {
      setCountry(e.target.value);
  };

  const [message, setMessage] = useState('');

  const handleMessageChange = event => {
    // 👇️ access textarea value
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  let deg = 'BS Computer Engineering', uni = 'National University of Computer and Emerging Sciences (FAST)', loc = 'Lahore, Pakistan.'

  return (
    <>
      <div className = 'two tc'>
        <div className='col inputing'>
          <div className='two'>
            <div className='col'>
              <h3>Personal Details</h3>
              <label>
                    Job Title< br/>
                    <input type='text' value={jobTitle} placeholder='e.g., Frontend Developer' onChange={handleJobTitleChange} />
              </label>
              <br />
              <label>
                    Email< br/>
                    <input type='email' value={Email} placeholder='john-deo@gmail.com' onChange={handleEmailChange} />
              </label>
              <br />
              <label>
                    City< br/>
                    <input type='text' value={City} placeholder='Your City' onChange={cityChange} />
              </label>
              <br />
              <label>
                    Postal Code< br/>
                    <input type='text' value={Postal} placeholder='Your City' onChange={postalChange} />
              </label>
              <br />
            </div>
            <div className='col'>
            <h3>.</h3>
              <label>
                    Upload Photo:< br/>
                    <input type='file' accept='image/*' onChange={handleImageChange} />
              </label>
              <br />
              <label>
                    Full Name< br/>
                    <input type='text' value={fullName} placeholder='Your Name' onChange={handleFullNameChange} />
              </label>
              <br />
              <label>
                    Phone< br/>
                    <input type='text' value={Phone} placeholder='Contact Number' onChange={phoneChange} />
              </label>
              <br />
              <label>
                    Country< br/>
                    <input type='text' value={Country} placeholder='Your Country' onChange={countryChange} />
              </label>
            </div>
          </div>
          <br /><br /><br /><br /><br />
          <h3>Profile</h3>
          <textarea rows='15' cols='65' placeholder='Enter your experience' value={message} onChange={handleMessageChange} />
        </div>
        <div className='col'>
          <div className='two tc'>
            <div className='col grn basic'>
              <Title img={imageSrc} name={fullName} job={jobTitle} />
              <Details email={Email} phone={Phone} city={City} postal={Postal} country={Country} />
              <Links />
              <h3 className='gry'>Skills</h3>
              <Skills name='HTML5' exp='6' />
              <Skills name='CSS3' exp='5' />
              <Skills name='SASS' exp='8' />
              <Skills name='JavaScript' exp='7' />
              <Skills name='ReactJS' exp='9' />
              <Skills name='NodeJS' exp='4' />
              <Skills name='ExpressJS' exp='3' />
              <Skills name='MongoDB' exp='5' />
            </div>
            <div className='col info'>
              <Profile profiler={message} />
              <JobHistory title='PHP Developer' company='BrainLogix Pvt Ltd.' duration='2015 - 2020' location={loc}/>
              <Education degree={deg} univ={uni} duration='2010 - 2014' location={loc}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
