# # Assignment: User
# # For this assignment you will create the user class and add a couple methods!

# ####### Note: NOT ALL CODE FROM THE VIDEO IS PROVIDED #######

# class User:

#     def __init__(self, first_name, last_name, email, age):

#         self.first_name = first_name
#         self.last_name = last_name
#         self.email = email
#         self.age = age
#         self.is_rewards_member = False
#         self.gold_card_points = 0

#     # Methods:
#     # display_info(self) - Have this method print all 
#     # of the users' details on separate lines.

#     def display_info(self):
#         print("==========================")
#         print(f"First name: {self.first_name}")
#         print(f"Last name: {self.last_name}")
#         print(f"Email: {self.email}")
#         print(f"Age: {self.age}")
#         print(f"Member: {self.is_rewards_member}")
#         print(f"Current Points: {self.gold_card_points}")
#         print("==========================")

#     def enroll(self):

#         # NINJA BONUS
#         # Add logic in the enroll method to check if 
#         if self.is_rewards_member:
#             print("user alreday member")
#             return False
        

#         # they are a member already, and if they are, 
#         # print "User already a member." and return False, otherwise return True.

#         # REGULAR STUFF

#         # Have this method change the user's member
#         # status to True and 
#         self.is_rewards_member = True

#         self.gold_card_points = 200
#         return True

#         # set their gold card points to 200.
#         #######   You can do it!


    
    
#     def spend_points(self, amount):
#         if self.gold_card_points < amount:
#             print("you don't have enough points")
#             return
        
#         self.gold_card_points -= amount

#         # Add logic in the spend points method
#         # to be sure they have enough points to 
#         # spend that amount and handle appropriately.
        
#         # PSEUDO CODE FOR NINJA BONUS
#         # if they don't have enough points:
#             # print to the console -- "You don't have enough points."
#             # then return # exit function!

#         # decrease the user's points by the amount specified.
#         self.gold_card_points
#         # .... this line is incomplete .. how do set this to a new value?

    

#     # Ninja Bonuses:

#     # Example usage:
# user1 = User("John", "Doe", "john.doe@example.com", 25)
# user2 = User("Jane", "Smith", "jane.smith@example.com", 30)

# # Spend 50 points for user1
# user1.spend_points(50)

# # Enroll user2
# user2.enroll()

# # Spend 80 points for user2
# user2.spend_points(80)

# # Display information for all users
# user1.display_info()
# user2.display_info()




# my_user = User("Sadie", "Flick", "sflick@codingdojo.com", 99)
# my_user.display_info()
# my_user.enroll()
# my_user.display_info()
# my_user.spend_points(100)
# my_user.display_info()





class User:
    def __init__(self, first_name, last_name, email, age, is_rewards_member=False, gold_card_points=0):
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
            print(f"Spent {amount} gold card points. Remaining points: {self.gold_card_points}")
        else:
            print("Insufficient gold card points.")

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

# BONUS: Try to spend 40 points on the third user
user3.spend_points(40)









































