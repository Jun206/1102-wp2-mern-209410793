import React, { useReducer, useContext } from 'react';

import reducer_xx from './reducer_xx'
import axios from 'axios';

import { DISPLAY_ALERT, CLEAR_ALERT } from './action_xx';

const initialState = {
    isLoading: false,
    showAlert: false,
    alterText: '',
    alterType: '',
    user: '',
    token: ''
}

const AppContext_xx = React.createContext();

const AppProvider_xx = ({ children }) => {

    const [state, dispatch] = useReducer(reducer_xx, initialState);

    const displayAlert = () => {
        dispatch({ type: DISPLAY_ALERT });
        clearAlert();
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({ type: CLEAR_ALERT });
        }, 3000);
    }

    const registerUser = async ({ currentUser, endPoint, alertText }) => {
        const { data } = await axios.post(`/api/v1/auth_xx/${endPoint}`);
        console.log('registerUser data', data);
    }
    return (
        <AppContext_xx.Provider value={{ ...state, displayAlert, clearAlert, registerUser }}>
            {children}
        </AppContext_xx.Provider>
    )
}


const useAppContext = () => {
    return useContext(AppContext_xx);
}

export { AppProvider_xx, initialState, useAppContext }