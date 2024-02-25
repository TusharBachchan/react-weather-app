import React from "react";

const WeatherIcon = ({ iconKey }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${iconKey}@2x.png`;
  return <img src={iconUrl} alt="Weather icon" />;
};

export default WeatherIcon;
