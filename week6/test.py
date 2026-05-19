g = 5
p = 23

alice_private = 6
bob_private = 15


alice_public = 5**6 % 23
bob_public = 5**15 % 23


bobs_final_secret_key = pow(
    alice_public, bob_private, p
)  # alice_public ** bob_private % 23
print(bobs_final_secret_key)
alices_final_secret_key = pow(bob_public, alice_private, p)  # bob_public ** 6 % 23
print(alices_final_secret_key)


def print_momo():
    print("momo")


__name__ = "abc"

if __name__ == "__main__":
    print_momo()
