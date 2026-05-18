def remove_duplicates(lst):
    return list(set(lst))


def count_uniq(lst):
    counter = 0
    for i in set(lst):
        counter += 1
    return counter


def sorted_intersection(lst1, lst2):
    result = set(lst1) & set(lst2)
    result = list(result)
    return result


def sorted_uniq(lst1, lst2):
    result = set(lst1) | set(lst2)
    result = list(result)
    return result


def is_subset(lst1, lst2):
    return lst1 <= lst2


def is_uniq_chars(str):
    if len(str) == len(set(str)):
        return True
    return False


# 7
def first_non_uniq(lst: list):
    if len(set(lst)) == len(lst):
        return
    seen = set()
    for i in lst:
        if i in seen:
            return i
        seen.add(i)


def disitnct_words(str: str):
    return len(set(str.lower().split(" ")))


# 9
def sum_exists(lst, n):
    seen = set()

    for i in lst:
        if n - i in seen:
            return True
        seen.add(i)
    return False


def symmetric_difference(lst1: list, lst2: list):
    lst = lst1 + lst2
    lst1, lst2 = set(lst1), set(lst2)
    result = [i for i in lst if i not in lst1 or i not in lst2]
    result = set(result)
    result = list(result)
    result.sort()
    return result


print(symmetric_difference([1, 1, 2], [2, 3]))
