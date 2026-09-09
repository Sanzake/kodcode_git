from fastapi import APIRouter
from services.meteo_getter import MeteoGetter

router = APIRouter(prefix="/search-city")

mg = MeteoGetter()


@router.get("")
def search_city(city_name: str):
    cities = mg.search_city(city_name)
    return cities
