import React, {useState} from 'react'

const Input = ({}) => {

     const [jobTitle, setJobTitle] = useState('');
     const [fullName, setFullName] = useState('');
     const [imageSrc, setImageSrc] = useState('');
      
     const handleJobTitleChange = (e) => {
          setJobTitle(e.target.value);
     };
     const handleFullNameChange = (e) => {
          setFullName(e.target.value);
     };
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


  return (
     <div className='two tc'>
          <div className='col'>
               <div className='two'>
                    <div className='col'>
                         <label>
                              Job Title:< br/>
                              <input type="text" value={jobTitle} onChange={handleJobTitleChange} />
                         </label>
                         <br />
                         <label>
                              Full Name:<br />
                              <input type="text" value={fullName} onChange={handleFullNameChange} />
                         </label>
                         <br />
                         <label>
                              Phone:<br />
                              <input type="text" placeholder='+92 315 6029913' />
                         </label>
                         <br />
                         <label>
                              City:<br />
                              <input type="text" placeholder='Multan' />
                         </label>
                    </div>
                    <div className='col'>
                         <input type="file" accept="image/*" onChange={handleImageChange} />
                         <br />
                         <label>
                              Email:<br />
                              <input type="text" placeholder='John@gmail.com' />
                         </label>
                         <br />
                         <label>
                              Country:<br />
                              <input type="text" placeholder='Pakistan' autoComplete='off' />
                         </label>
                    </div>
               </div>
          </div>
          <div className='col'>
               <h1>{jobTitle}</h1>
               <p>{fullName}</p>
               <h2>Uploaded Picture</h2>
               {imageSrc && <img src={imageSrc} alt="Uploaded" width='100' height='100' />}
          </div>
    </div>
  )
}

export default Input
