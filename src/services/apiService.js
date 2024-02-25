const API_KEY = String(import.meta.env.VITE_API_KEY);
async function getWeather(city) {
    try {
        // First API call
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        return null;
    }
}
export default getWeather;
