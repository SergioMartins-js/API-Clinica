using Microsoft.EntityFrameworkCore;
using APIClinica.Models;

namespace APIClinica.Data
{
    public class APIClinicaContext : DbContext
    {
        public APIClinicaContext(DbContextOptions<APIClinicaContext> options) : base(options)
        {
        }

        public DbSet<Paciente> Pacientes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Mapeamento de propriedades e configurações adicionais...
        }
    }
}
