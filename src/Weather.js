import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        
        setWeatherData({
            ready: true,
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
            coordinates: response.data.coord,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            city: response.data.name,
            icon: response.data.weather[0].icon
        })
    }

    function search() {
        const apiKey = "5e96109715e693faebfe6b3b1afdacba";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
        //city
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="App">
                <div className="Weather">
            <form onSubmit={handleSubmit} >
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" onChange={handleCityChange} />
                    </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
            <br />
            <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
            </div>
            
            )
    } else {
        search();
    return "Loading the weather..."

    }

    }