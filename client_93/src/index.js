import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App_93 from './App_93';
import { AppProvider_93 } from './context/appContext_93'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider_93>
      <App_93 />
    </AppProvider_93>
  </React.StrictMode>,
  document.getElementById('root')
);