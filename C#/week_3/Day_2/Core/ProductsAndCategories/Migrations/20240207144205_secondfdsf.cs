using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProductsAndCategories.Migrations
{
    public partial class secondfdsf : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Associations_CategoriesId",
                table: "Associations",
                column: "CategoriesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Associations_Categories_CategoriesId",
                table: "Associations",
                column: "CategoriesId",
                principalTable: "Categories",
                principalColumn: "CategoriesId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Associations_Categories_CategoriesId",
                table: "Associations");

            migrationBuilder.DropIndex(
                name: "IX_Associations_CategoriesId",
                table: "Associations");
        }
    }
}
