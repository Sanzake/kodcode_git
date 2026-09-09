from config.config import FAVORITES_JSON


def create_favorites_json():
    FAVORITES_JSON.parent.mkdir(parents=True, exist_ok=True)
    if not FAVORITES_JSON.exists():
        FAVORITES_JSON.write_text("{}")
