import React from 'react'
import {useState, useEffect} from 'react';
import { Logo_93,FormRow_93,Alert_93 } from '../components';
import Wrapper from '../assets/wrapper/Register_93';

import { useAppContext } from '../context/appContext_93';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
}

const Register_93 = () => {
  const [values, setValues] = useState(initialState);

  const {showAlert, displayAlert}  = useAppContext();

  const handleChange = (e) => {
    console.log('e.target',e.target)
    setValues({ ...values,[e.target.name]: e.target.value})
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    // console.log('e.target',e.target)
    const {email,password}=values;
    if (!email || !password) {
      displayAlert();
      return;
    }
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={onSubmit}>
        <Logo_93 />
        <h3>Register</h3>
        {showAlert && <Alert_93/>}
        {/*name input*/}
        <FormRow_93
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
          className='form-input'
          />
        {/* email input */}
        <FormRow_93
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          className='form-input'
          />  
       {/* password input */}
        <FormRow_93
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          className='form-input'
          />

          <button className="btn btn-block" type="submit">
            Submit
          </button>
      </form>
    </Wrapper>    
  )
}

export default Register_93
