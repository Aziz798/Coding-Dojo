using Microsoft.AspNetCore.Mvc;

namespace FirstWebApp.Controllers;

public class FirstController : Controller
{
    // Routes
    [HttpGet]
    [Route("home")]
    public string Home()
    {
        return "Hello from Home in the First Controller";
    }
    [HttpGet]
    [Route("")]
    public string FirstRoute()
    {
        return "<h1>Welcome to First Web App 🎈🎈</h1>";
    }
    [HttpGet("params/{username}/{age}")]
    public string Params(string username, int age)
    {
        return $"Username is {username} \nAge: {age} years old";
    }
    [HttpGet("index")]
    public ViewResult Index()
    {
        return View("Index");
    }
    [HttpGet("dashboard")]
    public ViewResult Dashboard()
    {
        return View();
    }
    [HttpPost("process")]
    public IActionResult Process(string username , int age)
    {
        if(username is null)
        {
            return RedirectToAction("Dashboard");
        }
        ViewBag.username=username;
        ViewBag.age=age;
        return View("Index");
    } 
}