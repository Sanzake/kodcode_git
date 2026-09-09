import uvicorn
from config.config import HOST, ORIGINS, PORT
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.atbash import router as atbash
from routers.city import router as city
from routers.favorites import router as favorites
from routers.health import router as health_router
from routers.search_city import router as search_city_router
from services.utils import create_favorites_json


async def lifespan(app: FastAPI):
    create_favorites_json()
    yield

app = FastAPI(lifespan=lifespan)

app.add_middleware(
    CORSMiddleware, allow_origins=ORIGINS, allow_methods=["*"], allow_headers=["*"]
)

app.include_router(health_router)
app.include_router(search_city_router)
app.include_router(city)
app.include_router(atbash)
app.include_router(favorites)


if __name__ == "__main__":
    uvicorn.run("main:app", host=HOST, port=PORT, reload=True)
