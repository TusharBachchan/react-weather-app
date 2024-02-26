import React from "react";
import WeatherIcon from "./WeatherIcon";
import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
import { IoSpeedometerOutline } from "react-icons/io5";

const TemperatureAndStats = ({ weatherData }) => {
  const { time } = weatherData?.weatherData;
  const iconKey = weatherData?.weatherData?.weather[0]?.icon;
  const description = weatherData?.weatherData?.weather[0]?.description;
  const humidity = weatherData?.weatherData?.main?.humidity;
  const windSpeed = weatherData?.weatherData?.wind?.speed;
  const pressure = weatherData?.weatherData?.main?.pressure;
  const temp = weatherData?.weatherData?.main?.temp;
  const feels_like = weatherData?.weatherData?.main?.feels_like;
  return (
    <div className=" text-white sm:p-12 grid sm:grid-cols-3 gap-10">
      <div className="temp shadow-xl p-5">
        <div className="orignalTemp text-5xl text-center sm:text-start shadow">
          {temp}&deg;C
        </div>
        <div className="feelsLike text-4xl text-center sm:text-start">
          Feels Like: {feels_like}&deg;C
        </div>
      </div>
      <div className="icon">
        <WeatherIcon iconKey={iconKey} />

        <div className="description text-3xl capitalize text-center">
          {description}
        </div>
      </div>
      <div className="additionalData grid grid-cols-3 shadow-xl sm:p-0 p-5">
        <div className="humidity flex justify-center items-center">
          <div className="text-center text-2xl">
            <WiHumidity size={70} />
            {`${humidity}%`}
          </div>
        </div>
        <div className="windSpeed flex justify-center items-center">
          <div className="text-center text-2xl">
            <LuWind size={70} />
            {`${windSpeed} km/hr`}
          </div>
        </div>
        <div className="pressure flex justify-center items-center">
          <div className="text-center text-2xl">
            <IoSpeedometerOutline size={70} />
            {`${pressure} km/hr`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureAndStats;
