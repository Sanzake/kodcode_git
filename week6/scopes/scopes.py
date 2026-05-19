# 1
count = 0


def bump():
    global count
    count += 1


def value():
    return count


# 2
def make_counter():
    count = 0

    def increase():
        nonlocal count
        count += 1
        return count

    return increase


# 3
"local"
"enclosing"
"global"

# 4
lst = [1, 2, 3]
print(list(range(5)))

"change built in function 'list' to variable then you cant use it"

# 5
