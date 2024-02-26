
# React Weather App

## Overview

This is a weather app that uses the OpenWeatherMap API to get city coordinates and the TimeZoneDB API to fetch the local time based on those coordinates.

## Setup

Follow these steps to set up the Vite project:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a copy of the `.env.sample` file and rename it to `.env`. Replace the placeholder values with your actual API keys.

   ```bash
   cp .env.sample .env
   ```

   Open the `.env` file and replace the following placeholders:

   - `YOUR_OPENWEATHERMAP_API_KEY` with your OpenWeatherMap API key.
   - `YOUR_TIMEZONEDB_API_KEY` with your TimeZoneDB API key.

   **Note:** You can obtain API keys by signing up on the respective websites:
   - OpenWeatherMap API: [OpenWeatherMap API](https://openweathermap.org/api)
   - TimeZoneDB API: [TimeZoneDB API](https://timezonedb.com/register)

5. Save the `.env` file.

## Run the App

Once you've set up the project and added your API keys, you can run the app using the following command:

```bash
npm run dev
```

This will start the development server, and you can view the app in your browser at [http://localhost:3000](http://localhost:3000).

## Usage

Enter a city name in the app, and it will display the local time of that city using data from OpenWeatherMap and TimeZoneDB.

## Acknowledgments

- This project uses the Vite framework.
- Data is fetched from OpenWeatherMap and TimeZoneDB APIs.
