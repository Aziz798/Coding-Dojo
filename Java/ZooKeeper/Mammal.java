public class Mammal {
    private Integer energy;
    public Mammal(){
        this.energy=100;
    }
    public Mammal(Integer energy){
        this.energy=energy;
    }
    public Integer displayEnergy(){
        System.out.println("Energy Level: "+this.energy);
        return this.energy;
    }
    public void setEnergy(Integer energy){
        this.energy+=energy;
    }
    public Integer getEnergy(){
        return this.energy;
    }
}
