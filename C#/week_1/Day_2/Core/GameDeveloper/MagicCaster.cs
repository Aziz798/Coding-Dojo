class MagicCaster : Enemy
{
    public MagicCaster(string name) : base(name)
    {
        Health = 80;

        
        AddAttack(new Attack("Fireball", 25));
        AddAttack(new Attack("Lightning Bolt", 20));
        AddAttack(new Attack("Staff Strike", 10));
    }

    public void Heal(Enemy target)
    {
        int healingAmount = 40;
        target.Health = Math.Min(target.Health + healingAmount, 100);  
        Console.WriteLine($"{Name} heals {target.Name} for {healingAmount} health. {target.Name}'s new health: {target.Health}");
    }
}