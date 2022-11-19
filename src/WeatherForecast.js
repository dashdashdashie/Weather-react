import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <WeatherForecastDay data={forecast[0]} />
                    </div>
                </div>
            </div>
        )

    } else {

        let apiKey = "e0a5a97de9a0b7a951e9d154a8f9bad8";
        let lon = props.coordinates.lon;
        let lat = props.coordinates.lat;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        axios.get(url).then(handleResponse);
    
        return null;

    }
}