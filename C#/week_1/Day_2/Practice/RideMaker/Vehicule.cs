public class Vehicule
{
    public string Name { get; set; }
    public int NumberPassengers { get; set; }
    public string Color { get; set; }
    public bool HasEngine { get; set; }
    public int Miles { get; set; } = 0;

    public Vehicule(string name, int num, string color, bool hasEngine)
    {
        Name = name;
        NumberPassengers = num;
        Color = color;
        HasEngine = hasEngine;
    }
    public Vehicule(string name, string color)
    {
        Name = name;
        NumberPassengers = 5;
        Color = color;
        HasEngine = true;
    }
    public void ShowInfo()
    {
        Console.WriteLine($"Name: {Name} \nNumber of Passengers: {NumberPassengers} \nColor:{Color} \nHas Engine:{HasEngine} \nMiles: {Miles} ");
    }
    public void Travel(int distance)
    {
        Miles = distance;
        Console.WriteLine($"{Name} has went {Miles} miles.");
    }
}