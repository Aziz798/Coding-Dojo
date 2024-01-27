List<Drink> AllBeverages = [];

Soda cola = new Soda("Cola", "Brown", 4.0, false, 150);
Coffee americano = new Coffee("Americano", "Black", 85.0, "Medium", "Arabica", 5);
Wine redWine = new("Red Wine", "Red", 18.0, "France", 2018, 120);


AllBeverages.Add(cola);
AllBeverages.Add(americano);
AllBeverages.Add(redWine);


foreach (Drink beverage in AllBeverages)
{
    beverage.ShowDrink();
    Console.WriteLine(); 
}