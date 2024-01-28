Car bmw = new("M5","Red");
Car mercedes = new ("CLG","Black");
Horse Billy = new ("Billy","Black");
List<Vehicule> vehicules= [bmw,mercedes,Billy];

foreach (Vehicule vehicule in vehicules)
{
    vehicule.ShowInfo();
    vehicule.Travel(50);
    System.Console.WriteLine("------");
    vehicule.ShowInfo();
}
