import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App_xx from './App_xx';
import { AppProvider_xx } from './context/appContext_xx'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider_xx>
      <App_xx />
    </AppProvider_xx>
  </React.StrictMode>,
  document.getElementById('root')
);