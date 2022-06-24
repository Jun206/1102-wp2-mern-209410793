import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App_93';
import 'normalize.css';
import { AppProvider_93} from './context/appContext_93'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider_93>
      <App />
    </AppProvider_93>
  </React.StrictMode>,
  document.getElementById('root')
);
