from fastapi import FastAPI
from services.meteo_getter import MeteoGetter

app = FastAPI()
mg = MeteoGetter()


@app.get("/")
def read_root():
    return {"message": "Hello world"}

