using Microsoft.AspNetCore.Mvc;

namespace RAZORFUN.Controllers;   
public class Fun: Controller 
{
    [HttpGet("")]
    public ViewResult Index()
    {
        return View();
    }
}