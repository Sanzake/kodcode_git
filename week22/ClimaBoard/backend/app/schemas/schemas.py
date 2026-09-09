from pydantic import BaseModel, Field


class Coordinates(BaseModel):
    latitude: float = Field(..., ge=-90.0, le=90.0)
    longitude: float = Field(..., ge=-180.0, le=180.0)


class CityName(BaseModel):
    city_name: str = Field(..., min_length=2, max_length=50)


class CurrentWeather(BaseModel):
    temperature: float
    wind: float
    weather_code: int
    apparent_temperature: float


class City(BaseModel):
    id: int
    name: str
    country: str
    latitude: float
    longitude: float


class ForecastWeather(BaseModel):
    dates: list[str]
    min_temperatures: list[float]
    max_temperatures: list[float]
    max_winds_speed: list[float]
    weather_code: list[int]
    min_apparent: list[float]
    max_apparent: list[float]

class BodyFavoriteAdd(BaseModel):
    username: str
    city: City

class BodyFavoriteRemove(BaseModel):
    username: str
    city_id: int
    