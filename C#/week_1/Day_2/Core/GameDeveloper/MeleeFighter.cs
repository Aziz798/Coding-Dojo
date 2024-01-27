class MeleeFighter : Enemy
{
    public MeleeFighter(string name) : base(name)
    {
        Health = 120;
        Attack punchAttack = new Attack("Punch", 20);
        Attack kickAttack = new Attack("Kick", 15);
        Attack tackleAttack = new Attack("Tackle", 25);

        AddAttack(punchAttack);
        AddAttack(kickAttack);
        AddAttack(tackleAttack);
    }

    public void Rage()
    {
        Attack selectedAttack = RandomAttack();
        if (selectedAttack != null)
        {
            selectedAttack.DamageAmount += 10;
            PerformAttack(this, selectedAttack);
        }
    }
}