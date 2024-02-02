using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DojoSurvey.Models;

namespace DojoSurvey.Controllers;

public class HomeController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
    [HttpPost("create")]
public IActionResult Create(Survey survey)
{
    if (ModelState.IsValid)
    {
        
        ViewBag.SurveyData=survey;

        return View("Privacy");
    }
    else
    {
        return View("Index");
    }
}



    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
