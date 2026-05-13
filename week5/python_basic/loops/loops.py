def odds():
    for i in range(10):
        if i == 7:
            break
        if not i % 2:
            continue
        else:
            print(i)


def get_pass():
    while True:
        password = input("Enter pasword: ")
        if password == "1234":
            print("Welcome!")
            break
        else:
            print("Try again!")


def product_list():
    list_of_products = []
    while True:
        data = input("Enter product: ")
        if data == "done":
            break
        list_of_products.append(data)
    print(list_of_products)


def rows_and_cols():
    for row in range(1, 3):
        for col in range(1, 3):
            if col == 2:
                break
            print(row, col)


def vowels_count():
    vowels = "aeiou"
    counter = 0
    user_input = input("Enter string: ")

    for char in user_input.lower():
        if char in vowels:
            counter += 1
    print(counter)


def multi_table():
    for i in range(1, 6):
        for j in range(1, 6):
            print(f"{i}x{j}={i*j}")


def reversed_str():
    user_input = input("Enter string: ")
    res = ""

    for i in range(len(user_input) - 1, -1, -1):
        res += user_input[i]
    print(res)


def even_counting():
    user_input = int(input("Enter num: "))
    leng = len(str(user_input))

    even_counter = 0

    while leng > 1:
        leng = len(str(user_input))
        place = "1"
        place = int(place + ("0" * (leng - 1)))
        n = user_input // place
        even_counter += 1 if not n % 2 else 0
        user_input = user_input - n * place
    print(even_counter)


def double_char(string):
    res = ""
    for char in string:
        res += char * 2
    print(res)


def max_num():
    max = int(input("Enter num: "))
    while True:
        n = int(input("Enter num: "))
        if n == 0:
            break
        max = n if n > max else max
    print(max)


def find_specsympol(string):
    for char in string:
        if not char.isalnum():
            print("False")
            return
            # break
    print("True")


num = 32145
reversed_num = 0

while num > 0:
    last_digit = num % 10

    reversed_num = (reversed_num * 10) + last_digit
    num = num // 10
print(reversed_num)
