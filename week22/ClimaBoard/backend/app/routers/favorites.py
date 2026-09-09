from fastapi import APIRouter
from schemas.schemas import BodyFavoriteAdd, BodyFavoriteRemove
from services.favorites_manager import FavoritesManager

router = APIRouter(prefix="/favorites")

fm = FavoritesManager()


@router.get("")
def get_favorites(username: str):
    return fm.get_favorites_from_json(username)

@router.post("")
def add_favorite(body: BodyFavoriteAdd):
    return fm.add_favorite_to_json(body)

@router.delete("")
def remove_favorite(body: BodyFavoriteRemove):
    return  fm.remove_from_favorite(body)