using System.ComponentModel.DataAnnotations;

namespace DojoSurvey.Models;

public class Survey
{
    [Required]
    [MinLength(3)]
    public string Name { get; set; }
    [Required]
    [Display(Name="Dojo Location")]
    public string DojoLocation { get; set; }
    [Required]
    [Display(Name="Favourite Language")]
    public string FavouriteLanguage { get; set; }
    [Display(Name = "Additional Comments (optional)")]
    public string? Comment { get; set; }=null;
}