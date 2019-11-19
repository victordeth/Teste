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
    public class RepLocalizacao : IRepositorio<Localizacao>
    {

        private readonly TesteContexto _contexto;

        public RepLocalizacao(TesteContexto contexto)
        {
            _contexto = contexto;
        }

        public bool Alterar(Localizacao model)
        {
            try
            {
                _contexto.Localizacao.Update(model);
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

        public Localizacao EncontrarPorKey(int id)
        {
            try
            {
                return _contexto.Localizacao.FirstOrDefault(t => t.idLocalizcao == id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public bool Excluir(Localizacao model)
        {
            try
            {
                _contexto.Localizacao.Remove(model);
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

        public bool Inserir(Localizacao model)
        {
            try
            {
                _contexto.Localizacao.Add(model);
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

        public DbSet<Localizacao> ObterEntidade()
        {
            try
            {
                return _contexto.Localizacao;
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
                return _contexto.Localizacao.OrderByDescending(x => x.idLocalizcao).FirstOrDefault().idLocalizcao + 1;
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
                return _contexto.Localizacao.Count();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public int QtdeRegistros(Expression<Func<Localizacao, bool>> expressao)
        {
            try
            {
                return _contexto.Localizacao.Where(expressao).Count();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Localizacao> RetornarLista(bool AsNoTracking = false)
        {
            try
            {
                if (AsNoTracking)
                    return _contexto.Localizacao.AsNoTracking().ToList();
                else
                    return _contexto.Localizacao.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public IEnumerable<Localizacao> RetornarListaPorFiltro(Expression<Func<Localizacao, bool>> expressao, bool AsNoTracking = false)
        {
            try
            {
                if (AsNoTracking)
                    return _contexto.Localizacao.AsNoTracking().Where(expressao).ToList();
                else
                    return _contexto.Localizacao.Where(expressao).ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
