using System.ComponentModel.DataAnnotations;

namespace ProductsAndCategories.Models;
public class Product
{
    [Key]
    public int ProductId { get; set; }
    [Required]
    public string Name { get; set; }
    [Required]
    public int Price { get; set; }
    public string Description { get; set; }
    public DateTime CreatedAt { get; set; }=DateTime.Now;
    public DateTime UpdatedAt { get; set; }=DateTime.Now;
    public List<Association> Associations { get; set; }=new();
}