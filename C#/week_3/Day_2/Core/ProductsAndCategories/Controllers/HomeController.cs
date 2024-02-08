using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductsAndCategories.Models;

namespace ProductsAndCategories.Controllers;

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
        List<Product> products = _db.Products.ToList();
        ViewBag.products=products;
        return View();
    }
    [HttpPost]
    public IActionResult CreateProduct(Product product)
    {
        if(ModelState.IsValid)
        {
            _db.Add(product);
            _db.SaveChanges();
            return RedirectToAction("Index");
        }
        return View("Index");
    }

    public IActionResult Privacy()
    {
        List<Categories> categories = _db.Categories.ToList();
        ViewBag.Categories = categories;
        return View();
    }
    [HttpPost]
    public IActionResult CreateCategorie(Categories categories)
    {
        if(ModelState.IsValid)
        {
            _db.Add(categories);
            _db.SaveChanges();
            return RedirectToAction("Privacy");
        }
        return View("Privacy");
    }

    public IActionResult OneCategorie(int id)
    {
        Categories categories = _db.Categories.Include(p=>p.Associations).ThenInclude(p=>p.Product).FirstOrDefault(p=>p.CategoriesId==id);
        List<Product> products = _db.Products.ToList();
        ViewBag.Products = products;
        return View(categories);
    }
    [HttpPost]
    public IActionResult AddProduct(int id , int item)
    {
        Association association = new(){ProductId=item,CategoriesId=id};
        _db.Add(association);
        _db.SaveChanges();
        return RedirectToAction("OneCategorie", new { id });
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
