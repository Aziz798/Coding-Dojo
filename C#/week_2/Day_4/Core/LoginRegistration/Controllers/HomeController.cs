using System.Diagnostics;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using TheWall.Models;

namespace TheWall.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly AppDbContext _db;

    public HomeController(ILogger<HomeController> logger,AppDbContext db)
    {
        _logger = logger;
        _db=db;
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
            bool EmailExist = _db.Users.Any(u=>u.Email==user.Email);
            if(EmailExist)
            {
                ModelState.AddModelError("Email","Email Already Exists");
            }
            PasswordHasher<User> hasher = new();
            user.Password =hasher.HashPassword(user,user.Password);
            _db.Add(user);
            _db.SaveChanges();
            HttpContext.Session.SetInt32("userId",user.UserId);
            return RedirectToAction("Privacy");
        }
        return View("Index");
    }

    [HttpPost]
    public IActionResult Login(LoginUser loginUser)
    {
        if(ModelState.IsValid)
        {
            User? userFromDb = _db.Users.FirstOrDefault(u=>u.Email==loginUser.LoginEmail);
            if(userFromDb is not null)
            {
                PasswordHasher<LoginUser> hasher = new();
                var passwordCheck = hasher.VerifyHashedPassword(loginUser,userFromDb.Password,loginUser.LoginPassword);
                if(passwordCheck==0)
                {
                    ModelState.AddModelError("LoginPassword","Password is incorrect");
                    return View("Index");
                }
                else
                {
                    HttpContext.Session.SetInt32("userId",userFromDb.UserId);
                    return RedirectToAction("Privacy");
                }
            }
            ModelState.AddModelError("LoginEmail","Email Doesn' Exist");
            return View("Index");
        }
        return View("Index");
    }
    [SessionCheck]
    public IActionResult Privacy()
    {
        return View();
    }
    [HttpPost]
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

    public class SessionCheckAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            int? userId = context.HttpContext.Session.GetInt32("userId");
            if (userId == null)
            {
                context.Result = new RedirectToActionResult("Index", "Home", null);
            }
        }
    }
}
