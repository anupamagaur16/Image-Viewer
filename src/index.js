import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import Login from './screens/login/Login';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <span>
      <Login />
  </span>, 
  document.getElementById('root')
);

reportWebVitals();