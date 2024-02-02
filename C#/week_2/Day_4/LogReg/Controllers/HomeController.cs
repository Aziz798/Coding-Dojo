using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using LogReg.Models;
using Microsoft.AspNetCore.Identity;

namespace LogReg.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly AppDbContext _db;


    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
        _db=_db;
    }

    public IActionResult Index()
    {
        return View();
    }
    [HttpPost]
    public IActionResult Register(User user)
    {
        if(ModelState.IsValid)
        {
            if( _db.Users.Any(u=>u.Email==user.Email))
            {
                ModelState.AddModelError("Email","Email already in use . Hope by you 😊");
                return View("Index");
            }
            PasswordHasher<User> hasher = new();
            user.Password=hasher.HashPassword(user,user.Password);
            _db.Add(user);
            _db.SaveChanges();
            HttpContext.Session.SetInt32("userId",user.UserId);
            HttpContext.Session.SetString("username",user.Username);
            return RedirectToAction("Privacy");
        }
        return View("Index");
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
}
