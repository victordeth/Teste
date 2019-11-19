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
    public class LocalizacaoController : ControllerBase
    {

        private readonly RepLocalizacao repLocalizacao;

        public LocalizacaoController(TesteContexto testeContexto)
        {
            repLocalizacao = new RepLocalizacao(testeContexto);
        }

        [HttpGet]
        public IEnumerable<Localizacao> GetAll()
        {
            return repLocalizacao.RetornarLista();
        }

        [HttpGet("{id}", Name = "GetLocalizacao")]
        public IActionResult GetById(string id)

        {
            var item = repLocalizacao.EncontrarPorKey(Int32.Parse(id));
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpGet]
        [Route("api/baselocalizacao/{busca}")]
        public IEnumerable<Localizacao> GetLocalizacaoByPais(string busca)
        {
            return repLocalizacao.RetornarListaPorFiltro(x => x.Pais.Contains(busca)).ToList();

        }

        [HttpPost]
        public IActionResult Create([FromBody] Localizacao item)
        {
            if (item == null)
            {
                return BadRequest();
            }
            item.idLocalizcao = repLocalizacao.UltimoInserido() + 1;
            repLocalizacao.Inserir(item);
            return CreatedAtRoute("GetLocalizacao", new { id = item.idLocalizcao }, item);
        }

        [HttpPost]
        [Route("[action]")]
        public IActionResult CreateMass([FromBody] IEnumerable<Localizacao> TodasLocalidades)
        {
            if (TodasLocalidades == null)
            {
                return BadRequest();
            }
            foreach (var item in TodasLocalidades)
            {
                repLocalizacao.Inserir(item);

            }

            return new NoContentResult();

        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] Localizacao item)
        {
            if (item == null || item.idLocalizcao != id)
            {
                return BadRequest();
            }
            var localizacao = repLocalizacao.EncontrarPorKey(id);
            if (localizacao == null)
            {
                return NotFound();
            }
            localizacao.Capital = item.Capital;
            localizacao.Continente = item.Continente;
            localizacao.Pais = item.Pais;
            repLocalizacao.Alterar(localizacao);
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var localizacao = repLocalizacao.EncontrarPorKey(id);
            if (localizacao == null)
            {
                return NotFound();
            }
            repLocalizacao.Excluir(localizacao);
            return new NoContentResult();
        }

    }
}