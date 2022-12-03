create database wb;
use wb;

create table clientes(
cliente_id int primary key auto_increment,
nome varchar(30),
nome_social varchar(30),
genero varchar(30),
cpf varchar(30)
);

insert into clientes(nome,nome_social,genero,cpf) values('Júlia','Júlia','Feminino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Olivia','Olivia','Feminino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Carla','Carla','Feminino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Flávia','Flávia','Feminino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Renata','Renata','Feminino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Valéria','Valéria','Feminino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Simone','Simone','Feminino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Lívia','Lívia','Feminino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Amanda','Amanda','Feminino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Fernanda','Fernanda','Feminino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Beatriz','Beatriz','Feminino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Lola','Lola','Feminino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Danielle','Danielle','Feminino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Ananda','Ananda','Feminino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Carlos','Carlos','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Eduardo','Eduardo','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Cláudio','Cláudio','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Rodrigo','Rodrigo','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Rodolfo','Rodolfo','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Adam','Adam','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Arthur','Arthur','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Felipe','Felipe','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Júlio','Júlio','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Fernando','Fernando','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Jorge','Jorge','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Marco','Marco','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Marcos','Marcos','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Sergio','Sergio','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Clélio','Clélio','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Gustavo','Gustavo','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Miguel','Miguel','Masculino','444.444.444-44');
insert into clientes(nome,nome_social,genero,cpf) values('Gabriel','Gabriel','Masculino','444.444.444-44');

create table rgs(
rg_id int primary key auto_increment,
cliente_id integer,
CONSTRAINT cliente_idd FOREIGN KEY (cliente_id) REFERENCES clientes (cliente_id),
rg varchar(30),
rg_data varchar(30)
);

insert into rgs(cliente_id,rg,rg_data) values (1,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (2,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (3,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (4,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (5,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (6,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (7,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (8,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (9,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (10,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (11,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (12,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (13,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (14,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (15,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (16,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (17,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (18,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (19,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (20,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (21,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (22,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (23,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (24,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (25,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (26,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (27,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (28,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (29,'55.555.555-5','11-11-1111');
insert into rgs(cliente_id,rg,rg_data) values (30,'55.555.555-5','11-11-1111');


create table telefones(
telefone_id int primary key auto_increment,
cliente_id integer,
CONSTRAINT cliente_i FOREIGN KEY (cliente_id) REFERENCES clientes (cliente_id),
telefone varchar(30)
);

insert into telefones(cliente_id,telefone) values(1,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(2,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(3,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(4,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(5,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(6,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(7,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(8,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(9,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(10,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(11,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(12,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(13,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(14,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(15,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(16,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(17,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(18,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(19,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(20,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(21,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(22,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(23,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(24,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(25,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(26,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(27,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(28,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(29,'(11)11111-1111');
insert into telefones(cliente_id,telefone) values(30,'(11)11111-1111');

create table produtos(
produto_id int primary key auto_increment,
produto varchar(30),
preco numeric
);

insert into produtos(produto,preco) values('shampoo',30);
insert into produtos(produto,preco) values('condicionador',30);
insert into produtos(produto,preco) values('creme de barbear',25);
insert into produtos(produto,preco) values('barbeador', 30);
insert into produtos(produto,preco) values('esmalte rosa',15);
insert into produtos(produto,preco) values('máscara capilar',50);
insert into produtos(produto,preco) values('creme de rosto',120);
insert into produtos(produto,preco) values('creme de mão',50);
insert into produtos(produto,preco) values('escova', 30);
insert into produtos(produto,preco) values('pente',20);
insert into produtos(produto,preco) values('tinta preta',35);
insert into produtos(produto,preco) values('tinta castanho-escuro',35);
insert into produtos(produto,preco) values('chapinha',200);
insert into produtos(produto,preco) values('máscara de rosto', 45);
insert into produtos(produto,preco) values('esmalte branco', 15);
insert into produtos(produto,preco) values('esmalte preto',15);
insert into produtos(produto,preco) values('esmalte vermelho',15);
insert into produtos(produto,preco) values('tinta rosa',40);
insert into produtos(produto,preco) values('tinta azul',40);
insert into produtos(produto,preco) values('tinta verde-água', 40);
insert into produtos(produto,preco) values('base de unha',20);
insert into produtos(produto,preco) values('gel de cabelo',25);

create table servicos(
servico_id int primary key auto_increment,
servico varchar(30),
preco numeric
);

insert into servicos(servico,preco) values('Massagem',300);
insert into servicos(servico,preco) values('Manicure',50);
insert into servicos(servico,preco) values('Pedicure',70);
insert into servicos(servico,preco) values('Corte de cabelo feminino',100);
insert into servicos(servico,preco) values('Corte de cabelo masculino',30);
insert into servicos(servico,preco) values('Remoção de rugas',2000);
insert into servicos(servico,preco) values('Remoção de manchas na pele',1750);
insert into servicos(servico,preco) values('Aplicação de Botox',3500);
insert into servicos(servico,preco) values('Modelagem e corte de barba',40);
insert into servicos(servico,preco) values('Tratamento quedas de cabelo',2000);
insert into servicos(servico,preco) values('Tratamento para emagrecimento',6000);
insert into servicos(servico,preco) values('Escova progressiva',120);
insert into servicos(servico,preco) values('Selagem',200);
insert into servicos(servico,preco) values('Design de sobrancelhas',70);
insert into servicos(servico,preco) values('Maquiagem',70);
insert into servicos(servico,preco) values('Limpeza de pele',120);
insert into servicos(servico,preco) values('SPA',2000);
insert into servicos(servico,preco) values('Penteado',150);
insert into servicos(servico,preco) values('Hidratação capilar',100);
insert into servicos(servico,preco) values('Pintura de cabelo',135);
insert into servicos(servico,preco) values('Nutrição capilar',115);
insert into servicos(servico,preco) values('Restauração capilar',155);

create table relacaoServicos(
servico_id int,
CONSTRAINT servico_id FOREIGN KEY (servico_id) REFERENCES servicos (servico_id),
cliente_id integer,
CONSTRAINT cliente_id FOREIGN KEY (cliente_id) REFERENCES clientes (cliente_id),
quantidade int
);

insert into relacaoServicos values(1,1,1);
insert into relacaoServicos values(1,2,20);
insert into relacaoServicos values(1,3,2);
insert into relacaoServicos values(2,6,3);
insert into relacaoServicos values(2,7,5);
insert into relacaoServicos values(2,8,5);
insert into relacaoServicos values(3,20,20);
insert into relacaoServicos values(3,21,2);
insert into relacaoServicos values(3,3,4);
insert into relacaoServicos values(11,2,5);
insert into relacaoServicos values(11,6,10);
insert into relacaoServicos values(11,7,11);
insert into relacaoServicos values(12,8,24);
insert into relacaoServicos values(12,2,2);
insert into relacaoServicos values(12,30,5);
insert into relacaoServicos values(13,27,6);
insert into relacaoServicos values(13,3,7);
insert into relacaoServicos values(13,4,3);
insert into relacaoServicos values(9,5,5);
insert into relacaoServicos values(9,6,7);
insert into relacaoServicos values(9,7,8);
insert into relacaoServicos values(7,8,9);
insert into relacaoServicos values(7,9,2);
insert into relacaoServicos values(7,12,6);

create table relacaoProdutos(
produto_id int,
CONSTRAINT produto_id FOREIGN KEY (produto_id) REFERENCES produtos (produto_id),
cliente_id integer,
CONSTRAINT cliente_cod FOREIGN KEY (cliente_id) REFERENCES clientes (cliente_id),
quantidade int
);

insert into relacaoProdutos values(1,1,1);
insert into relacaoProdutos values(1,6,20);
insert into relacaoProdutos values(1,3,2);
insert into relacaoProdutos values(2,6,3);
insert into relacaoProdutos values(2,7,5);
insert into relacaoProdutos values(2,8,5);
insert into relacaoProdutos values(3,24,20);
insert into relacaoProdutos values(3,21,2);
insert into relacaoProdutos values(3,3,4);
insert into relacaoProdutos values(11,2,5);
insert into relacaoProdutos values(11,16,10);
insert into relacaoProdutos values(11,17,11);
insert into relacaoProdutos values(12,18,24);
insert into relacaoProdutos values(12,2,2);
insert into relacaoProdutos values(12,10,5);
insert into relacaoProdutos values(13,7,6);
insert into relacaoProdutos values(13,3,7);
insert into relacaoProdutos values(13,4,3);
insert into relacaoProdutos values(9,5,5);
insert into relacaoProdutos values(9,6,7);
insert into relacaoProdutos values(9,17,8);
insert into relacaoProdutos values(7,8,9);
insert into relacaoProdutos values(7,19,2);
insert into relacaoProdutos values(7,2,6);
