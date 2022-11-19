import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function load() {
        let apiKey = "e0a5a97de9a0b7a951e9d154a8f9bad8";
        let lon = props.coordinates.lon;
        let lat = props.coordinates.lat;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

        axios.get(url).then(handleResponse);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map((dailyForecast, index)=>{
                        if (index < 6) {
                        return (
                        <div className="col" key={index}>
                        <WeatherForecastDay data={dailyForecast} />
                    </div>
                    );
                    } else {
                        return null;
                    }
                    })}
                </div>
            </div>
        );

    } else {

        load();
        
        return null;
    
    }
}