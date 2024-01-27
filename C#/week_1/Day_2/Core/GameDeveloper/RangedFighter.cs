class RangedFighter : Enemy
{
    public int Distance { get; private set; }

    public RangedFighter(string name) : base(name)
    {
        Distance = 5;
        AddAttack(new Attack("Shoot an Arrow", 20));
        AddAttack(new Attack("Throw a Knife", 15));
    }

    public void Dash()
    {
        Distance = 20;
        Console.WriteLine($"{Name} performs a dash and sets Distance to {Distance}.");
    }

    public override Attack RandomAttack()
    {
        if (Distance < 10)
        {
            Console.WriteLine($"{Name} is too close to perform a ranged attack!");
            return null;
        }

        return base.RandomAttack();
    }
}