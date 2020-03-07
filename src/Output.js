import React from 'react';

const Output = ({ data }) => {
    return (
        <>
            <h2>Weather for {data.cityName}</h2>
            <hr />
            <h3>Maximum temperature: {data.tempMax} °C</h3>
            <h3>Minimum temperature: {data.tempMin} °C</h3>
            <h3>Pressure: {data.pressure} hPa</h3>
            <h3>Humidity: {data.humidity} %</h3>
            <h3>Wind speed: {data.windSpeed} m/s</h3>
            <h3>Country code: {data.countryCode}</h3>

        </>
    )
}
export default Output;
