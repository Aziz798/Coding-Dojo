for (int i = 0; i <=255; i++)
{
    Console.WriteLine(i);
}
Random rand = new Random();
for (int i = 0; i <=5; i++)
{
    Console.WriteLine(rand.Next(10,21));
}
for (int i = 0; i <=5; i++)
{
    Console.WriteLine(rand.Next(10,21)+rand.Next(10,21));
}

for (int i = 0; i <= 100; i++)
{
    if ((i % 3 == 0 || i % 5 == 0) && !(i % 3 == 0 && i % 5 == 0))
    {
        Console.WriteLine(i);
    }
}



for (int i = 0; i <= 100; i++)
{
    if ((i % 3 == 0 || i % 5 == 0) && !(i % 3 == 0 && i % 5 == 0))
    {
        if (i % 3 == 0 && i % 5 == 0)
        {
            Console.WriteLine("FizzBuzz");
        }
        else if (i % 3 == 0)
        {
            Console.WriteLine("Fizz");
        }
        else
        {
            Console.WriteLine("Buzz");
        }
    }
}



