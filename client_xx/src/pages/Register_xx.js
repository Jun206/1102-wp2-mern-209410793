import { useState, useEffect } from 'react';
import { Logo_xx, FormRow_xx } from '../components';
import Wrapper from '../assets/wrappers/Register_xx';

import { useAppContext } from '../context/appContext_xx';
import Alert_xx from '../components/Alert_xx';
import { LOGIN_USER_BEGIN } from '../context/action_xx';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
};

const Register_xx = () => {
  const [values, setValues] = useState(initialState);

  const { showAlert, displayAlert, registerUser, loginUser } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    // console.log('e.target', e.target);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    // console.log('e.target', e.target);
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };
    console.log('form data', currentUser);
    if (!isMember) {
      registerUser({
        currentUser,
        endPoint: 'register_xx',
        alertText: 'User created! Redirecting ...',
      });
    } else {
      loginUser({
        currentUser,
        endPoint: 'login_xx',
        alertText: 'Login Successful! Redirecting ...',
      });
    }
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={onSubmit}>
        <Logo_xx />
        <h3> {values.isMember ? 'Login' : 'Register'} </h3>
        {showAlert && <Alert_xx />}
        {/* name input */}
        {!values.isMember && (
          <FormRow_xx
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
            className='form-input'
          />
        )}
        {/* email input */}
        <FormRow_xx
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
          className='form-input'
        />

        {/* password input */}
        <FormRow_xx
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
          className='form-input'
        />

        <button className='btn btn-block' type='submit'>
          submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Alreaedy a member?'}
          <button type='button' className='member-btn' onClick={toggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register_xx;
