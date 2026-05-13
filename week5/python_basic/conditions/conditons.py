def defaul_get():
    name = input("Enter your name: ")
    print(f"Hello {name or "Anonymous"}!")


def get_three_num():
    a, b, c = (
        int(input("Enter num: ")),
        int(input("Enter num: ")),
        int(input("Enter num: ")),
    )
    res = 0
    res += a > 0
    res += b > 0
    res += c > 0

    print(res)


def get_score(score):
    score = int(score)
    res = ""

    res += "A" * (score >= 90 and score <= 100)
    res += "B" * (score >= 80 and score <= 89)
    res += "C" * (score >= 70 and score <= 79)
    res += "F" * (score < 70)
    print(res)
