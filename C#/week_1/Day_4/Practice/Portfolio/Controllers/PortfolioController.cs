using Microsoft.AspNetCore.Mvc;
namespace Portfolio.Controllers;   
public class Portfolio : Controller   
{
    [HttpGet("")]
    public string Index()
    {
        return "This is My Index";
    }
    [HttpGet("projects")]
    public string Projects()
    {
        return "This is My projects";
    }
    public string Contacts()
    {
        return "This is my contact";
    }
}