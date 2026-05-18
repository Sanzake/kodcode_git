def sum_up(tpl: tuple):
    result = 0
    for i in tpl:
        result += i
    return result


def maximum(tpl):
    if len(tpl) == 0:
        return "No max!"
    max = tpl[0]
    for i in range(1, len(tpl)):
        if tpl[i] > max:
            max = tpl[i]
    return max


def count_n(tpl, n: int):
    result = 0
    for i in tpl:
        if i == n:
            result += 1
    return result


def reverse_tpl(tpl):
    result = []
    for i in tpl:
        result.insert(0, i)
    return tuple(result)


def swap_pairs(tpl):
    result = []
    for i in range(0, len(tpl), 2):
        result.append(tpl[i + 1])
        result.append(tpl[i])
    return tuple(result)


def min_max(tpl):
    min = tpl[0]
    max = tpl[0]

    for i in tpl:
        if i < min:
            min = i
        if i > max:
            max = i
    return min, max


def distance(tpl1, tpl2):
    delta_x = abs(tpl1[0] - tpl2[0])
    delta_y = abs(tpl1[1] - tpl2[1])

    distance = (delta_x**2 + delta_y**2) ** 0.5
    return distance


# 8


def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result


def merge_sort(lst):
    if len(lst) <= 1:
        return lst
    left = lst[: len(lst) // 2]
    right = lst[len(lst) // 2 :]

    left = merge_sort(left)
    right = merge_sort(right)

    merged = merge(left, right)
    return merged


def tuples_sort(tpl1, tpl2):
    return merge_sort(tpl1 + tpl2)


print(tuples_sort((3, 2, 1), (4, 3, 2)))


# 9
def count_frequency(tpl):
    temp = []
    counts = []
    for i in tpl:
        if i not in temp:
            temp.append(i)
    for i in temp:
        counts.append(tpl.count(i))
    result = ((temp[i], counts[i]) for i in range(len(temp)))
    return tuple(result)


print(count_frequency(("a", "b", "a", "c", "b", "a")))


# 10
def rotate_tuple(tpl, k):
    lst = list(tpl)
    if k == 0 or len(lst) == 0:
        return lst
    result = []
    temp_lst = lst[:]

    k = k % len(lst)

    while k != 0:
        result.append(temp_lst.pop(-k))
        k -= 1
    result.extend(temp_lst)
    return tuple(result)


print(rotate_tuple((1, 2, 3, 4, 5), 6))
