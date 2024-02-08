using System.ComponentModel.DataAnnotations;

namespace ProductsAndCategories.Models;

public class Association
{
    [Key]
    public int AssociationId { get; set; }
    public int ProductId { get; set; }
    public int CategoriesId { get; set; }
    public Product? Product { get; set; }
    public Categories? Categories { get; set; }
}