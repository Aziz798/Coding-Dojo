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

account1 = BankAccount(interest_rate=0.02, balance=500)
account2 = BankAccount(interest_rate=0.01)

account1.deposit(100).deposit(200).deposit(50).withdraw(120).yield_interest().display_account_info()

account2.deposit(300).deposit(150).withdraw(50).withdraw(100).withdraw(30).withdraw(80).yield_interest().display_account_info()

BankAccount.print_all_accounts_info()
