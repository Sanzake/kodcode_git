# 1


def check_age_and_activity(lst_persons):
    result = []
    for p in lst_persons:
        if p[1] >= 18 and p[2]:
            result.append(p[0])
    return result


persons = [
    ["Dan", 25, True],
    ["Noa", 16, True],
    ["Yael", 30, False],
]

print(check_age_and_activity(persons))

# 2

# def handle_purchase(user_email, product_name, product_price, stock, quantity):
#     if not user_email:
#         print("Invalid user")
#         return None
#     if quantity <= 0 or quantity > stock:
#         print("Invalid quantity")
#         return None

#     price = product_price * quantity
#     if quantity >= 10:
#         price *= 0.9
#     if quantity >= 50:
#         price *= 0.85

#     stock -= quantity

#     order_user = user_email
#     order_product = product_name
#     order_quantity = quantity
#     order_total = price
#     order_status = "confirmed"
#     print(
#         f"Order {order_status}: {order_user} bought {order_quantity}x {order_product} for ${order_total}"
#     )
#     return order_user, order_product, order_quantity, order_total, order_status


def check_validaty(user_email, quantity, stock):
    if not user_email:
        print("Invalid user")
        return False
    if quantity <= 0 or quantity > stock:
        print("Invalid quantity")
        return False
    return True


def calculate_cost(product_price, quantity, stock):
    price = product_price * quantity
    if quantity >= 10:
        price *= 0.9
    if quantity >= 50:
        price *= 0.85

    stock -= quantity

    return price, stock


def handle_purchase(user_email, product_name, product_price, stock, quantity):
    if not check_validaty(user_email, quantity, stock):
        return
    price, stock = calculate_cost(product_price, quantity, stock)

    order_user = user_email
    order_product = product_name
    order_quantity = quantity
    order_total = price
    order_status = "confirmed"
    print(
        f"Order {order_status}: {order_user} bought {order_quantity}x {order_product} for ${order_total}"
    )
    return order_user, order_product, order_quantity, order_total, order_status


# 3

# def manage_students(names, grades, new_name, new_grade):
#     # validation
#     if not new_name or len(new_name) < 2:
#         print("Error: invalid name")
#         return
#     if new_grade < 0 or new_grade > 100:
#         print("Error: grade must be 0-100")
#         return

#     # add student
#     names.append(new_name)
#     grades.append(new_grade)

#     # calculate stats
#     total = sum(grades)
#     average = total / len(grades)
#     top_count = sum(1 for g in grades if g >= 90)
#     failing_count = sum(1 for g in grades if g < 56)

#     # print report
#     print("=== Student Report ===")
#     for i in range(len(names)):
#         print(f"  {names[i]}: {grades[i]}")
#     print(f"Average: {average:.1f}")
#     print(f"Top students: {top_count}")
#     print(f"Failing: {failing_count}")

#     # save to file
#     with open("students.txt", "w") as f:
#         for i in range(len(names)):
#             f.write(f"{names[i]},{grades[i]}\n")

#     return names, grades


def student_validation(new_name):
    if not new_name or len(new_name) < 2:
        print("Error: invalid name")
        return False
    return True


def grade_validation(new_grade):
    if new_grade < 0 or new_grade > 100:
        print("Error: grade must be 0-100")
        return False
    return True


def add_student(names, grades, new_name, new_grade):
    names.append(new_name)
    grades.append(new_grade)


def calculate_stats(grades):
    total = sum(grades)
    average = total / len(grades)
    top_count = sum(1 for g in grades if g >= 90)
    failing_count = sum(1 for g in grades if g < 56)
    return average, top_count, failing_count


def print_report(names, grades, average, top_count, failing_count):
    print("=== Student Report ===")
    for i in range(len(names)):
        print(f"  {names[i]}: {grades[i]}")
    print(f"Average: {average:.1f}")
    print(f"Top students: {top_count}")
    print(f"Failing: {failing_count}")


def save_to_file(names, grades):
    with open("students.txt", "w") as f:
        for i in range(len(names)):
            f.write(f"{names[i]},{grades[i]}\n")

    return names, grades


def manage_students(names, grades, new_name, new_grade):
    if student_validation(new_name) and grade_validation(new_grade):
        add_student(names, grades, new_name, new_grade)
        average, top_count, failing_count = calculate_stats(grades)
        print_report(names, grades, average, top_count, failing_count)
        return save_to_file(names, grades)


# 4

# def create_admin_user(name, email):
#     if not name or len(name) < 2:
#         raise ValueError("Invalid name")
#     if "@" not in email:
#         raise ValueError("Invalid email")
#     return name, email, "admin", "2024-01-01", True


# def create_editor_user(name, email):
#     if not name or len(name) < 2:
#         raise ValueError("Invalid name")
#     if "@" not in email:
#         raise ValueError("Invalid email")
#     return name, email, "editor", "2024-01-01", True


# def create_viewer_user(name, email):
#     if not name or len(name) < 2:
#         raise ValueError("Invalid name")
#     if "@" not in email:
#         raise ValueError("Invalid email")
#     return name, email, "viewer", "2024-01-01", True


def name_validation(name):
    if not name or len(name) < 2:
        raise ValueError("Invalid name")


def email_validation(email):
    if "@" not in email:
        raise ValueError("Invalid email")


def create_user(name, email, user_status):
    name_validation(name)
    email_validation(email)
    return name, email, user_status, "2024-01-01", True


# 5


def get_status(score):
    if score >= 90:
        return "excellent"
    elif 70 <= score < 90:
        return "good"
    elif 55 <= score < 70:
        return "average"
    elif score < 55:
        return "fail"
    else:
        return "unknown"


def is_valid_age(age):
    if isinstance(age, int) and 0 < age < 120:
        return True
    else:
        return False


def get_greeting(hour):
    if 5 <= hour < 12:
        return "Good morning"
    if 12 <= hour < 17:
        return "Good afternoon"
    if 18 <= hour < 21:
        return "Good evening"
    if hour >= 21 or hour < 5:
        return "Good night"


# 6

# def process_grades(names, all_grades):
#     result_names = []
#     result_averages = []
#     result_statuses = []
#     result_highs = []
#     result_lows = []
#     for i in range(len(names)):
#         name = names[i]
#         grades = all_grades[i]

#         if not name:
#             print(f"Error: missing name")
#             continue
#         if not grades:
#             print(f"Error: {name} has no grades")
#             continue

#         total = sum(grades)
#         average = total / len(grades)
#         status = "pass" if average >= 56 else "fail"
#         highest = max(grades)
#         lowest = min(grades)

#         result_names.append(name)
#         result_averages.append(round(average, 1))
#         result_statuses.append(status)
#         result_highs.append(highest)
#         result_lows.append(lowest)


#     print("=" * 40)
#     print("Student Grade Report")
#     print("=" * 40)
#     for i in range(len(result_names)):
#         print(f"Name: {result_names[i]}")
#         print(f"  Average: {result_averages[i]}")
#         print(f"  Status: {result_statuses[i]}")
#         print(f"  Range: {result_lows[i]} - {result_highs[i]}")
#         print()

#     passing_count = sum(1 for s in result_statuses if s == "pass")
#     print(f"Total passing: {passing_count}/{len(result_names)}")
#     return result_names, result_averages, result_statuses


def student_validate(name, grades):
    if not name:
        print("Error: missing name")
        return False
    if not grades:
        print(f"Error: {name} has no grades")
        return False
    return True


def stats_student_calculate(grades):
    total = sum(grades)
    average = total / len(grades)
    status = "pass" if average >= 56 else "fail"
    highest = max(grades)
    lowest = min(grades)
    return average, status, highest, lowest


def report_print(
    result_names, result_averages, result_statuses, result_lows, result_highs
):
    print("=" * 40)
    print("Student Grade Report")
    print("=" * 40)
    for i in range(len(result_names)):
        print(f"Name: {result_names[i]}")
        print(f"  Average: {result_averages[i]}")
        print(f"  Status: {result_statuses[i]}")
        print(f"  Range: {result_lows[i]} - {result_highs[i]}")
        print()

    passing_count = sum(1 for s in result_statuses if s == "pass")
    print(f"Total passing: {passing_count}/{len(result_names)}")


def process_grades(names, all_grades):
    result_names = []
    result_averages = []
    result_statuses = []
    result_highs = []
    result_lows = []

    for i in range(len(names)):
        name = names[i]
        grades = all_grades[i]

        if student_validate(name, grades):
            average, status, highest, lowest = stats_student_calculate(grades)
            result_names.append(name)
            result_averages.append(round(average, 1))
            result_statuses.append(status)
            result_highs.append(highest)
            result_lows.append(lowest)
    report_print()
    return result_names, result_averages, result_statuses


# 7

TAX = 0.17


def ProcessCart(prices, quantities, user_type):
    total = 0
    for i in range(len(prices)):
        current_price = prices[i]
        current_quantity = quantities[i]
        total = total + current_price * current_quantity
    # because of we need pay taxes
    total = total + total * TAX
    if user_type == "premium":
        total = total * 0.9
    elif user_type == "vip":
        total = total * 0.8
    if total > 500:
        # because of free shipping
        shipping_cost = 0
    elif total > 200:
        # because of shipping dicount
        shipping_cost = 25
    else:
        shipping_cost = 50
    total = total + shipping_cost
    return total
