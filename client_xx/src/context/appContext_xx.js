import React, { useReducer, useContext } from 'react';

import reducer_xx from './reducer_xx';
import axios from 'axios';

import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from './action_xx';

const initialState = {
  isLoading: false,
  showAlert: false,
  alterText: '',
  alterType: '',
  user: '',
  token: '',
  location: '',
};

const AppContext_xx = React.createContext();

const AppProvider_xx = ({ children }) => {
  const [state, dispatch] = useReducer(reducer_xx, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const axiosRegister = async ({ currentUser, endPoint, alertText }) => {
    try {
      const { data } = await axios.post(
        `/api/v1/auth_xx/${endPoint}`,
        currentUser
      );
      //   console.log('register data', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const registerUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const data = await axiosRegister({
        currentUser,
        endPoint,
        alertText,
      });
      console.log('register data', data);
      const { user, token, location } = data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  return (
    <AppContext_xx.Provider
      value={{ ...state, displayAlert, clearAlert, registerUser }}
    >
      {children}
    </AppContext_xx.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext_xx);
};

export { AppProvider_xx, initialState, useAppContext };
