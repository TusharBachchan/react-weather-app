import React, {useState, useEffect} from 'react'
import TimeAndLocation from "./TimeAndLocation";
import TemperatureAndStats from "./TemperatureAndStats";


const MainDetails = (weatherData) => {
  

  return (
    <div className=" text-gray-100 sm:p-10 p-5 sm:mb-0 mb-5">
      <TimeAndLocation
        city={weatherData?.weatherData?.name}
        time={weatherData?.weatherData?.time}
      />
      <TemperatureAndStats weatherData={weatherData} />
    </div>
  );
};

export default MainDetails