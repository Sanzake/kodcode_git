from config.config import EN_ALPHABET, HE_ALPHABET, SYMBOLS, TARGET_EN


def find_reverce_char(char: str):
    if char in SYMBOLS:
        return char
    if char in EN_ALPHABET:
        for i in range(len(EN_ALPHABET)):
            if EN_ALPHABET[i] == char:
                return TARGET_EN[i]
    for i in range(len(HE_ALPHABET)):
        if HE_ALPHABET[i] == char:
            return TARGET_EN[i]
    return ""


def atbashing(user_string: str) -> str:
    user_string = user_string.lower()
    result = ""
    for char in user_string:
        result += find_reverce_char(char)
    if len(user_string) == len(result):
        return result
    return "Something went wrong"
