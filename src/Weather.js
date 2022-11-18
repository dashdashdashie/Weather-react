import React from "react";

import "./Weather.css";

export default function Weather() {
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
        <h1>London</h1>
        <ul>
            <li>Friday 18:07</li>
            <li className="text-capitalize">few clouds</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img className="current-weather-icon" src="http://openweathermap.org/img/wn/02d@2x.png" alt="Few Clouds" />
                    <span className="temperature">6</span>
                    <span className="unit">°C</span>
                    </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                    Humidity: 38%
                    </li>
                    <li>
                    Wind: 8.94 km/h
                    </li>
                </ul>
            </div>
        </div>
        </div>
        </div>
        </div>
        )
    }