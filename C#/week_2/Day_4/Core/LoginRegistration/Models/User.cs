using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TheWall.Models;
public class User
{   
    [Key]
    public int UserId { get; set; }
    [Required(ErrorMessage ="First name is required")]
    [MinLength(2)]
    [Display(Name ="First Name")]
    public string FirstName { get; set; }
    [Required(ErrorMessage ="Last name is required")]
    [MinLength(2)]
    [Display(Name ="Last Name")]
    public string LastName { get; set; }
    [Required(ErrorMessage ="Email Adress is required")]
    [EmailAddress]
    public string Email { get; set; }
    [Required]
    [MinLength(8)]
    [DataType(DataType.Password)]
    public string Password { get; set; }
    [Required]
    [NotMapped]
    [Compare("Password")]
    [Display(Name ="Confirm Password")]
    [DataType(DataType.Password)]
    public string ConfirmPassword { get; set; }

    public DateTime CreatedAt { get; set; }=DateTime.Now;
    public DateTime UpdatedAt { get; set; }=DateTime.Now;

    


}