List<Eruption> eruptions =
[
    new("La Palma", 2021, "Canary Is", 2426, "Stratovolcano"),
    new("Villarrica", 1963, "Chile", 2847, "Stratovolcano"),
    new("Chaiten", 2008, "Chile", 1122, "Caldera"),
    new ("Kilauea", 2018, "Hawaiian Is", 1122, "Shield Volcano"),
    new("Hekla", 1206, "Iceland", 1490, "Stratovolcano"),
    new ("Taupo", 1910, "New Zealand", 760, "Caldera"),
    new ("Lengai, Ol Doinyo", 1927, "Tanzania", 2962, "Stratovolcano"),
    new ("Santorini", 46, "Greece", 367, "Shield Volcano"),
    new ("Katla", 950, "Iceland", 1490, "Subglacial Volcano"),
    new ("Aira", 766, "Japan", 1117, "Stratovolcano"),
    new ("Ceboruco", 930, "Mexico", 2280, "Stratovolcano"),
    new ("Etna", 1329, "Italy", 3320, "Stratovolcano"),
    new ("Bardarbunga", 1477, "Iceland", 2000, "Stratovolcano")
];
// Example Query - Prints all Stratovolcano eruptions
IEnumerable<Eruption> stratovolcanoEruptions = eruptions.Where(c => c.Type == "Stratovolcano");
PrintEach(stratovolcanoEruptions, "Stratovolcano eruptions.");
// Execute Assignment Tasks here!
 // Query 1: Find the first eruption that is in Chile and print the result.
        Eruption chileEruption = eruptions.FirstOrDefault(e => e.Location == "Chile");
        PrintResult(chileEruption, "First eruption in Chile:");

        // Query 2: Find the first eruption from the "Hawaiian Is" location and print it.
        Eruption hawaiiEruption = eruptions.FirstOrDefault(e => e.Location == "Hawaiian Is");
        PrintResult(hawaiiEruption, "First eruption in Hawaiian Is:");

        // Query 3: Find the first eruption from the "Greenland" location and print it.
        Eruption greenlandEruption = eruptions.FirstOrDefault(e => e.Location == "Greenland");
        PrintResult(greenlandEruption, "First eruption in Greenland:");

        // Query 4: Find the first eruption that is after the year 1900 AND in "New Zealand", then print it.
        Eruption nzEruption = eruptions.FirstOrDefault(e => e.Year > 1900 && e.Location == "New Zealand");
        PrintResult(nzEruption, "First eruption in New Zealand after 1900:");

        // Query 5: Find all eruptions where the volcano's elevation is over 2000m and print them.
        IEnumerable<Eruption> highElevationEruptions = eruptions.Where(e => e.ElevationInMeters > 2000);
        PrintEach(highElevationEruptions, "Eruptions with elevation over 2000m:");

        // Query 6: Find all eruptions where the volcano's name starts with "L" and print them.
        IEnumerable<Eruption> lStartingEruptions = eruptions.Where(e => e.Volcano.StartsWith("L", StringComparison.OrdinalIgnoreCase));
        PrintEachWithCount(lStartingEruptions, "Eruptions with volcano name starting with 'L'");

        // Query 7: Find the highest elevation, and print only that integer.
        int maxElevation = eruptions.Max(e => e.ElevationInMeters);
        Console.WriteLine($"\nHighest elevation: {maxElevation} meters");

        // Query 8: Use the highest elevation variable to find and print the name of the Volcano with that elevation.
        Eruption highestElevationVolcano = eruptions.First(e => e.ElevationInMeters == maxElevation);
        Console.WriteLine($"Volcano with highest elevation: {highestElevationVolcano.Volcano}");

        // Query 9: Print all Volcano names alphabetically.
        var alphabeticalNames = eruptions.Select(e => e.Volcano).OrderBy(name => name);
        PrintEach((IEnumerable<Eruption>)alphabeticalNames, "Volcano names alphabetically:");

        // Query 10: Print the sum of all the elevations of the volcanoes combined.
        int sumOfElevations = eruptions.Sum(e => e.ElevationInMeters);
        Console.WriteLine($"\nSum of all elevations: {sumOfElevations} meters");

        // Query 11: Print whether any volcanoes erupted in the year 2000.
        bool anyEruptionInYear2000 = eruptions.Any(e => e.Year == 2000);
        Console.WriteLine($"\nDid any volcano erupt in the year 2000? {anyEruptionInYear2000}");

        // Query 12: Find all stratovolcanoes and print just the first three.
        IEnumerable<Eruption> stratovolcanoes = eruptions.Where(e => e.Type == "Stratovolcano").Take(3);
        PrintEach(stratovolcanoes, "First three stratovolcano eruptions:");

        // Query 13: Print all the eruptions that happened before the year 1000 CE alphabetically according to Volcano name.
        var ancientEruptions = eruptions.Where(e => e.Year < 1000).OrderBy(e => e.Volcano);
        PrintEach(ancientEruptions, "Eruptions before the year 1000 CE alphabetically:");

        // Query 14: Redo the last query, but this time use LINQ to only select the volcano's name.
        var ancientVolcanoNames = eruptions.Where(e => e.Year < 1000).OrderBy(e => e.Volcano).Select(e => e.Volcano);
        PrintEach((IEnumerable<Eruption>)ancientVolcanoNames, "Volcano names of eruptions before the year 1000 CE:");
    

    static void PrintResult(Eruption eruption, string msg)
    {
        Console.WriteLine($"\n{msg}");
        if (eruption != null)
        {
            Console.WriteLine(eruption.ToString());
        }
        else
        {
            Console.WriteLine("No matching eruption found.");
        }
    }

    static void PrintEach(IEnumerable<Eruption> items, string msg = "")
    {
        Console.WriteLine($"\n{msg}");
        foreach (Eruption item in items)
        {
            Console.WriteLine(item.ToString());
        }
    }

    static void PrintEachWithCount(IEnumerable<Eruption> items, string msg = "")
    {
        int count = items.Count();
        Console.WriteLine($"\n{msg} ({count} eruptions found)");
        foreach (Eruption item in items)
        {
            Console.WriteLine(item.ToString());
        }
    }

