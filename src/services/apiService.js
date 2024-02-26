const API_KEY_WEATHER = String(import.meta.env.VITE_WEATHER_API_KEY);
const API_KEY_TIME = String(import.meta.env.VITE_TIME_API_KEY);
async function getWeather(city) {
    try {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_WEATHER}&units=metric`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error fetching weather data: ${response.status}`);
        }

        const data = await response.json();
        const { coord: { lat, lon } } = data;
        const timeZoneUrl = `https://api.timezonedb.com/v2/get-time-zone?key=${API_KEY_TIME}&format=json&by=position&lat=${lat}&lng=${lon}`;
        const timeZoneResponse = await fetch(timeZoneUrl);

        if (!timeZoneResponse.ok) {
            throw new Error(`Error fetching time zone data: ${timeZoneResponse.status}`);
        }

        const timeZoneData = await timeZoneResponse.json();

        const { gmtOffset } = timeZoneData;

        const localTimeMs = Date.now() + gmtOffset * 1000;

        const localTime = new Date(localTimeMs);
        const formattedLocalTime = localTime.toLocaleString('en-US', { timeZone: 'UTC', hour12: true });
        const combinedData = { ...data, "time": formattedLocalTime }

        console.log(combinedData);
        return combinedData;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}
export default getWeather;
