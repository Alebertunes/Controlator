namespace AppdataContext.data;
using Microsoft.EntityFrameworkCore;
using model.tablet;

public class AppDataContext : DbContext
{

    public AppDataContext(DbContextOptions<AppDataContext> options) : base(options)
    {

    }

    public DbSet<Tablet> Tablets { get; set; }
}

