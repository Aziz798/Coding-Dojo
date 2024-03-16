import java.util.Random;
public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;
    private  Long accountNumber;
    private static int accounts = 0;
    private static double totalMoney =0; // refers to the sum of all bank account checking and savings balances


    // CONSTRUCTOR
    // Be sure to increment the number of accounts
    public BankAccount(double checkingBalance,double savingsBalance){
        this.checkingBalance=checkingBalance;
        this.savingsBalance=savingsBalance;
        this.accountNumber=randomDigit();
        accounts+=1;
        totalMoney+= checkingBalance+savingsBalance;
    }

    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings account
    public void depositCheckingBalance(double amount){
        this.checkingBalance+=amount;
        totalMoney+=amount;
    }
    public  void depositSavingsBalance(double amount){
        this.savingsBalance+=amount;
        totalMoney+=amount;
    }
    // withdraw
    // - users should be able to withdraw money from their checking or savings account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    public  void withdrawCheckingBalance(double amount){
        if(this.checkingBalance>=amount){
            this.checkingBalance-=amount;
            totalMoney-=amount;
        }else {
            System.out.println("Checking balance doesn't have that amount");
        }
    }
    public  void withdrawSavingBalance(double amount){
        if(this.savingsBalance>=amount){
            this.savingsBalance-=amount;
            totalMoney-=amount;
        }else {
            System.out.println("Saving balance doesn't have that amount");
        }
    }
    // getBalance
    // - display total balance for checking and savings of a particular bank account
    public  void getBalance(){
        System.out.println("Saving Balance : "+this.savingsBalance);
        System.out.println("Checking Balance : "+this.checkingBalance);
    }
//    Create a private method that returns a random ten-digit account number.
private Long randomDigit(){
    Random rand = new Random();
    return rand.nextLong( 1000000000L,9999999999L+1);
}
    // GETTERS
    // for checking, savings, accounts, and totalMoney
    public static int getAccounts() {
        return accounts;
    }

    public static double getTotalMoney() {
        return totalMoney;
    }
    public  double getCheckingBalance(){
        return this.checkingBalance;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }
    public Long getAccountNumber(){
        return this.accountNumber;
    }
}
