using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Controlator.Migrations
{
    /// <inheritdoc />
    public partial class primeiraMigracao : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tablets",
                columns: table => new
                {
                    tabletId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    modelo = table.Column<string>(type: "TEXT", nullable: true),
                    imei = table.Column<string>(type: "TEXT", nullable: true),
                    plaqueta = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tablets", x => x.tabletId);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tablets");
        }
    }
}
