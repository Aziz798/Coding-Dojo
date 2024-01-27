public class Wine : Drink
{
    public string Region;
    public int BottledYear;

    public Wine(string name, string color, double temp, string region, int year, int calories)
        : base(name, color, temp, false, calories)
    {
        Region = region;
        BottledYear = year;
    }

    public override void ShowDrink()
    {
        base.ShowDrink();
        Console.WriteLine($"Region: {Region}, Bottled Year: {BottledYear}");
    }
}