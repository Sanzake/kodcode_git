import uvicorn
from config.config import HOST, ORIGINS, PORT
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.atbash import router as atbash
from routers.city import router as city
from routers.health import router as health_router
from routers.search_city import router as search_city_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware, allow_origins=ORIGINS, allow_methods=["*"], allow_headers=["*"]
)

app.include_router(health_router)
app.include_router(search_city_router)
app.include_router(city)
app.include_router(atbash)


if __name__ == "__main__":
    uvicorn.run("main:app", host=HOST, port=PORT, reload=True)
