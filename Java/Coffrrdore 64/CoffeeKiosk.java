import java.util.ArrayList;
import java.util.Scanner;
public class CoffeeKiosk {
    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    public CoffeeKiosk(){
        this.menu = new ArrayList<Item>();
        this.orders = new ArrayList<Order>();
    }

    public void addMenuItem(String name ,double price){
        Item item = new Item(name,price, menu.size());
        menu.add(item);
    }
    public void displayMenu(){
        for(Item item:this.menu){
            System.out.println(item.getName()+"--- $"+item.getPrice());
        }
    }
    public void newOrder(){
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();
        Order order = new Order(name);
        displayMenu();

        String itemNumber;
        do {
            System.out.println("Please enter a menu item index or q to quit:");
            itemNumber = System.console().readLine();
            if (!itemNumber.equals("q")) {
                try {
                    Integer chosenItem = Integer.parseInt(itemNumber);
                    boolean found = false;
                    for (Item item : this.menu) {
                        if (item.getIndex() == chosenItem) {
                            order.addItem(item);
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        System.out.println("Invalid menu item index. Please try again.");
                    }
                } catch (NumberFormatException e) {
                    System.out.println("Invalid input. Please enter a valid menu item index or 'q' to quit.");
                }
            }
        } while (!itemNumber.equals("q"));

        System.out.println(order.getCustomerName() + "---" + order.getItems());
        System.out.println("Is the Order Correct? Answer 'yes' or 'no':");
        String answer = System.console().readLine();
        if(answer.equals("yes")){
            this.orders.add(order);
        } else {
            System.out.println("Order canceled.");
        }
    }
    public void addMenuItemByInput() {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter the name of the menu item:");
        String name = scanner.nextLine();

        double price = 0.0;
        boolean validPrice = false;
        while (!validPrice) {
            try {
                System.out.println("Enter the price of the menu item:");
                price = Double.parseDouble(scanner.nextLine());
                validPrice = true;
            } catch (NumberFormatException e) {
                System.out.println("Invalid input. Please enter a valid price.");
            }
        }

        addMenuItem(name, price);

        System.out.println("Menu item added successfully!");
    }


    public ArrayList<Order> getOrders() {
        return this.orders;
    }
    public ArrayList<Item> getMenu(){
        return this.menu;
    }
}
