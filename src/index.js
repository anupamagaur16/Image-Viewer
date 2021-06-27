import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
// import Login from './screens/login/Login';
import Controller from './screens/Controller';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <span>
      <Controller  />
  </span>, 
  document.getElementById('root')
);

reportWebVitals();