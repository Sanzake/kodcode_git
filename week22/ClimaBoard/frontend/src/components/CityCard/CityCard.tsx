import useFetch from '../../hooks/useFetch';
import type { City } from '../../types/City';
import type { Weather } from '../../types/weather';
import "./CityCard.css"

interface CityCardProps {
    currentCity: City | null
}

const weatherDictionary: Record<number, { text: string; emoji: string }> = {
    0: { text: "Clear sky", emoji: "☀️" },
    1: { text: "Mainly clear", emoji: "🌤️" },
    2: { text: "Partly cloudy", emoji: "⛅" },
    3: { text: "Overcast", emoji: "☁️" },
    45: { text: "Fog", emoji: "🌫️" },
    48: { text: "Depositing rime fog", emoji: "🌫️" },
    51: { text: "Light Drizzle", emoji: "🌧️" },
    53: { text: "Moderate Drizzle", emoji: "🌧️" },
    55: { text: "Dense Drizzle", emoji: "🌧️" },
    56: { text: "Light Freezing Drizzle", emoji: "🌨️" },
    57: { text: "Dense Freezing Drizzle", emoji: "🌨️" },
    61: { text: "Slight Rain", emoji: "🌦️" },
    63: { text: "Moderate Rain", emoji: "🌧️" },
    65: { text: "Heavy Rain", emoji: "🌧️" },
    66: { text: "Light Freezing Rain", emoji: "❄️" },
    67: { text: "Heavy Freezing Rain", emoji: "❄️" },
    71: { text: "Slight Snow fall", emoji: "🌨️" },
    73: { text: "Moderate Snow fall", emoji: "❄️" },
    75: { text: "Heavy Snow fall", emoji: "❄️" },
    77: { text: "Snow grains", emoji: "❄️" },
    80: { text: "Slight Rain showers", emoji: "🌦️" },
    81: { text: "Moderate Rain showers", emoji: "🌧️" },
    82: { text: "Violent Rain showers", emoji: "⛈️" },
    85: { text: "Slight Snow showers", emoji: "🌨️" },
    86: { text: "Heavy Snow showers", emoji: "❄️" },
    95: { text: "Thunderstorm", emoji: "⛈️" },
    96: { text: "Thunderstorm with slight hail", emoji: "⛈️" },
    99: { text: "Thunderstorm with heavy hail", emoji: "🌩️" },
};

export default function CityCard({currentCity}: CityCardProps) {
    const BASE_URL = "http://127.0.0.1:8000/"
    const url = `${BASE_URL}city?latitude=${currentCity?.latitude}&longitude=${currentCity?.longitude}`
    const {data, error, loading} = useFetch<Weather>(url)
    
    if (!currentCity) {
        return <h3>Select a city!</h3>
    }
    
    if (error) return <>{error}</>;
	if (loading) return <>Loading...</>;
    if (!data) return <>No data!!!</>

    const current_weather = data.current_weather
    const temperature = current_weather.temperature
    const apparent_temperature = current_weather.apparent_temperature
    const rain = current_weather.rain
    const current_weather_code = current_weather.weather_code
    const wind = current_weather.wind
    const wind_direction = current_weather.wind_direction
    
    const forecast = data.forecast
    const min_temperatures = forecast.min_temperatures
    const max_temperatures = forecast.max_temperatures
    const max_wind_speed = forecast.max_winds_speed
    const forecast_weather_code = forecast.weather_code
    const min_apparent = forecast.min_apparent
    const max_apparent = forecast.max_apparent
    const sunrise = forecast.sunrise
    const sunset = forecast.sunset

    return (
        <div className='cityCard'>
            <div className='cityTitle'>
                {currentCity?.name} - {currentCity?.country}
            </div>
            <div className='currentCard'>
                <h3>Current</h3>
                <div>
                    <span>Temperature </span>
                    <span>{temperature}°C {weatherDictionary[current_weather_code].emoji}</span>
                </div>
                <div>
                    <span>Apparent </span>
                    <span>{apparent_temperature}°C</span>
                </div>
                <div>
                    <span>Wind </span>
                    <span>{wind} m/s ({wind_direction}°)</span>
                </div>
                <div>
                    <span>Rain </span>
                    <span>{rain} mm</span>
                </div>
            </div>
            <div className='forecastCard'>
                <h3>Forecast</h3>
                <table className='forecastTable'>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Temperature °C</th>
                            <th>Max wind speed</th>
                            <th>Apparent(avg) °C</th>
                            <th>Sunrise(GMT 0)</th>
                            <th>Sunset(GMT 0)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {forecast.dates.map((date, index) => (
                            <tr key={date}>
                                <td>{date}</td>
                                <td>{weatherDictionary[forecast_weather_code[index]].emoji} {min_temperatures[index]}°C - {max_temperatures[index]}°C</td>
                                <td>{max_wind_speed[index]} m/s</td>
                                <td>{Math.round(((min_apparent[index] + max_apparent[index]) / 2) * 10) / 10} °C</td>
                                <td>{sunrise[index].slice(-5)}</td>
                                <td>{sunset[index].slice(-5)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
