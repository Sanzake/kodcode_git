import json

from config.config import FAVORITES_JSON
from schemas.schemas import BodyFavoriteAdd


def get_favorites_from_json(username):
    data = json.loads(FAVORITES_JSON.read_text())
    if username in data:
        return data[username]
    
    return {"message": f"No favorites for {username}"}

def add_favorite_to_json(body: BodyFavoriteAdd):
    username = body.username
    city = body.city.model_dump()

    data = json.loads(FAVORITES_JSON.read_text())
    if username in data:
        if city not in data[username]:
            data[username].append(city)
    else:
        data[username] = [city]
    json_string = json.dumps(data, indent=2)
    FAVORITES_JSON.write_text(json_string)
    return {"message": "Added succesfully!"}