def sum_d(d: dict):
    result = 0
    for i in d.values():
        result += i
    return result


def max_d(d: dict):
    max_key = None
    for k in d.keys():
        if max_key is None or d[k] > d[max_key]:
            max_key = k
    return d[max_key]


def count_chars(str):
    result = {}
    for i in str:
        if i not in result:
            result[i] = 1
            continue
        result[i] += 1
    return result


def invert_d(d: dict):
    result = {}
    for k, v in d.items():
        result[v] = k
    return result


def merge_d(d1: dict, d2: dict):
    d1.update(d2)
    return d1


def filter_by_value(d: dict, threeshold):
    for key in list(d):
        if d[key] <= threeshold:
            del d[key]
    return d


def group_by_first_letter(lst: list):
    res = {}
    for i in lst:
        first_letter = i[0]
        if first_letter not in res:
            res[first_letter] = [i]
            continue
        res[first_letter].append(i)
    return res


def word_frequency(str):
    res = {}
    for i in str.split(" "):
        if i not in res:
            res[i] = 1
            continue
        res[i] += 1
    return res


def common_keys(d1: dict, d2: dict):
    return sorted(list(set(d1) & set(d2)))


def most_frequently(d):
    max = 0
    for i in set(d.values()):
        if list(d.values()).count(i) > max:
            max = i
    return max


print(most_frequently({"a": 1, "b": 2, "c": 1, "d": 3, "e": 1, "f": 2, "g": 2}))
