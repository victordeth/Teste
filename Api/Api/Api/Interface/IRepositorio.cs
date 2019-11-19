using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Api.Interface
{
    interface IRepositorio<Entity> where Entity : class
    {
       
        //Comandos ... 
        bool Inserir(Entity model);
        bool Excluir(Entity model);
        bool Alterar(Entity model);

        Entity EncontrarPorKey(int id);

        //Seleção por Qtde
        int QtdeRegistros();
        int QtdeRegistros(Expression<Func<Entity, bool>> expressao);

        //selação de listas por filtros
        IEnumerable<Entity> RetornarLista(bool AsNoTracking = false);
        IEnumerable<Entity> RetornarListaPorFiltro(Expression<Func<Entity, bool>> expressao, bool AsNoTracking = false);

        //Obter Entidade
        DbSet<Entity> ObterEntidade();

    }
}
