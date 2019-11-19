using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Model;
using Api.Repositorio;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [EnableCors("MyPolicy")]
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {

        private readonly RepClientes repClientes;

        public ClientesController(TesteContexto testeContexto)
        {
            repClientes = new RepClientes(testeContexto);
        }

        [HttpGet]
        public IEnumerable<Clientes> GetAll()
        {
            return repClientes.RetornarLista();
        }

        [HttpGet("{id}", Name = "GetClientes")]
        public IActionResult GetById(int id)
        {
            var item = repClientes.EncontrarPorKey(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Clientes item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            item.id = repClientes.UltimoInserido() + 1;
            repClientes.Inserir(item);
            return CreatedAtRoute("GetClientes", new { id = item.id }, item);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Clientes item)
        {
            if (item == null || item.id != id)
            {
                return BadRequest();
            }
            var Clientes = repClientes.EncontrarPorKey(id);
            if (Clientes == null)
            {
                return NotFound();
            }
            Clientes.Nome = item.Nome;
            Clientes.Documento = item.Documento;
            Clientes.Cidade = item.Cidade;
            Clientes.Endereco = item.Endereco;
            Clientes.Complemento = item.Complemento;
            Clientes.idLocalizacao = item.idLocalizacao;
            repClientes.Alterar(Clientes);
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var Clientes = repClientes.EncontrarPorKey(id);
            if (Clientes == null)
            {
                return NotFound();
            }
            repClientes.Excluir(Clientes);
            return new NoContentResult();
        }
    }
}