import json

from config.config import FAVORITES_JSON
from schemas.schemas import BodyFavoriteAdd, BodyFavoriteRemove


class FavoritesManager:
    def __init__(self):
        self.favorites_path = FAVORITES_JSON


    def get_data_from_json(self) -> dict:
        data = json.loads(self.favorites_path.read_text())
        return data


    def write_data_to_json(self, data: dict):
        json_string = json.dumps(data, indent=2)
        self.favorites_path.write_text(json_string)


    def get_favorites_from_json(self, username):
        data = self.get_data_from_json()

        if username in data and len(data[username]) > 0:
            return data[username]

        return {"message": f"No favorites for {username}"}


    def add_favorite_to_json(self, body: BodyFavoriteAdd):
        username = body.username
        city = body.city.model_dump()

        data = self.get_data_from_json()

        if username in data:
            users_cities_id = [city.get("id") for city in data[username]]
            if city["id"] not in users_cities_id:
                data[username].append(city)
        else:
            data[username] = [city]

        self.write_data_to_json(data)
        return {"message": "Added succesfully!"}


    def remove_from_favorite(self, body: BodyFavoriteRemove):
        username = body.username
        city_id = body.city_id

        data = self.get_data_from_json()

        if username not in data:
            return {"message": f"No favorites for {username}"}

        users_cities: list = data[username]

        new_users_cities = [city for city in users_cities if city["id"] != city_id]

        data[username] = new_users_cities

        self.write_data_to_json(data)
        return {"message": "Removed succesfully!"}
