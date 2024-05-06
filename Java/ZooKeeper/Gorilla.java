public class Gorilla extends Mammal{
    public Gorilla(){
        super();
    }
    public void throwSomething(){
        if(this.getEnergy()<5){
            System.out.println("Gorilla has no energy");
        }else {
            this.setEnergy(-5);
            System.out.println("the gorilla has thrown something");
        }
    }
    public void eatBanana(){
        this.setEnergy(10);
        System.out.println("Gorilla is satisfied");
    }
    public void climb(){
        this.setEnergy(-10);
        System.out.println("Gorilla has climbed a tree");
    }

}
