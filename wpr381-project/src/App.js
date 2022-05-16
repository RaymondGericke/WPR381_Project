import React, {useState} from 'react';
import axios from 'axios'

function App() {

  //const url = `https://api.openweathermap.org/data/2.5/weather?zip=0182,ZA&appid=8a591b7d222aae763fc9d6e5a1f06b16`

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Pretoria</p>
          </div>
          <div className="temp">
            <h1>65 deg F</h1>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65 degrees</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>12 MPH</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
