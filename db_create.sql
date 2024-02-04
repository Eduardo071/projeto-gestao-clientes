CREATE DATABASE Projeto-gestao-cliente;

CREATE TABLE clientes (
	id serial4 NOT NULL,
	nome varchar(100) NOT NULL,
	email varchar(100) NOT NULL,
	telefone varchar(20) NOT NULL,
	coordenada_x float8 NOT NULL,
	coordenada_y float8 NOT NULL,
);