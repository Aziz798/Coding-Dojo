public class Sniper : Soldier // Inheritence 
{
    public double Precision { get; set; }
    public double EagleEye { get; set; }
    public double HiddenSkills { get; set; }
    public string Weapon { get; set; }
    public Sniper(string name, int age) : base(name, age, 1, 1)
    {
        Precision = 0.9;
        EagleEye = 0.7;
        HiddenSkills = 1;
        Weapon = "Sniper";
    }
    public override void ShowInfo()
    {
        base.ShowInfo();
        Console.WriteLine($"Precision: {Precision}\nEagel Eye: {EagleEye} \nHidden Skills : {HiddenSkills} \nWeapon : {Weapon}");
    }
}