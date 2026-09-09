from fastapi import APIRouter, Depends
from schemas.schemas import Coordinates
from services.meteo_getter import MeteoGetter

router = APIRouter(prefix="/city")

mg = MeteoGetter()


@router.get("")
def city(coordinates: Coordinates = Depends()):  # noqa: B008
    current_weather = mg.get_current_weather(
        coordinates.latitude, coordinates.longitude
    )

    forecast_weather = mg.get_forecast_weather(
        coordinates.latitude, coordinates.longitude
    )

    return {"current_weather": current_weather, "forecast": forecast_weather}
