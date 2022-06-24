import React, { useReducer, useContext } from 'react';

import reducer_93 from './reducer_93';
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
  LOGOUT_USER,
  TOGGLE_SIDEBAR,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  REGISTER2_USER_BEGIN,
  REGISTER2_USER_SUCCESS,
  REGISTER2_USER_ERROR,
  LOGIN2_USER_BEGIN,
  LOGIN2_USER_SUCCESS,
  LOGIN2_USER_ERROR,
  UPDATE2_USER_BEGIN,
  UPDATE2_USER_SUCCESS,
  UPDATE2_USER_ERROR,
} from './action_93';

const initialState = {
  isLoading: false,
  showAlert: false,
  alterText: '',
  alterType: '',
  user: null,
  token: null,
  location: '',
  showSidebar: false,
};

const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
const userLocation = localStorage.getItem('location');

const AppContext_93 = React.createContext();

const AppProvider_93 = ({ children }) => {
  const [state, dispatch] = useReducer(reducer_93, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('location', location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('location');
  };

  const axiosRegister = async ({ currentUser, endPoint, alertText }) => {
    try {
      const { data } = await axios.post(
        `/api/v1/auth_93/${endPoint}`,
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
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const axiosLogin = async ({ currentUser, endPoint, alertText }) => {
    try {
      const { data } = await axios.post(
        `/api/v1/auth_93/${endPoint}`,
        currentUser
      );
      //   console.log('login data', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const loginUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const data = await axiosLogin({
        currentUser,
        endPoint,
        alertText,
      });
      console.log('login data', data);
      const { user, token, location } = data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const logoutUser = async () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const toggleSidebar = async () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const axiosUpdateUser = async (currentUser) => {
    try {
      const { data } = await axios({
        method: 'patch',
        url: `/api/v1/auth_93/updateUser_93`,
        data: currentUser,
        headers: {
          Authorization: `Bearer ${state.token} `,
        },
      });
      console.log('updateUser from server', data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const updateUser = async (currentUser) => {
    console.log('context updateUser', currentUser);
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const data = await axiosUpdateUser(currentUser);
      console.log('updateUser data', data);
      const { user, location, token } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      });
      addUserToLocalStorage({ user, location, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  return (
    <AppContext_93.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        registerUser,
        loginUser,
        logoutUser,
        toggleSidebar,
        updateUser,
      }}
    >
      {children}
    </AppContext_93.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext_93);
};

export { AppProvider_93, initialState, useAppContext };
