using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LogReg.Models;
public class User
{
    [Key]
    public int UserId { get; set; }

    [Required(ErrorMessage = "User name must be provided")]
    [Display(Name = "Name")]
    [MinLength(3)]
    public string Username { get; set; }

    [Required(ErrorMessage = "Please enter your email")]
    [EmailAddress(ErrorMessage = "Please enter a valid email")]
    public string Email { get; set; }

    [Required(ErrorMessage = "Please enter your Password")]
    [MinLength(6)]
    [DataType(DataType.Password)]
    public string Password { get; set; }

    [Required(ErrorMessage = "Please enter your Confirm Password")]
    [MinLength(6)]
    [NotMapped]
    [Compare("Password",ErrorMessage ="Password must match confirm password")]
    [Display(Name ="Confirm Password")]
    [DataType(DataType.Password)]
    public string ConfirmPW { get; set; }

    [Required]
    [Display(Name ="Do you want to subscribe to our newsletter")]
    public bool IsSubscribed { get; set; } = false;

    public DateTime CreatedAt { get; set; } = DateTime.Now;

    public DateTime UpdatedAt { get; set; } = DateTime.Now;

}