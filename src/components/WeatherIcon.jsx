import React from "react";

const WeatherIcon = ({ iconKey }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${iconKey}@2x.png`;
  return (
    <img
      src={iconUrl}
      alt="Weather icon"
      className="bg-slate-400 w-40 mx-auto mb-3 rounded-md"
    />
  );
};

export default WeatherIcon;
