import React, { useState } from 'react';
import Input from './Input';
import Output from './Output';

const App = () => {
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({ cityName: '' });

  const handleInput = (e) => {
    let string = e.target.value;
    if (string.length === 1)
      string = string.substring(0, 1).toUpperCase() + string.substring(1, string.length);
    setWeather({ cityName: string });
    setError(false);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const city = weather.cityName;
    const key = 'f5675df61ef6b86d487daac3ee708b40';
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${key}`;
    fetch(API)
      .then(response => {
        if (response.ok) return response;
        throw Error('Errors occurs!')
      })
      .then(response => response.json())
      .then(data => setWeather({
        cityName: weather.cityName,
        id: data.sys.id,
        temp: data.main.temp,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        pressure: data.main.pressure,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        countryCode: data.sys.country
      }))
      .catch(err => setError(true))
  }
  return (
    <>
      <Input
        handleInput={handleInput}
        handleFormSubmit={handleFormSubmit}
        cityName={weather.cityName}
      />
      {weather.id && !error ? <Output data={weather} /> : null}
      {error ? <h3>City "{weather.cityName}" not found</h3> : null}

    </>
  )
}

export default App;