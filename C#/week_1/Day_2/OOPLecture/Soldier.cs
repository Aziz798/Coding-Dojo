public class Soldier
{
    //Propreties
    public string Name { get; set; }
    public int Age { get; set; } = 18;
    public double Power { get; set; } = 0.2;
    public double Health { get; set; } = 0.2;
    //Constructor
    public Soldier(string name)
    {
        Name = name;
    }
    public Soldier(string name, int age)
    {
        Name = name;
        Power = 0.5;
        Age = age;
        Health = 0.5;
    }
    public Soldier(string name, int age, double power, double health)
    {
        Name = name;
        Power = power;
        Age = age;
        Health = health;
    }
    public virtual void ShowInfo()
    {
        Console.WriteLine($"Soldier Name : {Name}\nAge : {Age}\nPower : {Power * 100}% \nHealth : {Health * 100}%");
    }
    public int IncreaseAge()
    {
        Age += 1;
        return Age;
    }
    public void Attack(Soldier target, double damage)
    {
        target.Health -= Power * damage * 10;
        Console.WriteLine($"{Name} attacked {target.Name} for {Power * damage * 10} ");
    }
}
