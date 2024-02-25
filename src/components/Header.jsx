import React, {useState} from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdLocate } from "react-icons/io";
const Header = ({ city, setCity, getWeatherByCity }) => {
  return (
    <div className="header grid sm:grid-cols-12 items-center sm:p-10 sm:gap-3 gap-5 p-5">
      <div className="sm:col-span-3 app-name sm:text-start text-4xl text-center text-white ">
        <h2>weather-app</h2>
      </div>
      <div className="sm:col-span-6 search-bar flex items-center borde rounded-3xl px-3 shadow-2xl bg-gray-600">
        <input
          onChange={(e) => setCity(e.target.value)}
          value={city}
          type="text"
          placeholder="search any city..."
          className="w-full
        focus:outline-none text-gray-100 text-2xl p-2 capitalize bg-transparent"
        />
        <CiSearch
          size="2.5rem"
          className="cursor-pointer text-gray-200"
          onClick={() => getWeatherByCity()}
        />
      </div>
      <div className="sm:col-span-3 location mx-auto sm:mx-2 flex sm:justify-end">
        <button
          type="button"
          class="flex justify-center items-center gap-2 text-white bg-green-500 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-3xl text-xl px-5 py-2.5 text-center cursor-pointer"
        >
          <span>
            <IoMdLocate />
          </span>
          Current Location
        </button>
      </div>
    </div>
  );
};

export default Header;
