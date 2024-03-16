public class Test {
    public static void main(String[] args) {
        // Creating the first instance of CoffeeKiosk
        CoffeeKiosk kiosk1 = new CoffeeKiosk();

        // Adding menu items manually for the first instance
        kiosk1.addMenuItemByInput();
        kiosk1.addMenuItemByInput();
        // Displaying the menu for the first instance
        System.out.println("Menu for kiosk1:");
        kiosk1.displayMenu();

        // Creating the second instance of CoffeeKiosk
        CoffeeKiosk kiosk2 = new CoffeeKiosk();

        // Adding menu items manually for the second instance
        kiosk2.addMenuItemByInput();
        kiosk2.addMenuItemByInput();
        // Displaying the menu for the second instance
        System.out.println("Menu for kiosk2:");
        kiosk2.displayMenu();
    }
}
