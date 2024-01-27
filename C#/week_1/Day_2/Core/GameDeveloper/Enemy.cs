public class Enemy
{
    public string Name { get; set; }
    public int Health { get; set; }
    public List<Attack> AttackList { get; set; }

    public Enemy(string name)
    {
        Name = name;
        Health = 100;
        AttackList = new List<Attack>();
    }
    public void AddAttack(Attack attack)
    {
        AttackList.Add(attack);
    }

    public virtual  Attack RandomAttack()
    {
        Random random = new Random();
        int randomIndex = random.Next(AttackList.Count);
        return AttackList[randomIndex];
    }

    public void PerformAttack(Enemy Target, Attack ChosenAttack)
    {
        Target.Health -= ChosenAttack.DamageAmount;
        Console.WriteLine($"{Name} attacks {Target.Name}, dealing {ChosenAttack.DamageAmount} damage and reducing {Target.Name}'s health to {Target.Health}!!");
    }


}