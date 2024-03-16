using System.Diagnostics;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;
using WeddingPlanner.Models;

namespace WeddingPlanner.Controllers
{
    // HomeController class responsible for handling actions related to the home page and user interactions
    public class HomeController(ILogger<HomeController> logger, AppDbContext db) : Controller
    {
        // Logger instance for logging messages
        private readonly ILogger<HomeController> _logger = logger;
        // Database context for accessing data
        private readonly AppDbContext _db = db;

        // Action method for rendering the home page
        public IActionResult Index()
        {
            // Render the Index view
            return View("Index");
        }

        // Action method for rendering the privacy page (requires session check)
        [SessionCheck]
        public IActionResult Privacy()
        {
            // Retrieve weddings from the database including their guests
            List<Wedding> weddings = _db.Weddings.Include(w => w.MyGuests).ToList();
            // Render the Privacy view with wedding data
            return View(weddings);
        }

        // Action method for reserving a spot as a guest for a wedding (HTTP POST)
        [HttpPost]
        public IActionResult Reserve(Guest guest)
        {
            // Add guest to the database
            _db.Add(guest);
            // Save changes to the database
            _db.SaveChanges();
            // Redirect to the Privacy action to display updated data
            return RedirectToAction("Privacy");
        }

        // Action method for rendering the create wedding page (requires session check)
        [SessionCheck]
        public IActionResult CreateWedding()
        {
            // Render the CreateWedding view
            return View();
        }

        // Action method for registering a new user (HTTP POST)
        [HttpPost]
        public IActionResult Register(User user)
        {
            // Validate user input
            if (ModelState.IsValid)
            {
                // Check if the email is already in use
                bool result = _db.Users.Any(u => u.Email == user.Email);
                if (result)
                {
                    // Add error message to model state
                    ModelState.AddModelError("Email", "Email already in use.");
                    // Render the Index view with validation errors
                    return View("Index");
                }
                else
                {
                    // Hash the user's password before saving it to the database
                    PasswordHasher<User> Hasher = new();
                    user.Password = Hasher.HashPassword(user, user.Password);
                    // Add user to the database
                    _db.Add(user);
                    // Save changes to the database
                    _db.SaveChanges();
                    // Store user information in session
                    HttpContext.Session.SetInt32("userId", user.UserId);
                    HttpContext.Session.SetString("username", user.Username);
                    // Redirect to the Privacy action to display user data
                    return RedirectToAction("Privacy");
                }
            }
            // Render the Index view with validation errors
            return View("Index");
        }

        // Action method for creating a new wedding (HTTP POST)
        [HttpPost]
        public IActionResult Create(Wedding wedding)
        {
            // Validate model state
            if (ModelState.IsValid)
            {
                // Add wedding to the database
                _db.Add(wedding);
                // Save changes to the database
                _db.SaveChanges();
                // Redirect to the Privacy action to display updated data
                return RedirectToAction("Privacy");
            }
            // Render the CreateWedding view with validation errors
            return View("CreateWedding");
        }

        // Action method for user login (HTTP POST)
        [HttpPost]
        public IActionResult Login(LoginUser loginUser)
        {
            // Validate model state
            if (ModelState.IsValid)
            {
                // Find user by email
                User? userFromDb = _db.Users.FirstOrDefault(x => x.Email == loginUser.LoginEmail);
                if (userFromDb is not null)
                {
                    // Verify the hashed password
                    PasswordHasher<LoginUser> hasher = new();
                    var result = hasher.VerifyHashedPassword(loginUser, userFromDb.Password, loginUser.LoginPassword);
                    if (result == 0)
                    {
                        // Add error message to model state
                        ModelState.AddModelError("LoginPassword", "Wrong Password.");
                        // Render the Index view with validation errors
                        return View("Index");
                    }
                    // Store user information in session upon successful login
                    HttpContext.Session.SetInt32("userId", userFromDb.UserId);
                    HttpContext.Session.SetString("username", userFromDb.Username);
                    // Redirect to the Privacy action to display user data
                    return RedirectToAction("Privacy");
                }
                // Add error message to model state
                ModelState.AddModelError("LoginEmail", "Email doesn't exist. Try to register.");
                // Render the Index view with validation errors
                return View("Index");
            }
            // Render the Index view with validation errors
            return View("Index");
        }

        // Action method for displaying guests for a specific wedding
        public IActionResult SeeGuests(int id)
        {
            // Retrieve guests for the specified wedding from the database including user details
            List<Guest> guests = _db.Guests.Include(p => p.User).Where(q => q.WeddingId == id).ToList();
            // Render the SeeGuests view with guest data
            return View(guests);
        }

        // Action method for user logout
        public IActionResult Logout()
        {
            // Clear session data
            HttpContext.Session.Clear();
            // Redirect to the Index action
            return RedirectToAction("Index");
        }

        // Action method for making a reservation for a wedding (HTTP POST)
        [HttpPost]
        public IActionResult Reservation(int weddingId)
        {
            // Create a new guest entry for the specified wedding and user
            Guest guest = new() { WeddingId = weddingId, UserId = (int)HttpContext.Session.GetInt32("userId") };
            // Add guest to the database
            _db.Add(guest);
            // Save changes to the database
            _db.SaveChanges();
            // Redirect to the Privacy action to display updated data
            return RedirectToAction("Privacy");
        }

        // Action method for canceling a reservation for a wedding (HTTP POST)
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
                // Save changes to the database
                _db.SaveChanges();

                // Redirect to the Privacy action to display updated data
                return RedirectToAction("Privacy", "Home"); // Or wherever you want to redirect
            }
            else
            {
                // Handle the case where the guest entry was not found
                // Perhaps return an error message or redirect to an error page
                return RedirectToAction("Index", "Home"); // Or another appropriate action
            }
        }

        // Action filter for session check
        public class SessionCheckAttribute : ActionFilterAttribute
        {
            // Perform session check before executing action
            public override void OnActionExecuting(ActionExecutingContext context)
            {
                // Get user ID from session
                int? userId = context.HttpContext.Session.GetInt32("userId");
                if (userId == null)
                {
                    // Redirect to the Index action if user is not logged in
                    context.Result = new RedirectToActionResult("Index", "Home", null);
                }
            }
        }
    }
}
