
int[] arr1;
arr1 = new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

string[] arr2;
arr2 = new string[] { "Tim", "Martin", "Nikki", "Sara" };

bool[] arr3;
arr3 = new bool[] { 2 == 3, "1" == "1", true, false, 1 == 1 };

List<string> flavors = new List<string>();
flavors.Add("chocolate");
flavors.Add("strawbery");
flavors.Add("vanilla");
flavors.Add("cafe");
flavors.Add("pistachio");
Console.WriteLine(flavors.Count);
Console.WriteLine(flavors[2]);
flavors.RemoveAt(3);
Console.WriteLine(flavors.Count);

Dictionary<string, string> dict = new Dictionary<string, string>();

for (int i = 0; i < arr2.Length && i < flavors.Count; i++)
{
    dict.Add(arr2[i], flavors[i]);
}
Console.WriteLine("Dictionary:");
foreach (var entry in dict)
{
    Console.WriteLine($"{entry.Key}: {entry.Value}");
}