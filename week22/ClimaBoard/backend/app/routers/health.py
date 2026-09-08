from fastapi import APIRouter

router = APIRouter(prefix="/health")

@router.get("")
def check_health():
    return {"message": "I`m alive!!!"}