# 7
from datetime import datetime as dt

print(dt.now())


# 8
def public_names(m):
    names = sorted([name for name in dir(m) if not name.startswith("_")])
    return names


# 9
def add_item(item, bag=None):
    if bag is None:
        bag = []

    bag.append(item)
    return bag


"every call of function with default bag add item to the same bag"
