class User:
    def __init__(
        self,
        first_name,
        last_name,
        email,
        age,
        is_rewards_member=False,
        gold_card_points=0,
    ):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = is_rewards_member
        self.gold_card_points = gold_card_points

    def display_info(self):
        print("==========================")
        print(f"First name: {self.first_name}")
        print(f"Last name: {self.last_name}")
        print(f"Email: {self.email}")
        print(f"Age: {self.age}")
        print(f"Member: {self.is_rewards_member}")
        print(f"Current Points: {self.gold_card_points}")
        print("==========================")
        return self

    def enroll(self):
        if self.is_rewards_member:
            print("User already a member.")
            return False
        else:
            self.is_rewards_member = True
            self.gold_card_points = 200
            return True

    def spend_points(self, amount):
        if self.gold_card_points >= amount:
            self.gold_card_points -= amount
            print(
                f"Spent {amount} gold card points. Remaining points: {self.gold_card_points}"
            )
            return self
        else:
            print("Insufficient gold card points.")
            return self


# Outside the class (outer scope)
# Create a user instance and call display_info method to test
user1 = User("John", "Doe", "john.doe@example.com", 25)
user1.display_info()

# Call enroll method on user1
enrollment_success = user1.enroll()
if enrollment_success:
    print("Enrollment successful!")

# Create 2 more instances of the User class
user2 = User("Rengoku", "hashira", "rengokuhashira@example.com", 30)
user3 = User("tanjiro", "Hashira", "tanjirohashira@example.com", 35)

# Have the first user spend 50 points
user1.spend_points(50)

# Have the second user enroll
enrollment_success = user2.enroll()
if enrollment_success:
    print("Enrollment successful!")

# Have the second user spend 80 points
user2.spend_points(80)

# Call the display method on all users
user1.display_info()
user2.display_info()
user3.display_info()

# BONUS: Try to re-enroll the first user
re_enrollment_success = user1.enroll()
if not re_enrollment_success:
    print("Re-enrollment prevented.")
user1.display_info().spend_points(50)
user2.spend_points(80).display_info()
user3.spend_points(80).display_info()
