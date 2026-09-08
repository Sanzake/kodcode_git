import uvicorn
from fastapi import FastAPI
from routers.health import router as health_router
from routers.search_city import router as search_city_router
from services.meteo_getter import MeteoGetter

app = FastAPI()
mg = MeteoGetter()

app.include_router(health_router)
app.include_router(search_city_router)


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)
