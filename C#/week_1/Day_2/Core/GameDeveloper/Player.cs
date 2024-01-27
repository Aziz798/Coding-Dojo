public class Player :Enemy
{
    public string Name { get; }
    public int Health { get; set; }
    public List<Attack> AttackList { get; }

    public Player(string name):base(name)
    {
        Name = name;
        Health = 100;  // Default health
        AttackList = new List<Attack>
        {
            new Attack("Sword Slash", 15),
            new Attack("Shield Bash", 10),
            new Attack("Power Kick", 20),
            new Attack("Healing Potion", -30) 
        };
    }

    public Attack ChooseAttack()
    {
        Console.WriteLine($"{Name}, choose your attack:");

        for (int i = 0; i < AttackList.Count; i++)
        {
            Console.WriteLine($"{i + 1}. {AttackList[i].Name}");
        }

        int choice;
        while (!int.TryParse(Console.ReadLine(), out choice) || choice < 1 || choice > AttackList.Count)
        {
            Console.WriteLine("Invalid input. Please enter a number between 1 and " + AttackList.Count);
        }

        return AttackList[choice - 1];
    }
}