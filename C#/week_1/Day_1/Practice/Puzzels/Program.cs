Random rand = new();
string CoinFlip()
{

    int value = rand.Next(0, 2);
    if (value == 0)
    {
        return "Heads";
    }
    return "Tails";

}
Console.WriteLine(CoinFlip());

int DiceRoll()
{
    int[] dice = [1, 2, 3, 4, 5, 6];
    return dice[rand.Next(dice.Length)];
}
Console.WriteLine(DiceRoll());

List<int> RollDiceMultipleTimes(int time)
{
    List<int> RolledDices = new List<int>();
    for (int i = 0; i <= time; i++)
    {
        RolledDices.Add(DiceRoll());
    }
    return RolledDices;
}