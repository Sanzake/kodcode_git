from fastapi import APIRouter
from services.meteo_getter import MeteoGetter

router = APIRouter(prefix="/city")

mg = MeteoGetter()


@router.post("")
def city(latitude: float, longitude: float):
    current_weather = mg.get_current_weather(latitude, longitude)
    
    times, temperatures, winds = mg.get_weather(latitude, longitude)

    return {"current_weather": current_weather, "forecast": {"times": times, "temperature": temperatures, "winds": winds}}