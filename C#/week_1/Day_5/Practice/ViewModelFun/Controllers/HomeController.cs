using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }
    [HttpGet("")]
    public IActionResult Index()
    {
        string Message = "Hello everyone";
        return View("Index",Message);
    }
    [HttpGet("numbers")]
    public IActionResult Number()
    {
        int[] Numbers=[1,2,3,5,4];
        return View(Numbers);
    }
    [HttpGet("user")]
    public IActionResult User()
    {
        UserModel user = new("Jhon","Doe");
        return View(user);
    }
    [HttpGet ("users")]
    public IActionResult Users()
    {
        UserModel user = new("Jhon","Doe");
        UserModel user2 = new("Adam","Jin");
        UserModel user3 = new("Aziz","Bouazizi");
        List<UserModel> users = [user,user2,user3];
        return View(users);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
