

namespace Api.Model
{
    public class Clientes
    {
        public int id { get; set; }
        public string Nome { get; set; }
        public string Documento { get; set; }
        public string Cidade { get; set; }
        public string Endereco { get; set; }
        public string Complemento { get; set; }
        public int idLocalizacao { get; set; }

        //public virtual Localizacao Localizacao { get; set; }


    }
}
