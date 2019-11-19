using Api.Interface;
using Api.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace Api.Repositorio
{
    public class RepClientes : IRepositorio<Clientes>
    {

        private readonly TesteContexto _contexto;

        public RepClientes(TesteContexto contexto)
        {
            _contexto = contexto;
        }

        public bool Alterar(Clientes model)
        {
            try
            {
                _contexto.Clientes.Update(model);
                if (_contexto.SaveChanges() > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public Clientes EncontrarPorKey(int id)
        {
            try
            {
                return _contexto.Clientes.FirstOrDefault(t => t.id == id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool Excluir(Clientes model)
        {
            try
            {
                _contexto.Clientes.Remove(model);
                if (_contexto.SaveChanges() > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool Inserir(Clientes model)
        {
            try
            {
                _contexto.Clientes.Add(model);
                if (_contexto.SaveChanges() > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public DbSet<Clientes> ObterEntidade()
        {
            try
            {
                return _contexto.Clientes;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int QtdeRegistros()
        {
            try
            {
                return _contexto.Clientes.Count();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int UltimoInserido()
        {
            try
            {
                return _contexto.Clientes.OrderByDescending(x => x.id).FirstOrDefault().id + 1;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int QtdeRegistros(Expression<Func<Clientes, bool>> expressao)
        {
            try
            {
                return _contexto.Clientes.Where(expressao).Count();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Clientes> RetornarLista(bool AsNoTracking = false)
        {
            try
            {
                if (AsNoTracking)
                    return _contexto.Clientes.AsNoTracking().ToList();
                else
                    return _contexto.Clientes.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Clientes> RetornarListaPorFiltro(Expression<Func<Clientes, bool>> expressao, bool AsNoTracking = false)
        {
            try
            {
                if (AsNoTracking)
                    return _contexto.Clientes.AsNoTracking().Where(expressao).ToList();
                else
                    return _contexto.Clientes.Where(expressao).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
