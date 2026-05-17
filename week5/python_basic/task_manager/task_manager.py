separator = "\n" * 3


class Task:
    def __init__(self, task_name, priority, is_completed=False):
        self.task_name = task_name

        if not isinstance(priority, int) or not 0 <= priority <= 2:
            raise ValueError("Enter digits 0 - 2!")
        self.priority = priority

        if not isinstance(is_completed, bool):
            raise TypeError("Enter bool!")
        self.is_completed = is_completed

    def __str__(self):
        if self.priority == 0:
            priority = "low"
        elif self.priority == 1:
            priority = "medium"
        elif self.priority == 2:
            priority = "high"

        if self.is_completed:
            completed = "completed"
        else:
            completed = "not completed"

        return (
            f"Task name: {self.task_name}\n"
            f"Priority: {priority}\n"
            f"Status: {completed}\n"
        )

    def complete_task(self):
        self.is_completed = True


def create_task(task_name, priority):
    task = Task(task_name, priority)
    return task


def add_task(task_lst):
    name = input("Enter task name: ")
    try:
        priority = int(input("Enter priority 0 - 2(low - high): "))
        task = create_task(name, priority)
        task_lst.append(task)
        print("Task is added!")
    except ValueError as e:
        print(f"Error: Invalid priority! {e}")


def show_tasks(task_lst):
    print(separator)
    print("=" * 20)
    print("=== TASK LIST ===")
    if not task_lst:
        print("No tasks available.")
        return
    for id, t in enumerate(task_lst, 1):
        print("=" * 20)
        print(f"Task id: {id}")
        print(t)
        print("=" * 20)


def count_open_tasks(task_lst):
    not_completed = 0
    completed = 0
    for t in task_lst:
        if t.is_completed:
            completed += 1
        else:
            not_completed += 1
    return completed, not_completed


def count_priority_tasks(task_lst):
    high = 0

    for t in task_lst:
        if t.priority == 2:
            high += 1

    return high


def show_summary(task_lst):
    print(separator)
    print("=" * 20)
    print("=== SUMMARY ===")
    print("=" * 20)
    print(f"Total day tasks: {len(task_lst)}")
    comleted, not_completed = count_open_tasks(task_lst)
    print(f"Completed tastks: {comleted}")
    print(f"Uncomplited tasks: {not_completed}")
    high_priority = count_priority_tasks(task_lst)
    print(f"High priority tasks: {high_priority}")
    print("=" * 20)


def print_menu():
    print(separator)
    print("=" * 20)
    print("=== MENU ===")
    print("1. Add task")
    print("2. Complete task")
    print("3. Show tasks")
    print("4. Show summary")
    print("0. EXIT")
    print("=" * 20)


def main():
    list_of_tasks = []
    while True:
        print_menu()
        user_input = input("Enter your choice: ")
        try:
            user_input = int(user_input)
            if not 0 <= int(user_input) <= 5:
                raise ValueError
        except ValueError:
            print("Invalid input!")
            continue

        if user_input == 1:
            try:
                add_task(list_of_tasks)
            except TypeError:
                continue

        if user_input == 2:
            task_name = input("Enter task u want to complete: ")
            for t in list_of_tasks:
                if t.task_name == task_name:
                    t.complete_task()
                    print("Task is comleted!")

        if user_input == 3:
            show_tasks(list_of_tasks)

        if user_input == 4:
            show_summary(list_of_tasks)

        if user_input == 0:
            print("Goodbye!")
            break


if __name__ == "__main__":
    main()
