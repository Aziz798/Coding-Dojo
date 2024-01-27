public class Coffee : Drink
{
    public string Roast;
    public string Beans;

    public Coffee(string name, string color, double temp, string roast, string beans, int calories)
        : base(name, color, temp, false, calories)
    {
        Roast = roast;
        Beans = beans;
    }

    public override void ShowDrink()
    {
        base.ShowDrink();
        Console.WriteLine($"Roast: {Roast}, Beans: {Beans}");
    }
}