public class Soda : Drink
{
    public bool IsDiet;

    public Soda(string name, string color, double temp, bool isDiet, int calories)
        : base(name, color, temp, true, calories)
    {
        IsDiet = isDiet;
    }

    public override void ShowDrink()
    {
        base.ShowDrink();
        Console.WriteLine($"Diet: {IsDiet}");
    }
}