import uvicorn
from config.config import HOST, PORT
from fastapi import FastAPI
from routers.city import router as city
from routers.health import router as health_router
from routers.search_city import router as search_city_router
from services.meteo_getter import MeteoGetter

app = FastAPI()
mg = MeteoGetter()

app.include_router(health_router)
app.include_router(search_city_router)
app.include_router(city)


# mg = MeteoGetter()
# city = mg.search_city("paris")[0]
# lat = city["latitude"]
# lon = city["longitude"]
# print(lat, lon)

# # print(mg.get_forecast_weather(lat, lon))
# print(f"log {mg.get_current_weather(lat, lon)}")


if __name__ == "__main__":
    uvicorn.run("main:app", host=HOST, port=PORT, reload=True)
