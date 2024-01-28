public class Horse: Vehicule,INeedFuel
{
    public string FuelType {get;set;}
    public int FuelTotal {get;set;}
    public Horse(string name,string color) :base(name,2,color,false)
    {
        FuelType="Hay";
        FuelTotal=0;
    }
    public void GiveFuel(int Amount)
    {
        FuelTotal+=Amount;
    }
}