using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models;

public class Wedding
{
    [Key]
    public int WeddingId { get; set; }
    [Required]
    [Display(Name = "Wedder One")]
    [MinLength(2)]
    public string WedderOne { get; set; }
    [Required]
    [Display(Name = "Wedder Two")]
    [MinLength(2)]
    public string WedderTwo { get; set; }
    [Required]
    public int UserId { get; set; }
    [WeddingFuture]
    [Required]
    public DateTime Date { get; set; }
    [Required]
    [MinLength(2)]
    public string Adress { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;

    public User? Owner { get; set; }
    public List<Guest> MyGuests { get; set; } = new();

    public class WeddingFutureAttribute : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {

            if ((DateTime)value < DateTime.Now)
            {
                return new ValidationResult("Wedding Should be in the future");
            }
            else
            {
                return ValidationResult.Success;
            }
        }
    }
}