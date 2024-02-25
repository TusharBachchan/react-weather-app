import React, {useState, useEffect} from 'react'
import TimeAndLocation from "./TimeAndLocation";
import TemperatureAndStats from "./TemperatureAndStats";
import WeatherIcon from './WeatherIcon';

const MainDetails = (weatherData) => {
  const iconKey = weatherData.weatherData.weather[0].icon;

  return (
    <div className="grid gap-15 text-gray-100 sm:p-10 p-5">
      <TimeAndLocation city={weatherData?.weatherData?.name}/>
      <TemperatureAndStats />
      <WeatherIcon iconKey={iconKey} />
    </div>
  );
};

export default MainDetails