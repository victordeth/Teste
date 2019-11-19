using Microsoft.EntityFrameworkCore;

namespace Api.Model
{
    public class TesteContexto : DbContext
    {
        public TesteContexto(DbContextOptions<TesteContexto> options) : base(options)
        {

        }

        public DbSet<Clientes> Clientes { get; set; }
        public DbSet<Localizacao> Localizacao { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Clientes>().HasKey(k => k.id);
            builder.Entity<Localizacao>().HasKey(k => k.idLocalizcao);
        }

    }
}
