﻿// <auto-generated />
using System;
using Api.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Api.Migrations
{
    [DbContext(typeof(TesteContexto))]
    partial class TesteContextoModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079");

            modelBuilder.Entity("Api.Model.Clientes", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Cidade");

                    b.Property<string>("Complemento");

                    b.Property<string>("Documento");

                    b.Property<string>("Endereco");

                    b.Property<int?>("LocalizacaoidLocalizcao");

                    b.Property<string>("Nome");

                    b.Property<int>("idLocalizacao");

                    b.HasKey("id");

                    b.HasIndex("LocalizacaoidLocalizcao");

                    b.ToTable("Clientes");
                });

            modelBuilder.Entity("Api.Model.Localizacao", b =>
                {
                    b.Property<int>("idLocalizcao")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Capital");

                    b.Property<string>("Continente");

                    b.Property<string>("Pais");

                    b.HasKey("idLocalizcao");

                    b.ToTable("Localizacao");
                });

            modelBuilder.Entity("Api.Model.Clientes", b =>
                {
                    b.HasOne("Api.Model.Localizacao", "Localizacao")
                        .WithMany()
                        .HasForeignKey("LocalizacaoidLocalizcao");
                });
#pragma warning restore 612, 618
        }
    }
}
