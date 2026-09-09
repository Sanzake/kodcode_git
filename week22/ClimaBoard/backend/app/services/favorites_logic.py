import json

from config.config import FAVORITES_JSON
from schemas.schemas import BodyFavoriteAdd, BodyFavoriteRemove


def get_favorites_from_json(username):
    data = json.loads(FAVORITES_JSON.read_text())
    if username in data and len(data[username]) > 0:
        return data[username]
    
    return {"message": f"No favorites for {username}"}

def add_favorite_to_json(body: BodyFavoriteAdd):
    username = body.username
    city = body.city.model_dump()

    data = json.loads(FAVORITES_JSON.read_text())
    if username in data:
        users_cities_id = [city.get("id") for city in data[username]]
        if city["id"] not in users_cities_id:
            data[username].append(city)
    else:
        data[username] = [city]
    json_string = json.dumps(data, indent=2)
    FAVORITES_JSON.write_text(json_string)
    return {"message": "Added succesfully!"}

def remove_from_favorite(body: BodyFavoriteRemove):
    username = body.username
    city_id = body.city_id

    data = json.loads(FAVORITES_JSON.read_text())

    if username not in data:
        return {"message": f"No favorites for {username}"}

    users_cities: list = data[username]

    new_users_cities = [city for city in users_cities if city["id"] != city_id]

    data[username] = new_users_cities

    json_string = json.dumps(data, indent=2)
    FAVORITES_JSON.write_text(json_string)
    return {"message": "Removed succesfully!"}
