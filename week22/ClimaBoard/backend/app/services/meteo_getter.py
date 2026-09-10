import requests
from config.config import CITIES_TO_GET, CITY_URL, FORECAST_URL, TIMEOUT
from schemas.schemas import City, CurrentWeather, ForecastWeather


class MeteoGetter:
    def __init__(self):
        self.city_url = CITY_URL
        self.forecast_url = FORECAST_URL

    def search_city(self, city_name: str) -> list[City]:
        """
        Get param city name and search in meteo matching cities
        return list of 5 most matching cities

        :city_name: str
        :return: list[City]
        """
        fetch_url = self.city_url

        params = {"count": CITIES_TO_GET, "language": "en", "format": "json"}
        params["name"] = city_name

        res = requests.get(fetch_url, params=params, timeout=TIMEOUT).json()
        data: list[dict] = res.get("results", [])

        cities = [
            City(
                id=city.get("id"),
                name=city.get("name"),
                country=city.get("country"),
                latitude=city.get("latitude"),
                longitude=city.get("longitude"),
            )
            for city in data
        ]

        return cities

    def get_forecast_weather(
        self, latitude: float, longitude: float
    ) -> ForecastWeather:
        """
        Get wether for a week starting from current day

        :latitude: float
        :longitude: float
        :return: ForecastWeather
        """
        fetch_url = self.forecast_url
        params = {
            "latitude": latitude,
            "longitude": longitude,
            "daily": "weather_code,wind_speed_10m_max,temperature_2m_min,temperature_2m_max,apparent_temperature_max,apparent_temperature_min,sunrise,sunset",
        }

        res = requests.get(fetch_url, params=params, timeout=TIMEOUT).json()
        res_daily: dict = res.get("daily", {})

        forecast_weather = ForecastWeather(
            dates=res_daily.get("time"),
            min_temperatures=res_daily.get("temperature_2m_min"),
            max_temperatures=res_daily.get("temperature_2m_max"),
            max_winds_speed=res_daily.get("wind_speed_10m_max"),
            weather_code=res_daily.get("weather_code"),
            min_apparent=res_daily.get("apparent_temperature_min"),
            max_apparent=res_daily.get("apparent_temperature_max"),
            sunrise=res_daily.get("sunrise"),
            sunset=res_daily.get("sunset"),
        )

        return forecast_weather

    def get_current_weather(self, longitude: float, latitude: float) -> CurrentWeather:
        """
        Get current weather

        :longitude: float
        :latitude: float
        :return: CurrentWeather
        """
        fetch_url = self.forecast_url
        params = {
            "latitude": latitude,
            "longitude": longitude,
            "current": "temperature_2m,wind_speed_10m,weather_code,apparent_temperature,wind_direction_10m,rain",
        }

        res = requests.get(fetch_url, params=params, timeout=TIMEOUT).json()
        res_current: dict = res.get("current", {})

        current_weather = CurrentWeather(
            temperature=res_current.get("temperature_2m"),
            wind=res_current.get("wind_speed_10m"),
            weather_code=res_current.get("weather_code"),
            apparent_temperature=res_current.get("apparent_temperature"),
            wind_direction=res_current.get("wind_direction_10m"),
            rain=res_current.get("rain"),
        )

        return current_weather
