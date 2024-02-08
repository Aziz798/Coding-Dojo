#pragma warning disable CS8618
using Microsoft.EntityFrameworkCore;

namespace ProductsAndCategories.Models;


public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions options) : base(options){}

    // Our Database Tables 
    public DbSet<Association> Associations { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<Categories> Categories { get; set; }
}