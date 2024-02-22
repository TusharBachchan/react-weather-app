import React from "react";

const Forecast = () => {
  return (
    <div className="Forecast sm:p-10 p-3 text-white grid sm:grid-cols-12 gap-5">
      <div className="daysForecast sm:col-span-2 p-5">
        <div className="heading">5 Days Forecast:</div>
        <div className="data">
          <div className="row flex justify-between">
            <div className="weather-icon">icon</div>
            <div className="temp">20deg</div>
            <div className="date">Fiday, 1 Sep</div>
          </div>
          <div className="row flex justify-between">
            <div className="weather-icon">icon</div>
            <div className="temp">20deg</div>
            <div className="date">Fiday, 1 Sep</div>
          </div>
        </div>
      </div>
      <div className="hourlyForecast sm:col-span-10 p-5">
        <div className="heading">Hourly Forecast:</div>
        <div className="data">
          <div className="row flex justify-between">
            <div className="weather-icon">icon</div>
            <div className="temp">20deg</div>
            <div className="date">Fiday, 1 Sep</div>
          </div>
          <div className="row flex justify-between">
            <div className="weather-icon">icon</div>
            <div className="temp">20deg</div>
            <div className="date">Fiday, 1 Sep</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
