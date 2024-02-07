using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using CrudDelicious.Models;


namespace CrudDelicious.Controllers;

public class HomeController(ILogger<HomeController> logger, AppDbContext db) : Controller
{
    private readonly ILogger<HomeController> _logger = logger;
    private readonly AppDbContext _db = db;

    public IActionResult Index()
    {
        List<Dish> AllDishes = [.. _db.Dishes];
        return View(AllDishes);
    }

    public IActionResult Privacy()
    {
        return View();
    }
    [HttpPost]
    public IActionResult CreateDish(Dish dish)
    {
        if(ModelState.IsValid)
        {
            _db.Add(dish);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
        return View("Privacy");
    }

    public IActionResult UpdateDish(int id)
    {
        Dish dish = _db.Dishes.FirstOrDefault(u=>u.DishId==id);
        return View(dish);
    }
    [HttpPost]
    public IActionResult Update(Dish dish)
    {
        Dish dish1 = _db.Dishes.FirstOrDefault(d=>d.DishId==dish.DishId);
        dish1.Name=dish.Name;
        dish1.Chef=dish.Chef;
        dish1.Tastiness=dish.Tastiness;
        dish1.Calories=dish.Calories;
        dish1.Description=dish.Description;
        dish1.UpdatedAt=DateTime.Now;
        return RedirectToAction("OneDish",dish1.DishId);
    }
    public IActionResult OneDish(int id)
    {
        Dish dish = _db.Dishes.FirstOrDefault(d=>d.DishId==id);
        return View(dish);
    }
    [HttpPost]
    public IActionResult Delete(int id)
    {
        Dish? dish = _db.Dishes.SingleOrDefault(d=>d.DishId==id);
        _db.Dishes.Remove(dish);
        _db.SaveChanges();
        return RedirectToAction("Index");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
