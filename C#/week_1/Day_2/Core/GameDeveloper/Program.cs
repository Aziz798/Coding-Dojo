// Enemy dragonEnemy = new Enemy("Dragon");
// Attack fireBreathAttack = new Attack("Fire Breath", new Random().Next(5, 26));
// Attack tailSwipeAttack = new Attack("Tail Swipe", new Random().Next(5, 26));
// Attack clawSlashAttack = new Attack("Claw Slash", new Random().Next(5, 26));

// dragonEnemy.AddAttack(fireBreathAttack);
// dragonEnemy.AddAttack(tailSwipeAttack);
// dragonEnemy.AddAttack(clawSlashAttack);

// for (int i = 0; i < 5; i++)
// {
//     Attack selectedAttack = dragonEnemy.RandomAttack();
//     if (selectedAttack != null)
//     {
//         int damageAmount = selectedAttack.DamageAmount;
//         Console.WriteLine($"{dragonEnemy.Name} performs {selectedAttack.Name} and deals {damageAmount} damage.");
//     }
// }


// MeleeFighter meleeFighter = new MeleeFighter("Melee Warrior");
// RangedFighter rangedFighter = new RangedFighter("Archer");
// MagicCaster magicCaster = new MagicCaster("Wizard");


// meleeFighter.PerformAttack(rangedFighter, meleeFighter.AttackList[1]);
// meleeFighter.Rage();

// rangedFighter.PerformAttack(meleeFighter, rangedFighter.AttackList[0]);
// rangedFighter.Dash();
// rangedFighter.PerformAttack(meleeFighter, rangedFighter.AttackList[0]);

// magicCaster.PerformAttack(meleeFighter, magicCaster.AttackList[0]);
// magicCaster.Heal(rangedFighter);
// magicCaster.Heal(magicCaster);
Console.WriteLine("Welcome to the Game!");
        Console.Write("Enter your character's name: ");
        string playerName = Console.ReadLine();

        Player player = new(playerName);
        Enemy enemy = new MeleeFighter("Melee Warrior");

        int distance = 2; 
        Console.WriteLine($"{player.Name} vs {enemy.Name}!");

        while (player.Health > 0 && enemy.Health > 0)
        {
            
            Attack playerAttack = player.ChooseAttack();
            if (playerAttack.DamageAmount >= 0 && distance > 3)
            {
                Console.WriteLine("You are too far away for melee attacks!");
                continue;
            }

            enemy.PerformAttack(player, playerAttack);
            if (enemy.Health <= 0)
            {
                Console.WriteLine($"{enemy.Name} has been defeated!");
                break;
            }

            // Enemy's turn
            Attack enemyAttack = enemy.RandomAttack();
            player.PerformAttack(enemy, enemyAttack);
            if (player.Health <= 0)
            {
                Console.WriteLine($"{player.Name} has been defeated!");
                break;
            }
            Console.WriteLine($"{player.Name}'s health: {player.Health}");
            Console.WriteLine($"{enemy.Name}'s health: {enemy.Health}");
            Console.WriteLine("\nNext round!\n");
        }