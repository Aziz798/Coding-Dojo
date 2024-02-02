public class User
{
    [FutureDate(ErrorMessage = "Please enter a valid future date.")]
    public DateTime Birthday { get; set; }
}