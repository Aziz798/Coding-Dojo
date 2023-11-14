class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 0

    def display_info(self):
        print(f"First Name: {self.first_name}")
        print(f"Last Name: {self.last_name}")
        print(f"Email: {self.email}")
        print(f"Age: {self.age}")
        print(f"Rewards Member: {self.is_rewards_member}")
        print(f"Gold Card Points: {self.gold_card_points}")
        print("\n")

    def enroll(self):
        if self.is_rewards_member:
            print("User already a member.")
            return False
        else:
            self.is_rewards_member = True
            self.gold_card_points = 200
            print("Enrolled successfully!")
            return True

    def spend_points(self, amount):
        if amount <= 0:
            print("Amount must be greater than 0.")
            return

        if not self.is_rewards_member:
            print("User is not a rewards member. Cannot spend points.")
            return

        if self.gold_card_points < amount:
            print("Insufficient points. Cannot spend.")
        else:
            self.gold_card_points -= amount
            print(f"{amount} points spent successfully. Remaining points: {self.gold_card_points}")


# Test the User class
if __name__ == "__main__":
    # Create a user instance
    user1 = User("John", "Doe", "john.doe@email.com", 25)
    user1.display_info()

    # Test enroll method
    user1.enroll()
    user1.display_info()

    # Create two more instances of the User class
    user2 = User("Alice", "Smith", "alice.smith@email.com", 30)
    user3 = User("Bob", "Johnson", "bob.johnson@email.com", 22)

    # Test spend_points method
    user1.spend_points(50)

    # Test enroll method for user2
    user2.enroll()
    user2.display_info()

    # Test spend_points method for user2
    user2.spend_points(80)

    # Display info for all users
    user1.display_info()
    user2.display_info()
    user3.display_info()

    # Bonus: Test re-enrolling the first user
    user1.enroll()

    # Bonus: Test preventing over-spending for the third user
    user3.spend_points(40)
    user3.display_info()
