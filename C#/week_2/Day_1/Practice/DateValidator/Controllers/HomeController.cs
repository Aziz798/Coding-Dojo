using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DateValidator.Models;

namespace DateValidator.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

  protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if (value is DateTime date)
        {
            if (date > DateTime.Now)
            {
                return ValidationResult.Success;
            }
            else
            {
                return new ValidationResult("Please enter a date in the future.");
            }
        }

        return new ValidationResult("Invalid date format.");
    }
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
