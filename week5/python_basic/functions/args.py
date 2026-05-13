def three_params(first, /, second, third):
    print(f"first: {first}, second: {second}, third: {third}")


def random_amount_params(*params):
    for i in params:
        print(i)


def gam_ve_gam(first, /, *, last):
    print(f"first: {first}, second: {last}")


three_params(123, second=345, third=567)
random_amount_params(123, 123, 3425)
gam_ve_gam(3123, last=2354)
