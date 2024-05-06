public class Bat extends Mammal{
    public Bat(){
        super(300);
    }

    public void fly(){
        this.setEnergy(-50);
    }
    public void eatHumans(){
        this.setEnergy(25);
    }
    public void attackTown(){
        this.setEnergy(-100);
    }
}
