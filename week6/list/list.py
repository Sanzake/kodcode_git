def sum_up(lst: list):
    result = 0
    for i in lst:
        result += i
    return result


def maximum(lst: list):
    if len(lst) == 0:
        return "No max!"
    max = lst[0]
    for i in range(1, len(lst)):
        if lst[i] > max:
            max = lst[i]
    return max


def count(lst: list, n: int):
    result = 0
    for i in lst:
        if i == n:
            result += 1
    return result


def reverse_lst(lst: list):
    result = []
    for i in lst:
        result.insert(0, i)
    return result


def remove_duplicates(lst):
    result = []
    for i in lst:
        if i not in result:
            result.append(i)
    return result


def second_large(lst):
    if not lst:
        return
    max = maximum(lst)

    while max in lst:
        lst.remove(max)
    return maximum(lst) if lst else None


def merge_sorted_list(lst1, lst2):
    result = []

    while lst1 and lst2:
        if lst1 < lst2:
            result.append(lst1.pop(0))
        else:
            result.append(lst2.pop(0))
    if lst1:
        result.extend(lst1)
    if lst2:
        result.extend(lst2)
    return result


def caesar_sipher(lst, k):
    if k == 0 or len(lst) == 0:
        return lst
    result = []
    temp_lst = lst[:]

    k = k % len(lst)

    while k != 0:
        result.append(temp_lst.pop(-k))
        k -= 1
    result.extend(temp_lst)
    return result
