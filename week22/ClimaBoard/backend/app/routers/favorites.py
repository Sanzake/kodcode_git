from fastapi import APIRouter
from schemas.schemas import BodyFavoriteAdd
from services.favorites import add_favorite_to_json, get_favorites_from_json

router = APIRouter(prefix="/favorites")


@router.get("")
def get_favorites(username: str):
    return get_favorites_from_json(username)

@router.post("")
def add_favorite(body: BodyFavoriteAdd):
    return add_favorite_to_json(body)

@router.delete("")
def remove_favorite(city_id):
    pass