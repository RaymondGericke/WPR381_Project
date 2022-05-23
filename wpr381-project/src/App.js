// Weather app project by Adam Dickinson, Raymond Gericke, Gregory Avvakoumides, Stefan Du Toit, Carl Marnewick

import React, {useState} from 'react';
import axios from 'axios'

function App() {
  const [data, setData] = useState({})
  const [ZipCode, setZip] = useState('')

  // copy original 
  //const url = `https://api.openweathermap.org/data/2.5/weather?zip=${ZipCode},ZA&appid=8a591b7d222aae763fc9d6e5a1f06b16&units=metric`

  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${ZipCode},ZA&appid=8a591b7d222aae763fc9d6e5a1f06b16&units=metric`
  
  //Here are the api's for the weather via use of a zip-code
  //const url = `https://api.openweathermap.org/data/2.5/forecast/daily?zip=${ZipCode},ZA&appid=8a591b7d222aae763fc9d6e5a1f06b16&units=metric` 
  //const url = `https://pro.openweathermap.org/data/2.5/forecast/hourly?zip=${ZipCode},ZA&appid=8a591b7d222aae763fc9d6e5a1f06b16&units=metric`

  //experiment 
  //const url =`https://api.openweathermap.org/data/2.5/onecall?zip=${ZipCode},ZA&appid=8a591b7d222aae763fc9d6e5a1f06b16&units=metric` //experiment 

  // need to use API 
  //const url =`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=8a591b7d222aae763fc9d6e5a1f06b16&units=metric`

  const searchZip = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setZip('')
    }
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={ZipCode}
          onChange={event => setZip(event.target.value)}
          onKeyPress={searchZip}
          placeholder='Enter Zip Code'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} KPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default App;
