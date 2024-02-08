#pragma warning disable CS8618

using Microsoft.EntityFrameworkCore;

namespace WeddingPlanner.Models;


public class AppDbContext(DbContextOptions options) : DbContext(options)
{

    // Our Database Tables 
    public DbSet<User> Users { get; set; }
    public DbSet<Wedding> Weddings { get; set; }
    public DbSet<Guest> Guests { get; set; }
}