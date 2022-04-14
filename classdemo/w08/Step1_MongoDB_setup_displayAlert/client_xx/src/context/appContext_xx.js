import React, { useReducer, useContext} from 'react';

import reducer_xx from './reducer_xx'

import { DISPLAY_ALERT, CLEAR_ALERT } from './action_xx';

const initialState = {
    isLoading: false,
    showAlert: false,
    alterText: '',
    alterType: ''
}

const AppContext_xx = React.createContext();

const AppProvider_xx = ( {children}) => {

    const [state, dispatch] = useReducer(reducer_xx, initialState);

    const displayAlert = () => {
        dispatch( {type: DISPLAY_ALERT });
        clearAlert();
    }

    const clearAlert = () => {
        setTimeout( ()=>{
            dispatch( {type: CLEAR_ALERT });
        }, 3000);
    }

    return (
        <AppContext_xx.Provider value={ { ...state, displayAlert, clearAlert} }>
            {children}
        </AppContext_xx.Provider>
    )
}


const useAppContext = () => {
    return useContext(AppContext_xx);
}

export { AppProvider_xx, initialState, useAppContext}