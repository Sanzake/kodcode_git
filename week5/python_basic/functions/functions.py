def is_even(n):
    return not n % 2


def factorial(n):
    res = 1
    for num in range(2, n + 1):
        res *= num
    return res


def is_palindrome(s):
    s = str(s)
    for i in range(len(s) // 2):
        if s[i] != s[-(i + 1)]:
            return False
    return True


def count_digits(n):
    if n == 0:
        return 1
    counter = 0
    while n > 0:
        n //= 10
        counter += 1
    return counter


def reverse_int(n):
    minus_flag = True if n < 0 else False
    n = abs(n)
    rev_n = 0

    while n > 0:
        last_digit = n % 10

        rev_n = (10 * rev_n) + last_digit
        n //= 10
    return rev_n if not minus_flag else -rev_n


def move_zeros(lst):
    counter = 0
    while 0 in lst:
        lst.remove(0)
        counter += 1
    return lst


def sum_avg_min_max(lst):
    sum = 0
    min = lst[0]
    max = lst[0]
    for digit in lst:
        sum += digit
        min = digit if digit < min else min
        max = digit if digit > max else max
    return sum, sum / len(lst), min, max


def rev_list(lst):
    res = [lst[i] for i in range(len(lst) - 1, -1, -1)]
    return res


def remove_duplicates(lst):
    res = []
    for i in lst:
        if i not in res:
            res.append(i)
    return res
