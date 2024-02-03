using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SessionWorkshop.Models;

namespace SessionWorkshop.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        string? Username  = HttpContext.Session.GetString("username");
        if(Username is not null)
        {
            ViewBag.Username=Username;
            ViewBag.Num=HttpContext.Session.GetInt32("num");
            return View();
        }
        return RedirectToAction("Index");
    }
    [HttpPost("login/user")]
    public IActionResult Login(string name)
    {
        HttpContext.Session.SetString("username",name);
        HttpContext.Session.SetInt32("num",0);
        return RedirectToAction("Privacy");
    }
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }
    [HttpPost]
    public IActionResult Add()
    {
        int Number=(int)HttpContext.Session.GetInt32("num");
        HttpContext.Session.SetInt32("num",Number+1);
        return RedirectToAction("Privacy");
    }
    [HttpPost]
    public IActionResult Minus()
    {
        int Number=(int)HttpContext.Session.GetInt32("num");
        HttpContext.Session.SetInt32("num",Number-1);
        return RedirectToAction("Privacy");
    }
    [HttpPost]
    public IActionResult Random()
    {
        int Number=(int)HttpContext.Session.GetInt32("num");
        Random random = new(); 
        HttpContext.Session.SetInt32("num",Number+random.Next(20));
        return RedirectToAction("Privacy");
    }
    [HttpPost]
    public IActionResult Times()
    {
        int Number=(int)HttpContext.Session.GetInt32("num");
         
        HttpContext.Session.SetInt32("num",Number*2);
        return RedirectToAction("Privacy");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
