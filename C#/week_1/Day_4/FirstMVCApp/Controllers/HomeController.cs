using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using FirstMVCApp.Models;

namespace FirstMVCApp.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    public static List<Song> AllSongs { get; set; }=new List<Song>();

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult OneSong()
    {
        return View(AllSongs);
    }
    [HttpPost("create/v0/songs")]
    public IActionResult CreateSong(string title, string singer, int releaseYear, bool isExplicit)
    {
        ViewBag.Title=title;
        ViewBag.ReleaseYear=releaseYear;
        ViewBag.singer=singer;
        ViewBag.isExplicit=isExplicit;
        return RedirectToAction("OneSong");
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
    [HttpPost]
    public IActionResult CreateSongV1(Song newSong)
    {
        AllSongs.Add(newSong);
        System.Console.WriteLine($"Title: {newSong.Title} \nSinger: {newSong.Singer} \nRelease Year:{newSong.ReleaseYear} \nIs Explicit: {newSong.IsExplicit}");
        return RedirectToAction("OneSong");
    }
}
