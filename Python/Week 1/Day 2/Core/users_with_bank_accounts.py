class BankAccount:
    all_accounts = []

    def __init__(self, interest_rate=0.01, balance=0):
        self.interest_rate = interest_rate
        self.balance = balance
        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self

    def display_account_info(self):
        print("Balance: ${}".format(self.balance))
        return self

    def yield_interest(self):
        self.balance += self.balance * self.interest_rate
        return self

    @classmethod
    def print_all_accounts_info(cls):
        for account in cls.all_accounts:
            print(f"Interest Rate: {account.interest_rate}, Balance: {account.balance}")
        return cls

class User:
    def __init__(self, name, email, accounts=None):
        self.name = name
        self.email = email
        self.accounts = accounts or []

    def create_account(self, interest_rate=0.01, balance=0):
        new_account = BankAccount(interest_rate, balance)
        self.accounts.append(new_account)
        return self

    def make_deposit(self, amount, account_index=0):
        if 0 <= account_index < len(self.accounts):
            self.accounts[account_index].deposit(amount)
        else:
            print("Invalid account index.")
        return self

    def make_withdrawal(self, amount, account_index=0):
        if 0 <= account_index < len(self.accounts):
            self.accounts[account_index].withdraw(amount)
            return self
        else:
            print("Invalid account index.")
            return self

    def display_user_balance(self, account_index=0):
        if 0 <= account_index < len(self.accounts):
            print(f"User: {self.name}, Account {account_index} Balance: ${self.accounts[account_index].balance}")
            return self
        else:
            print("Invalid account index.")
            return self

    def transfer_money(self, amount, other_user, from_account_index=0, to_account_index=0):
        if 0 <= from_account_index < len(self.accounts) and 0 <= to_account_index < len(other_user.accounts):
            self.accounts[from_account_index].withdraw(amount)
            other_user.accounts[to_account_index].deposit(amount)
            return self
        else:
            print("Invalid account index.")
            return self

# Example usage:

user1 = User("Alice", "alice@email.com")
user2 = User("Bob", "bob@email.com")

user1_account1 = user1.create_account(interest_rate=0.02, balance=500)
user1_account2 = user1.create_account(interest_rate=0.01)

user2_account1 = user2.create_account(interest_rate=0.015, balance=1000)

user1.make_deposit(200, account_index=0)
user1.make_withdrawal(50, account_index=0)
user1.display_user_balance(account_index=0)

user2.make_deposit(300, account_index=0)
user2.transfer_money(100, user1, from_account_index=0, to_account_index=0)

user1.display_user_balance(account_index=0)
user2.display_user_balance(account_index=0)

BankAccount.print_all_accounts_info()
