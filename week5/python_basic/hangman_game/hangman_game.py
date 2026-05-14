import random

list_of_words = [
    "perplexity",
    "wisdom",
    "abcd",
    "provide",
    "kiln",
    "google",
    "abracadabra",
    "apple",
    "amber",
    "abyss",
    "anchor",
    "arrow",
    "aspect",
    "axiom",
    "azure",
    "beyond",
    "bishop",
    "blaze",
    "bonus",
    "bounce",
    "bright",
    "cactus",
    "canvas",
    "canyon",
    "castle",
    "chaos",
    "cipher",
    "clover",
    "coffee",
    "comet",
    "cosmic",
    "craft",
    "crystal",
    "dancer",
    "danger",
    "dawn",
    "desert",
    "diamond",
    "drift",
    "dragon",
    "eagle",
    "earth",
    "echo",
    "eclipse",
    "effort",
    "element",
    "energy",
    "enigma",
    "escape",
    "evolve",
    "fabric",
    "faith",
    "fantom",
    "flame",
    "flower",
    "forest",
    "fossil",
    "frozen",
    "galaxy",
    "garden",
    "ghost",
    "glory",
    "guitar",
    "habit",
    "hazard",
    "heaven",
    "helmet",
    "hollow",
    "hunter",
    "icon",
    "impact",
    "island",
    "ivory",
    "jacket",
    "jaguar",
    "jungle",
    "justice",
    "karma",
    "knight",
    "ladder",
    "legend",
    "lemon",
    "logic",
    "lucky",
    "luxury",
    "magic",
    "magnet",
    "market",
    "melody",
    "memory",
    "mirror",
    "museum",
    "mystic",
    "nature",
    "nebula",
    "night",
    "nomad",
    "ocean",
    "olive",
    "orbit",
    "oxygen",
    "panda",
    "palace",
    "phantom",
    "phoenix",
    "planet",
    "player",
    "pocket",
    "poison",
    "puzzle",
    "quantum",
    "quartz",
    "quest",
    "quiver",
    "rabbit",
    "radar",
    "rainbow",
    "rebel",
    "rhythm",
    "river",
    "rocket",
    "royal",
    "savage",
    "shadow",
    "silent",
    "silver",
    "spirit",
    "spring",
    "status",
    "storm",
    "summer",
    "sunset",
    "symbol",
    "target",
    "theory",
    "thunder",
    "tiger",
    "token",
    "trophy",
    "tunnel",
    "turtle",
    "unique",
    "update",
    "urban",
    "utopia",
    "valley",
    "velvet",
    "vessel",
    "victory",
    "vintage",
    "vision",
    "vortex",
    "walker",
    "walnut",
    "weapon",
    "whisper",
    "winter",
    "wizard",
    "wolf",
    "wonder",
    "world",
    "vocal",
    "vivid",
    "yacht",
    "zebra",
    "zenith",
]
separator = "=" * 27
super_separator = "\n" * 3


def get_secret_word(lst):
    """Get random word from the list"""

    word = lst[random.randint(0, len(lst) - 1)]
    return word


def split_and_hide_word(word):
    """Split each leter in the word to list and create list of hiden word"""

    secret_word = []
    hidden_word = []
    for char in word:
        secret_word.append(char)
        hidden_word.append("#")
    return secret_word, hidden_word


def check_validity(char, used_letters):
    """Validation of user input"""

    char = char.lower()
    if not char.isalpha():
        print("Enter only letters!")
        return False
    if len(char) != 1:
        print("Enter only one letter!")
        return False
    if not "a" <= char <= "z":
        print("Enter only english letters!")
        return False
    if char in used_letters:
        print(f"{char} is alredy used!")
        return False
    return True


def get_valid_input(used_letters):
    """Getting user input"""

    while True:
        char = input("Enter letter: ")
        if check_validity(char, used_letters):
            return char.lower()


def open_char(guess, secret_word, hidden_word):
    """Open letter that user guess"""

    for i, v in enumerate(secret_word):
        if guess == v:
            hidden_word[i] = guess
    return hidden_word


def print_game_status(attempts, used_letters, hidden_word):
    print(separator)
    print(f"=== Left attempts - {attempts} ===")
    if used_letters:
        print(f"=== Used letters: {used_letters} ===")
    print("- - - - - - - - - - - - - -")
    print("=== Secret word ===")
    print(f"--- {" ".join(hidden_word)} ---")
    print(separator)
    print(super_separator)


def print_end_game_status(attempts, score, secret_word):
    print(separator)
    print("=== Secret word ===")
    print(f"--- {" ".join(secret_word)} ---")
    print(separator)
    if attempts > 0:
        print("=== GOOD JOB! ===")
        print(f"=== Score: {score} ===")
    else:
        print("=== GAME OVER! ===")
        print(f"--- Score: {score} ---")

    print(separator)
    print(super_separator)


def print_menu():
    print(separator)
    print("=== Menu ===")
    print(separator)
    print("1 - START GAME")
    print("2 - SETTINGS")
    print("0 - EXIT")
    print(separator)
    print(super_separator)


def game(attempts, starting_attempts):
    """The game"""
    used_letters = ""
    word = get_secret_word(list_of_words)
    secret_word, hidden_word = split_and_hide_word(word)

    while attempts > 0 and "#" in hidden_word:
        print_game_status(attempts, used_letters, hidden_word)

        guess = get_valid_input(used_letters)

        if guess in secret_word:
            print("=== RIGHT ===")
            hidden_word = open_char(guess, secret_word, hidden_word)
        else:
            print("=== WRONG ===")
            used_letters += guess + " "
            attempts -= 1
        print(super_separator)

    score = counting_score(hidden_word, attempts, starting_attempts)

    print_end_game_status(attempts, score, word)


def counting_score(hidden_word, attempts, starting_attempts):
    """
    The function calculates score after the game and provides proportional bonus base on difficulty

    Difficult bonus depends on starting attemts
    Penalty depends on attempts left

    Basic bonus is guessed letters * 10 * difficult bonus
    Difficult bonus is (26 / starting attempts) ** 2
    Penalty is errors * 7 * difficult bonus

    Guessing of all letters give (100 * difficult) points
    Score cannot be less then 0

    """

    guessed_letters = len(hidden_word) - hidden_word.count("#")
    difficult_bonus = (26 / starting_attempts) ** 2
    errors = starting_attempts - attempts
    penalty = errors * 7 * difficult_bonus

    if "#" not in hidden_word:
        score = 100 * difficult_bonus
    else:
        score = 0

    score += guessed_letters * 10 * difficult_bonus
    score -= penalty

    return max(0, int(score))


def set_attempts():
    """Settings"""
    while True:
        try:
            attempts = int(input("Enter number of attempts: "))
            if attempts < 1 or attempts > 26:
                raise ValueError
            break
        except ValueError:
            print("Invalid value!")

    print(f"Attempts established: {attempts}")
    return attempts


def main():
    attempts = 10
    starting_attempts = attempts
    while True:
        print_menu()
        user_input = input("Enter digit you want: ")

        if user_input not in ["0", "1", "2"]:
            print("Enter numbers (0 - 2)")
            continue
        user_input = int(user_input)

        if user_input == 1:
            print(super_separator)
            game(attempts, starting_attempts)

        if user_input == 2:
            attempts = set_attempts()
            starting_attempts = attempts

        if user_input == 0:
            break
        print(super_separator)
    print("Good bye!!!")


if __name__ == "__main__":
    main()
