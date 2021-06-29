import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './providers/axios';
import './index.css';
import './main.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
