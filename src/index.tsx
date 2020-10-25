import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

process.env.NODE_ENV !== 'development' && (console.log = () => {});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
