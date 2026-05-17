# 1
def safe_int(s):
    try:
        return int(s)
    except ValueError:
        print("Wrong value!")
    except Exception as e:
        print("Invalid value", e)


# 2
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "undefined"


# 3
def get_value(d, key):
    try:
        return d[key]
    except KeyError:
        return "missing"


# 4
def parse_ints(values):
    result = []

    for v in values:
        try:
            result.append(int(v))
        except ValueError:
            continue
    return result


# 5
def set_age(age):
    if age < 0 or age > 150:
        raise ValueError("Invalid age!")
    return age


# 6
def retry(func, n):
    for i in range(n):
        try:
            return func()
        except Exception as e:
            last_exception = e
            continue
    if last_exception:
        raise last_exception


# 7
def count_errors(funcs):
    calls = 0

    for func in funcs:
        try:
            func()
        except Exception:
            calls += 1
    return calls


# 8
def load_config(path):
    with open(path, "r") as f:
        line = f.readline()
        try:
            int(line)
        except Exception as e:
            raise RuntimeError("failed to loadconfig") from e
