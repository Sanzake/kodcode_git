# 7
from datetime import datetime as dt

print(dt.now())


# 8
def public_names(m):
    names = sorted([name for name in dir(m) if not name.startswith("_")])
    return names


# 9
def add_item(item, bag):
    bag.append(item)
    return bag


"every call of function add item to the same bag"
