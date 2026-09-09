from fastapi import APIRouter, Depends
from schemas.schemas import CityName
from services.meteo_getter import MeteoGetter

router = APIRouter(prefix="/search-city")

mg = MeteoGetter()


@router.get("")
def search_city(city_name: CityName = Depends()):  # noqa: B008
    cities = mg.search_city(city_name)
    return cities
