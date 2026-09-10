
export type CurrentWeather = {
    temperature: number,
    wind: number,
    weather_code: number,
    apparent_temperature: number,
    wind_direction: number,
    rain: number
}

export type ForecastWeather = {
    dates: string[],
    min_temperatures: number[],
    max_temperatures: number[],
    max_winds_speed: number[],
    weather_code: number[],
    min_apparent: number[],
    max_apparent: number[],
    sunrise: string[],
    sunset: string[]
}

export type Weather = {
    current_weather: CurrentWeather,
    forecast: ForecastWeather
}