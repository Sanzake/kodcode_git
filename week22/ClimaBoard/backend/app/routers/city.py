from fastapi import APIRouter
from services.meteo_getter import MeteoGetter

router = APIRouter(prefix="/city")

mg = MeteoGetter()


@router.post("")
def city(latitude: float, longitude: float):
    current_temperature = mg.get_current_weather(latitude, longitude)
    times, temperatures, winds = mg.get_weather(latitude, longitude)

    return {"current_temperature": current_temperature, "forecast": {"times": times, "temperature": temperatures, "winds": winds}}