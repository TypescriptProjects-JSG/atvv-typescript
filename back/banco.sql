create database wb;
use wb;

create table clientes(
cliente_id int primary key auto_increment,
nome varchar(30),
nome_social varchar(30),
genero varchar(30),
cpf varchar(30),
rg varchar(30),
rg_data date,
telefone varchar(30)
);

create table produtos(
produto_id int primary key auto_increment,
produto varchar(30),
preco numeric
);

create table servicos(
servico_id int primary key auto_increment,
servico varchar(30),
preco numeric
);

create table relacaoServicos(
servico_id int,
CONSTRAINT servico_id FOREIGN KEY (servico_id) REFERENCES servicos (servico_id),
cliente_id integer,
CONSTRAINT cliente_id FOREIGN KEY (cliente_id) REFERENCES clientes (cliente_id),
quantidade int
);

create table relacaoProdutos(
produto_id int,
CONSTRAINT produto_id FOREIGN KEY (produto_id) REFERENCES produtos (produto_id),
cliente_id integer,
CONSTRAINT cliente_cod FOREIGN KEY (cliente_id) REFERENCES clientes (cliente_id),
quantidade int
);

