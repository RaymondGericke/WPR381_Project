import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function celsiusToFahrenheit(Temp){
    return (Temp * 9/5 +32);
}

function fahrenheitToCelsius(Temp){
    return ((Temp - 32) * 5/9);
}

