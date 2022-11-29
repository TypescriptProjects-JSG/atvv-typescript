// conexao com o banco 
async function connect(){
    if(global.connection && global.connection.state !== "disconnected")
    return global.connection;
  
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:fatec@localhost:3306/wb");
    global.connection = connection;
    return connection;
}
// cadastro no banco
async function cliente(nome,nome_social,genero,cpf,rg,rg_data,telefone){
    const con = await connect();
    con.query(`insert into clientes (nome,nome_social,genero,cpf,rg,rg_data,telefone) 
    values('${nome}','${nome_social}','${genero}','${cpf}','${rg}','${rg_data}','${telefone}')`)
}
async function produtoc(produto,preco){
    const con = await connect();
    con.query(`insert into produtos (produto,preco) 
    values('${produto}','${preco}')`)
}
async function servicoc(servico,preco){
    const con = await connect();
    con.query(`insert into servicos (servico,preco) 
    values('${servico}','${preco}')`)
}
// ver
async function clientesc(){
    const con = await connect();
    return [rows] = await con.query(`select * from clientes;`)
}
async function produtosc(){
    const con = await connect();
    return [rows] = await con.query(`select * from produtos;`)
}
async function servicosc(){
    const con = await connect();
    return [rows] = await con.query(`select * from servicos;`)
}
// deletar
async function deletar(id,tabela){
    const con = await connect();
    con.query(`DELETE FROM ${tabela}s
    WHERE ${tabela}_id = ${id};`)
}
// editar
async function editarCliente(id,nome,nome_social,genero,cpf,rg,rg_data,telefone){
    const con = await connect();
    con.query(`update clientes 
    set nome = '${nome}',nome_social = '${nome_social}',genero = '${genero}',cpf = '${cpf}',rg = '${rg}',rg_data = '${rg_data}',telefone = '${telefone}'
    where cliente_id = ${id};`)
}
async function editar(id,item,valor,tabela){
    const con = await connect();
    con.query(`update ${tabela}s
    set ${tabela} = '${item}',preco = '${valor}'
    where ${tabela}_id = ${id};`)
}
// adicionar
async function adicionar(item,id,relacao){
    const con = await connect();
    [rows] = await con.query(`select quantidade from relacao${relacao}s 
    where cliente_id = ${id} and ${relacao}_id = ${item};`);
    if(rows.length > 0){
        con.query(`update relacao${relacao}s 
        set quantidade =${rows[0].quantidade + 1}
        where cliente_id = ${id} and ${relacao}_id = ${item};`)
    }
    else{
        con.query(`insert into relacao${relacao}s(cliente_id, ${relacao}_id, quantidade)
        values(${id},${item}, 1);`)
    }
}
// relação
async function relacaoProdutos(){
    const con = await connect();
    return [rows] = await con.query(`select * from relacaoprodutos;`)
}
async function relacaoServicos(){
    const con = await connect();
    return [rows] = await con.query(`select * from relacaoservicos;`)
}


// servidor
const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

// cadastro
app.post("/cadastro/cliente", (req, res) => {
    const { nome } = req.body;
    const { nome_social } = req.body;
    const { genero } = req.body;
    const { cpf } = req.body;
    const { rg } = req.body;
    const { data_rg } = req.body;
    const { telefone } = req.body;

    cliente(nome,nome_social,genero,cpf,rg,data_rg,telefone)
  });

app.post("/cadastro/produto", (req, res) => {
    const { produto } = req.body;
    const { preco } = req.body;

    produtoc(produto,preco)
});

app.post("/cadastro/servico", (req, res) => {
    const { servico } = req.body;
    const { preco } = req.body;

    servicoc(servico,preco)
});


// ver
app.get("/ver/clientes", (req, resp) => {
    async function main() {
        clientes = await clientesc()
        clientes = clientes[0]
        clis = new Array
        for(k in clientes){
            cli = new Array
            for(i in clientes[k]){
                cli.push(clientes[k][i])
            }
            clis.push(cli)
        }
        resp.send(clis);
        }
    main()
    });

app.get("/ver/produtos", (req, resp) => {
    async function main() {
        produtos = await produtosc()
        produtos = produtos[0]
        prods = new Array
        for(k in produtos){
            prod = new Array
            for(i in produtos[k]){
                prod.push(produtos[k][i])
            }
            prods.push(prod)
        }
        resp.send(prods);
        }
    main()
    });

app.get("/ver/servicos", (req, resp) => {
    async function main() {
        servicos = await servicosc()
        servicos = servicos[0]
        sers = new Array
        for(k in servicos){
            ser = new Array
            for(i in servicos[k]){
                ser.push(servicos[k][i])
            }
            sers.push(ser)
        }
        resp.send(sers);
        }
    main()
    });


// deletar
app.post("/deletar", (req, res) => {
    const { id } = req.body;
    const { tabela } = req.body;

    deletar(id,tabela)
}); 

// editar
app.post("/editar/cliente", (req, res) => {
    const { id } = req.body;
    const { nome } = req.body;
    const { nome_social } = req.body;
    const { genero } = req.body;
    const { cpf } = req.body;
    const { rg } = req.body;
    const { data_rg } = req.body;
    const { telefone } = req.body;

    editarCliente(id,nome,nome_social,genero,cpf,rg,data_rg,telefone)
});

app.post("/editar", (req, res) => {
    const { id } = req.body;
    const { item } = req.body;
    const { preco } = req.body;
    const { tabela } = req.body;

    editar(id,item,preco,tabela)
});

// adicionar
app.post("/adicionar", (req, res) => {
    const { id } = req.body;
    const { item } = req.body;
    const { relacao } = req.body;

    adicionar(item,id,relacao)
}); 

// relação
app.get("/relacao/produtos", (req, resp) => {
    async function main() {
        produtos = await relacaoProdutos()
        produtos = produtos[0]
        prods = new Array
        for(k in produtos){
            prod = new Array
            for(i in produtos[k]){
                prod.push(produtos[k][i])
            }
            prods.push(prod)
        }
        resp.send(prods);
        }
    main()
    });
app.get("/relacao/servicos", (req, resp) => {
    async function main() {
        var servicos = await relacaoServicos()
        produtos = servicos[0]
        prods = new Array
        for(k in produtos){
            prod = new Array
            for(i in produtos[k]){
                prod.push(produtos[k][i])
            }
            prods.push(prod)
        }
        resp.send(prods);
        }
    main()
    });

app.listen(3001, () => {
    console.log("rodando na porta 3001");
});