Vehicule bmw = new("M5","Red");
Vehicule mercedes = new ("CLG","Black");
Vehicule bicycle = new Vehicule("BMX",1,"Green",false);
Vehicule bus = new("Double Decker",50,"Red",true);
List <Vehicule> vehicules = [bmw,mercedes,bicycle,bus];

foreach (Vehicule vehicule in vehicules )
{
    vehicule.ShowInfo();
}
bmw.Travel(150);
bmw.ShowInfo();