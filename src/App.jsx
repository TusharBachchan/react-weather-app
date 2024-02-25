import { useState, useEffect } from "react";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import getWeather from "./services/apiService"

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const getWeatherByCity = async () => {
    const weatherData = await getWeather(city);
    setWeatherData(weatherData);
    setCity("");
  }
  
  // useEffect(() => {
    
  //   fetchData();
  // }, [city]);


  return (
    <div className="mx-auto bg-gray-700 min-h-screen">
      <Header
        setCity={setCity}
        city={city}
        getWeatherByCity={getWeatherByCity}
      />
      {weatherData && weatherData.weather && (
        <MainDetails weatherData={weatherData} />
      )}
      {!weatherData.weather && (
        <div className="text-gray-100 sm:p-10 p-5 text-center text-3xl">No Data Found - Enter City Name!</div>
      )}
    </div>
  );
}

export default App;
