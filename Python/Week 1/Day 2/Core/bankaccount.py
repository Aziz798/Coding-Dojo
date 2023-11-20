class BankAccount:
    # Default values for interest rate and balance
    def __init__(self, int_rate=0.01, balance=0):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        # Increase the account balance by the given amount
        self.balance += amount
        # Return self for method chaining
        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            # Decrease the account balance by the given amount if there are sufficient funds
            self.balance -= amount
        else:
            # If there is not enough money, print a message and deduct $5
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        # Return self for method chaining
        return self

    def display_account_info(self):
        # Print the account balance
        print(f"Balance: ${self.balance}")
        # Return self for method chaining
        return self

    def yield_interest(self):
        # Increase the account balance by the current balance * the interest rate (as long as the balance is positive)
        if self.balance > 0:
            self.balance += self.balance * self.int_rate
        # Return self for method chaining
        return self

    @classmethod
    def print_all_accounts_info(cls, accounts):
        # Class method to print info for all instances of a Bank Account
        for account in accounts:
            print(f"Interest Rate: {account.int_rate}, Balance: {account.balance}")

# Create two accounts
account1 = BankAccount().deposit(100).deposit(50).deposit(200).withdraw(75).yield_interest().display_account_info()
account2 = BankAccount().deposit(500).deposit(1000).withdraw(200).withdraw(150).withdraw(50).withdraw(100).yield_interest().display_account_info()

# NINJA BONUS: Print all instances of a Bank Account's info
BankAccount.print_all_accounts_info([account1, account2])


# class BankAccount:
#     # don't forget to add some default values for these parameters!
#     def __init__(self, int_rate = 0.01, balance = 0):
#         self.int_rate = int_rate
#         self.balance = balance
#         # your code here! (remember, instance attributes go here)
#         # don't worry about user info here; we'll involve the User class soon
#     def deposit(self, amount):
#         # your code here
#         self.balance + amount
#         return self

#     def withdraw(self, amount):
#         if self.balance >= amount:
#             self.balance-=amount
#         else:
#             print('Insufficient funds: Charging a $5 fee')
#             self.balance-=5
#             return self

#         # your code here
#     def display_account_info(self):
#         print(f"balance: ${self.balance}")
#         return self
#         # your code here
#     def yield_interest(self):
#         # your code here
#         if self.balance>0:
#             self.balance+=self.balance*self.int_rate
#             return self


# class BankAccount:
#     # don't forget to add some default values for these parameters!
#     def __init__(self, int_rate = 0.02, balance = 0):

#         self.int_rate = int_rate
#         self.balance = balance
#         # your code here! (remember, instance attributes go here)
#         # don't worry about user info here; we'll involve the User class soon
#     def deposit(self, amount):
#         self.balance+=amount

#         # your code here
#     def withdraw(self, amount):
#         if self.balance >= amount:
#             return self
#         else:
#             print('nsufficient funds: Charging a $5 fee')
#             self.balance-=5
#             return self

#         # your code here
#     def display_account_info(self):
#         print(f"account balance: {self.balance}")
#         return self
#         # your code here
#     def yield_interest(self):
#         if self.balance>=0:
#             self.balance += int


#     def yield_interest(self):
#         # Increase the account balance by the current balance * the interest rate (as long as the balance is positive)
#         if self.balance > 0:
#             self.balance += self.balance * self.int_rate
#         # Return self for method chaining
# return self
# your code here
