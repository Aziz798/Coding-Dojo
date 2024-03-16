public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount bankAccount1 = new BankAccount(50.00,500.00);
        BankAccount bankAccount2 = new BankAccount(1000.00,50000.00);
        BankAccount bankAccount3 = new BankAccount(0.00,5000.00);
        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney
        bankAccount1.depositCheckingBalance(200.00);
        bankAccount2.depositCheckingBalance(200.00);
        bankAccount3.depositCheckingBalance(200.00);

        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney

        // Static Test (print the number of bank accounts and the totalMoney)
        double accounts = BankAccount.getAccounts();
        double amountMoney = BankAccount.getTotalMoney();
//        System.out.println(accounts +"\n"+amountMoney);
        System.out.println(bankAccount1.getAccountNumber());

    }
}
