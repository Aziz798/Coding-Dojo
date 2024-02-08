using System.ComponentModel.DataAnnotations;

namespace ProductsAndCategories.Models;

public class Categories
{
    [Key]
    public int CategoriesId { get; set; }
    [Required]
    public string Name { get; set; }
    public DateTime CreatedAt { get; set; }=DateTime.Now;
    public DateTime UpdatedAt { get; set; }=DateTime.Now;

    public List<Association> Associations { get; set; }=new();
}