import requests
from config.config import CITY_URL, FORECAST_URL


class MeteoGetter:
    def __init__(self):
        self.city_url = CITY_URL
        self.forecast_url = FORECAST_URL

    def search_city(self, city_name: str) -> list:
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
            getted_id = data[i]["id"]
            getted_city_name = data[i]["name"]
            getted_country_name = data[i]["country"]
            getted_latitude = data[i]["latitude"]
            getted_longitude = data[i]["longitude"]
            cities.append(
                {
                    "id": getted_id,
                    "name": getted_city_name,
                    "country": getted_country_name,
                    "latitude": getted_latitude,
                    "longitude": getted_longitude,
                }
            )
        return cities

    def get_weather(self, latitude: float, longitude: float) -> tuple:
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
            "hourly": "temperature_2m,wind_speed_10m",
        }

        print(f"log[t.py] {fetchURL}")
        print(f"log[t.py] {params}")

        res = requests.get(fetchURL, params=params).json()
        times = res["hourly"]["time"]
        temperatures = res["hourly"]["temperature_2m"]
        winds = res["hourly"]["wind_speed_10m"]

        return (times, temperatures, winds)

    def get_current_weather(self, longitude: float, latitude: float) -> int:
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
            "current": "temperature_2m,wind_speed_10m"
        }

        res = requests.get(fetchURL, params=params).json()
        temperature = res["current"]["temperature_2m"]
        wind = res["current"]["wind_speed_10m"]

        return {"temperature": temperature, "wind": wind}
