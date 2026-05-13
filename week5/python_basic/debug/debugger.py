def multiply(a, b):
    return a + b


def complex_function(x):
    step1 = x + 10
    print(f"DEBUG: {step1}")
    return step1 * 2


def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b


lst = []
for i in range(10):
    print(f"DEBUG: {i}")
    lst.append(i * 10)
    print(f"DEBUG: {lst}")

print(lst)
