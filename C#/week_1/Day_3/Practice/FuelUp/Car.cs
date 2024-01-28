public class Car: Vehicule,INeedFuel
{
    public string FuelType {get;set;}
    public int FuelTotal {get;set;}
    public Car(string name,string color) :base(name,4,color,true)
    {
        FuelType="Gas";
        FuelTotal=0;
    }
    public void GiveFuel(int Amount)
    {
        FuelTotal+=Amount;
    }
}