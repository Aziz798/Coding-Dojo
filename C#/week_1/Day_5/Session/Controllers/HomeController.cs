using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Session.Models;

namespace Session.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        HttpContext.Session.SetInt32("age", 36);
        HttpContext.Session.SetString("username", "John");
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
    [HttpPost("user/create")]
    public IActionResult CreateUser(string username,int age , string favSport)
    {
        HttpContext.Session.SetString("username",username);
        HttpContext.Session.SetString("favSport",favSport);
        HttpContext.Session.SetInt32("age",age);
        Console.WriteLine($"Username :{username} \nAge :{age} \nFavourite sport :{favSport}");
        return RedirectToAction("Privacy");
    }
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }
}
