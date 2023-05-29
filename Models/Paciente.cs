using System.ComponentModel.DataAnnotations;

namespace APIClinica.Models
{
    public class Paciente
    {
        public int Id { get; set; }

        [Required]
        public string? Nome { get; set; }

        public int Idade { get; set; }

        public string? Endereco { get; set; }

        // Outras propriedades...
    }
}
