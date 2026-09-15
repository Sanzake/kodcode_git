from pathlib import Path

CITY_URL = "https://geocoding-api.open-meteo.com/v1/search"
FORECAST_URL = "https://api.open-meteo.com/v1/forecast"

CITIES_TO_GET = 5

TIMEOUT = 10

HOST = "127.0.0.1"
PORT = 8000

ORIGINS = ["http://localhost:5173"]


EN_ALPHABET = "abcdefghijklmnopqrstuvwxyz"
TARGET_EN = EN_ALPHABET[::-1]

HE_ALPHABET = "אבגדהוזחטיכךלמםנןסעפףצץקרשת"
TARGET_HE = HE_ALPHABET[::-1]

SYMBOLS = " _-=+?/|!@#$%^&*().,"


FAVORITES_JSON = Path("data/favorites.json")
