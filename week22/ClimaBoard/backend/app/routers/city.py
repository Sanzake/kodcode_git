from fastapi import APIRouter
from services.meteo_getter import MeteoGetter

router = APIRouter(prefix="/city")

mg = MeteoGetter()


@router.get("")
def city(latitude: float, longitude: float):
    current_weather = mg.get_current_weather(latitude, longitude)
    
    forecast_weather = mg.get_forecast_weather(latitude, longitude)

    return {"current_weather": current_weather, "forecast": forecast_weather}