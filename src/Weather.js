import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({});

    function handleResponse(response) {
        
        setWeatherData({
            ready: true,
            description: response.data.weather[0].description,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            city: response.data.name,
            iconUrl: "http://openweathermap.org/img/wn/02d@2x.png"
        })
    }

    if (weatherData.ready) {
        return (
            <div className="App">
        <div className="Weather">
            
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city.." className="form-control" autofocus="on" />
                        </div>
                        <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <div className="weatherInfo mt-3">
            <h1>{weatherData.city}</h1>
            <ul>
                <li><FormattedDate date={weatherData.date} /></li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img className="current-weather-icon" src={weatherData.iconUrl} alt={weatherData.description} />
                        <span className="temperature">{Math.round(weatherData.temperature)}</span>
                        <span className="unit">°C</span>
                        </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                        Humidity: {weatherData.humidity}%
                        </li>
                        <li>
                        Wind: {weatherData.wind} km/h
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            </div>
            </div>
            )
    } else {

    const apiKey = "5e96109715e693faebfe6b3b1afdacba";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);

    return "Loading the weather..."

    }

    }