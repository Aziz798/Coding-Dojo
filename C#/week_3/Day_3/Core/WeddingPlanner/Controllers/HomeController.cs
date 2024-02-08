using System.Diagnostics;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using WeddingPlanner.Models;

namespace WeddingPlanner.Controllers;

public class HomeController(ILogger<HomeController> logger, AppDbContext db) : Controller
{
    private readonly ILogger<HomeController> _logger = logger;
    private readonly AppDbContext _db = db;

    public IActionResult Index()
    {
        return View("Index");
    }
    [SessionCheck]
    public IActionResult Privacy()
    {
        List<Wedding> weddings = _db.Weddings.Include(w=>w.MyGuests).ToList();
        return View(weddings);
    }
    [HttpPost]
    public IActionResult Reserve(Guest guest)
    {
        _db.Add(guest);
        _db.SaveChanges();
        return RedirectToAction("Privacy");
    }
    [SessionCheck]
    public IActionResult CreateWedding()
    {
        return View();
    }
    [HttpPost]
    public IActionResult Register(User user)
    {
        if (ModelState.IsValid)
        {
            bool result = _db.Users.Any(u => u.Email == user.Email);
            if (result)
            {
                ModelState.AddModelError("Email", "Email already in use. Hope by you 🤡.");
                return View("Index");
            }
            else
            {
                PasswordHasher<User> Hasher = new();
                user.Password = Hasher.HashPassword(user, user.Password);
                _db.Add(user);
                _db.SaveChanges();
                HttpContext.Session.SetInt32("userId", user.UserId);
                HttpContext.Session.SetString("username", user.Username);
                return RedirectToAction("Privacy");

            }
        }
        return View("Index");

    }
    [HttpPost]
    public IActionResult Create(Wedding wedding)
    {
        if(ModelState.IsValid)
        {
            _db.Add(wedding);
            _db.SaveChanges();
            return RedirectToAction("Privacy");
        }
        return View("CreateWedding");
    }
    [HttpPost]
    public IActionResult Login(LoginUser loginUser)
    {
        if (ModelState.IsValid)
        {
            User? userFromDb = _db.Users.FirstOrDefault(x => x.Email == loginUser.LoginEmail);
            if (userFromDb is not null)
            {
                PasswordHasher<LoginUser> hasher = new();
                var result = hasher.VerifyHashedPassword(loginUser, userFromDb.Password, loginUser.LoginPassword);
                if (result == 0)
                {
                    ModelState.AddModelError("LoginPassword", "Wrong Password.");
                    return View("Index");
                }
                HttpContext.Session.SetInt32("userId", userFromDb.UserId);
                HttpContext.Session.SetString("username", userFromDb.Username);
                return RedirectToAction("Privacy");
            }
            ModelState.AddModelError("LoginEmail", "Email doesn't exist. Try to register.");
            return View("Index");
        }
        return View("Index");
    }

    public IActionResult SeeGuests(int id)
    {
        List<Guest> guests =_db.Guests.Include(p=>p.User).Where(q=>q.WeddingId==id).ToList();
        return View(guests);
    }
    
    public IActionResult Logout()
    {
        HttpContext.Session.Clear();
        return RedirectToAction("Index");
    }
    [HttpPost]
    public IActionResult Reservation(int weddingId)
    {
        Guest guest = new() { WeddingId = weddingId, UserId = (int)HttpContext.Session.GetInt32("userId") };
        _db.Add(guest);
        _db.SaveChanges();
        return RedirectToAction("Privacy");
    }
    [HttpPost]
public IActionResult Unreserve(int weddingId)
{
    // Get the current user's ID from the session
    int userId = (int)HttpContext.Session.GetInt32("userId");

    // Find the guest entry for the current user and the specified wedding
    Guest guest = _db.Guests.FirstOrDefault(q => q.WeddingId == weddingId && q.UserId == userId);

    if (guest != null)
    {
        // Remove the guest from the list of guests for the wedding
        _db.Guests.Remove(guest);
        _db.SaveChanges();
        
        // Redirect to the appropriate action (e.g., back to the page where the wedding list is displayed)
        return RedirectToAction("Privacy", "Home"); // Or wherever you want to redirect
    }
    else
    {
        // Handle the case where the guest entry was not found
        // Perhaps return an error message or redirect to an error page
        return RedirectToAction("Index", "Home"); // Or another appropriate action
    }
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
