using System.ComponentModel.DataAnnotations;

namespace TheWall.Models;

public class LoginUser
{   

    [Required(ErrorMessage ="Email Adress is required")]
    [EmailAddress]
    public string LoginEmail { get; set; }
    [Required]
    [MinLength(8)]
    [DataType(DataType.Password)]
    public string LoginPassword { get; set; }

}