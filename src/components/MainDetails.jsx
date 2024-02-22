import React from 'react'
import TimeAndLocation from "./TimeAndLocation";
import TemperatureAndStats from "./TemperatureAndStats";

const MainDetails = () => {
  return (
    <div className="grid sm:grid-cols-12 gap-5 text-gray-100 sm:p-10 p-5">
      <TimeAndLocation />
      <TemperatureAndStats />
    </div>
  );
}

export default MainDetails