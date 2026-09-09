from fastapi import APIRouter
from services.atbash import atbashing

router = APIRouter(prefix="/atbash")

@router.get("")
def get_atbash(user_string):
    result = atbashing(user_string)
    return {"message": result}