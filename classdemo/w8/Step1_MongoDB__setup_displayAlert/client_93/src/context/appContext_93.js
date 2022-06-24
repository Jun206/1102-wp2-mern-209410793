import React, { useReducer, useContext } from 'react';
import reducer_93 from './reducer_93';
import { CLEAR_ALERT, DISPLAY_ALERT } from './action_93';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
};
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
  return (
    <AppContext_93.Provider value={{ ...state, displayAlert, clearAlert }}>
      {children}
    </AppContext_93.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext_93);
};

export { AppProvider_93, initialState, useAppContext };
