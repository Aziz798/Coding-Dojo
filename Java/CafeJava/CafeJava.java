import java.util.ArrayList;

public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app.
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";

        // Menu variables (add yours below)
        Double mochaPrice = 3.5;
        Double coffePrice = 5.2;
        Double lattePrice = 6.8;
        Double cappucinoPrice = 2.4;
        ArrayList<Double> prices = new ArrayList<>();
        prices.add(mochaPrice);
        prices.add(coffePrice);
        prices.add(lattePrice);
        prices.add(cappucinoPrice);

        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
        String[] customers = {customer1, customer2, customer3, customer4};

        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;
        boolean[] orderStatus = {isReadyOrder1, isReadyOrder2, isReadyOrder3, isReadyOrder4};

        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Print out the status of each order
        for (int i = 0; i < customers.length; i++) {
            String customer = customers[i];
            String orderStatusMessage = orderStatus[i] ? readyMessage : pendingMessage;
            System.out.println(generalGreeting + customer + orderStatusMessage);
        }
    }
}
