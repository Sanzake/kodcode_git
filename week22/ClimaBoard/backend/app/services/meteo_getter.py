import requests
from config.config import CITY_URL, FORECAST_URL
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
        :return: list
        """
        cities = []

        fetchURL = self.city_url

        params = {"count": 5, "language": "en", "format": "json"}
        params["name"] = city_name

        res = requests.get(fetchURL, params=params).json()
        data = res.get("results", [])

        for i in range(len(data)):
            getted_id: int = data[i]["id"]
            getted_city_name: str = data[i]["name"]
            getted_country_name: str = data[i]["country"]
            getted_latitude: float = data[i]["latitude"]
            getted_longitude: float = data[i]["longitude"]

            cities.append(
                City(
                    id=getted_id,
                    name=getted_city_name,
                    country=getted_country_name,
                    latitude=getted_latitude,
                    longitude=getted_longitude,
                )
            )
        return cities

    def get_forecast_weather(
        self, latitude: float, longitude: float
    ) -> ForecastWeather:
        """
        Get wether for a week starting from current day
        return tuple of 2 lists with time and temperature

        :latitude: float
        :longitude: float
        :return: tuple(list, list)
        """
        fetchURL = self.forecast_url
        params = {
            "latitude": latitude,
            "longitude": longitude,
            "daily": "weather_code,wind_speed_10m_max,temperature_2m_min,temperature_2m_max,apparent_temperature_max,apparent_temperature_min",
        }

        res = requests.get(fetchURL, params=params).json()
        res_daily = res["daily"]

        dates = res_daily["time"]
        min_temperatures = res_daily["temperature_2m_min"]
        max_temperatures = res_daily["temperature_2m_max"]
        max_winds_speed = res_daily["wind_speed_10m_max"]
        weather_code = res_daily["weather_code"]
        min_apparent = res_daily["apparent_temperature_min"]
        max_apparent = res_daily["apparent_temperature_max"]

        forecast_weather = ForecastWeather(
            dates=dates,
            min_temperatures=min_temperatures,
            max_temperatures=max_temperatures,
            max_winds_speed=max_winds_speed,
            weather_code=weather_code,
            min_apparent=min_apparent,
            max_apparent=max_apparent,
        )

        return forecast_weather

    def get_current_weather(self, longitude: float, latitude: float) -> CurrentWeather:
        """
        Get current weather

        :longitude: float
        :latitude: float
        :return: int
        """
        fetchURL = self.forecast_url
        params = {
            "latitude": latitude,
            "longitude": longitude,
            "current": "temperature_2m,wind_speed_10m,weather_code,apparent_temperature",
        }

        res = requests.get(fetchURL, params=params).json()
        res_current = res["current"]

        temperature: str = res_current["temperature_2m"]
        wind: str = res_current["wind_speed_10m"]
        weather_code: str = res_current["weather_code"]
        apparent_temperature: str = res_current["apparent_temperature"]

        current_weather = CurrentWeather(
            temperature=temperature,
            wind=wind,
            weather_code=weather_code,
            apparent_temperature=apparent_temperature,
        )

        return current_weather
